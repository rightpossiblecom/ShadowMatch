import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';
import 'package:shadowmatch/core/services/storage_service.dart';
import 'package:shadowmatch/features/shell/app_shell_view_model.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  static const String routeName = '/settings';

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final appVm = context.watch<AppShellViewModel>();

    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            'Settings',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.w800,
                ),
          ),
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Row(
                children: [
                  const Icon(Icons.dark_mode_outlined),
                  const SizedBox(width: 12),
                  const Expanded(child: Text('Theme')),
                  DropdownButton<ThemeMode>(
                    value: appVm.themeMode,
                    onChanged: (mode) {
                      if (mode == null) return;
                      appVm.setThemeMode(mode);
                    },
                    items: const [
                      DropdownMenuItem(
                        value: ThemeMode.system,
                        child: Text('System'),
                      ),
                      DropdownMenuItem(
                        value: ThemeMode.light,
                        child: Text('Light'),
                      ),
                      DropdownMenuItem(
                        value: ThemeMode.dark,
                        child: Text('Dark'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),
          Card(
            child: Column(
              children: [
                ListTile(
                  leading: const Icon(Icons.privacy_tip_outlined),
                  title: const Text('Privacy Policy'),
                  subtitle: Text(
                    AppConstants.privacyPolicyUrl,
                    style: TextStyle(color: colorScheme.onSurfaceVariant),
                  ),
                  onTap: () => _openUrl(AppConstants.privacyPolicyUrl),
                ),
                const Divider(height: 1),
                ListTile(
                  leading: const Icon(Icons.description_outlined),
                  title: const Text('Terms of Service'),
                  subtitle: Text(
                    AppConstants.termsOfServiceUrl,
                    style: TextStyle(color: colorScheme.onSurfaceVariant),
                  ),
                  onTap: () => _openUrl(AppConstants.termsOfServiceUrl),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Card(
            child: ListTile(
              leading: Icon(Icons.delete_outline, color: colorScheme.error),
              title: const Text('Clear app data'),
              subtitle: const Text('Resets highscores and settings.'),
              onTap: () => _confirmClear(context),
            ),
          ),
          const SizedBox(height: 12),
          Card(
            child: const ListTile(
              leading: Icon(Icons.verified_user_outlined),
              title: Text('Data collection'),
              subtitle: Text('We do not collect any personal data.'),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _confirmClear(BuildContext context) async {
    final colorScheme = Theme.of(context).colorScheme;
    final ok = await showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Clear app data?'),
          content: const Text('This will reset highscores and settings.'),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: const Text('Cancel'),
            ),
            FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: colorScheme.error,
                foregroundColor: colorScheme.onError,
              ),
              onPressed: () => Navigator.of(context).pop(true),
              child: const Text('Clear'),
            ),
          ],
        );
      },
    );

    if (ok != true) return;

    await StorageService().clearAll();
    if (!context.mounted) return;
    await context.read<AppShellViewModel>().load();
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('App data cleared.')),
    );
  }

  Future<void> _openUrl(String url) async {
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      // ignore: avoid_print
      print('Could not launch $url');
    }
  }
}

