import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shadowmatch/features/game/game_mode.dart';
import 'package:shadowmatch/features/game/game_screen.dart';
import 'package:shadowmatch/features/home/home_view_model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  static const String routeName = '/home';

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return ChangeNotifierProvider(
      create: (_) => HomeViewModel()..load(),
      child: Consumer<HomeViewModel>(
        builder: (context, vm, _) {
          return SafeArea(
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Text(
                  'ShadowMatch',
                  style: Theme.of(context).textTheme.displaySmall?.copyWith(
                        fontWeight: FontWeight.w700,
                      ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Match the shape to its correct shadow.',
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: colorScheme.onSurfaceVariant,
                      ),
                ),
                const SizedBox(height: 20),
                _StatRow(
                  label: 'Best (Classic)',
                  value: vm.bestScoreClassic.toString(),
                ),
                const SizedBox(height: 8),
                _StatRow(
                  label: 'Best (Time Attack)',
                  value: vm.bestScoreTimeAttack.toString(),
                ),
                const SizedBox(height: 8),
                _StatRow(
                  label: 'Best Streak',
                  value: vm.bestStreak.toString(),
                ),
                const SizedBox(height: 24),
                FilledButton.icon(
                  onPressed: () => _startGame(context, GameMode.classic),
                  icon: const Icon(Icons.play_arrow),
                  label: const Text('Play Classic (3 lives)'),
                ),
                const SizedBox(height: 12),
                FilledButton.tonalIcon(
                  onPressed: () => _startGame(context, GameMode.timeAttack),
                  icon: const Icon(Icons.timer_outlined),
                  label: const Text('Play Time Attack (60s)'),
                ),
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: colorScheme.surfaceContainerHighest,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: colorScheme.outlineVariant),
                  ),
                  child: Text(
                    'Tip: Don’t overthink—quick recognition is the goal.',
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: colorScheme.onSurfaceVariant,
                        ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Future<void> _startGame(BuildContext context, GameMode mode) async {
    await Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => GameScreen(mode: mode)),
    );
  }
}

class _StatRow extends StatelessWidget {
  const _StatRow({required this.label, required this.value});

  final String label;
  final String value;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Row(
      children: [
        Expanded(
          child: Text(
            label,
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  color: colorScheme.onSurfaceVariant,
                ),
          ),
        ),
        Text(
          value,
          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.w800,
              ),
        ),
      ],
    );
  }
}

