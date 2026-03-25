import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:provider/provider.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';
import 'package:shadowmatch/core/theme/app_theme.dart';
import 'package:shadowmatch/features/about/about_screen.dart';
import 'package:shadowmatch/features/home/home_screen.dart';
import 'package:shadowmatch/features/settings/settings_screen.dart';
import 'package:shadowmatch/features/shell/app_shell.dart';
import 'package:shadowmatch/features/shell/app_shell_view_model.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await Hive.openBox<String>(AppConstants.appDataBox);
  await Hive.openBox<String>(AppConstants.settingsBox);

  runApp(
    ChangeNotifierProvider(
      create: (_) => AppShellViewModel()..load(),
      child: const ShadowMatchApp(),
    ),
  );
}

class ShadowMatchApp extends StatelessWidget {
  const ShadowMatchApp({super.key});

  @override
  Widget build(BuildContext context) {
    final appVm = context.watch<AppShellViewModel>();
    return MaterialApp(
      title: AppConstants.appName,
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: appVm.themeMode,
      home: const AppShell(),
      routes: {
        HomeScreen.routeName: (_) => const HomeScreen(),
        SettingsScreen.routeName: (_) => const SettingsScreen(),
        AboutScreen.routeName: (_) => const AboutScreen(),
      },
    );
  }
}
