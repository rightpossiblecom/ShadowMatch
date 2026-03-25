import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shadowmatch/features/game/game_mode.dart';
import 'package:shadowmatch/features/game/game_view_model.dart';
import 'package:shadowmatch/features/game/shape_painter.dart';

class GameScreen extends StatelessWidget {
  const GameScreen({
    super.key,
    required this.mode,
  });

  final GameMode mode;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return ChangeNotifierProvider(
      create: (_) => GameViewModel(mode: mode)..start(),
      child: Consumer<GameViewModel>(
        builder: (context, vm, _) {
          final round = vm.round;

          return Scaffold(
            appBar: AppBar(
              title: Text(mode.label),
              actions: [
                Padding(
                  padding: const EdgeInsets.only(right: 12),
                  child: Center(
                    child: _TopStat(vm: vm),
                  ),
                ),
              ],
            ),
            body: SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    _ScoreRow(vm: vm),
                    const SizedBox(height: 18),
                    Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: 220,
                            height: 220,
                            decoration: BoxDecoration(
                              color: colorScheme.surfaceContainerHighest,
                              borderRadius: BorderRadius.circular(24),
                              border: Border.all(color: colorScheme.outlineVariant),
                            ),
                            child: round == null
                                ? const Center(child: CircularProgressIndicator())
                                : CustomPaint(
                                    painter: ShapePainter(
                                      spec: round.prompt,
                                      color: colorScheme.primary,
                                    ),
                                  ),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            'Pick the matching shadow',
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                  color: colorScheme.onSurfaceVariant,
                                ),
                          ),
                        ],
                      ),
                    ),
                    if (round != null) ...[
                      Row(
                        children: List.generate(3, (i) {
                          return Expanded(
                            child: Padding(
                              padding: EdgeInsets.only(left: i == 0 ? 0 : 10),
                              child: _OptionButton(
                                index: i,
                                vm: vm,
                              ),
                            ),
                          );
                        }),
                      ),
                    ],
                    const SizedBox(height: 16),
                    if (vm.isGameOver) _GameOverCard(vm: vm, mode: mode),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _TopStat extends StatelessWidget {
  const _TopStat({required this.vm});
  final GameViewModel vm;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    if (vm.mode == GameMode.classic) {
      return Row(
        children: [
          const Icon(Icons.favorite, size: 18),
          const SizedBox(width: 6),
          Text(
            '${vm.lives}',
            style: TextStyle(color: cs.onSurface, fontWeight: FontWeight.w800),
          ),
        ],
      );
    }

    return Row(
      children: [
        const Icon(Icons.timer_outlined, size: 18),
        const SizedBox(width: 6),
        Text(
          '${vm.secondsLeft}s',
          style: TextStyle(color: cs.onSurface, fontWeight: FontWeight.w800),
        ),
      ],
    );
  }
}

class _ScoreRow extends StatelessWidget {
  const _ScoreRow({required this.vm});
  final GameViewModel vm;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    return Row(
      children: [
        Expanded(
          child: Text(
            'Score',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  color: cs.onSurfaceVariant,
                ),
          ),
        ),
        Text(
          vm.score.toString(),
          style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.w900,
              ),
        ),
        const SizedBox(width: 16),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          decoration: BoxDecoration(
            color: cs.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(999),
            border: Border.all(color: cs.outlineVariant),
          ),
          child: Text(
            'Streak ${vm.streak}',
            style: TextStyle(color: cs.onSurfaceVariant, fontWeight: FontWeight.w700),
          ),
        ),
      ],
    );
  }
}

class _OptionButton extends StatelessWidget {
  const _OptionButton({
    required this.index,
    required this.vm,
  });

  final int index;
  final GameViewModel vm;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final round = vm.round!;
    final spec = round.options[index];

    final selected = vm.selectedIndex == index;
    final answered = vm.selectedIndex != null;
    final isCorrect = index == round.correctIndex;

    Color border = cs.outlineVariant;
    Color bg = cs.surfaceContainerHighest;

    if (answered) {
      if (isCorrect) {
        border = cs.primary;
        bg = cs.primaryContainer;
      } else if (selected && !isCorrect) {
        border = cs.error;
        bg = cs.errorContainer;
      }
    }

    final scale = selected ? 0.96 : 1.0;

    return AnimatedScale(
      scale: scale,
      duration: const Duration(milliseconds: 120),
      child: InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: answered ? null : () => vm.select(index),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          height: 110,
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: border, width: 2),
          ),
          child: Center(
            child: SizedBox(
              width: 60,
              height: 60,
              child: CustomPaint(
                painter: ShapePainter(
                  spec: spec,
                  color: cs.onSurface.withValues(alpha: 0.85),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _GameOverCard extends StatelessWidget {
  const _GameOverCard({required this.vm, required this.mode});
  final GameViewModel vm;
  final GameMode mode;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: cs.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: cs.outlineVariant),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Game Over',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.w900,
                ),
          ),
          const SizedBox(height: 6),
          Text(
            'Final score: ${vm.score} • Best streak: ${vm.bestStreak}',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  color: cs.onSurfaceVariant,
                ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: FilledButton(
                  onPressed: () {
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (_) => GameScreen(mode: mode)),
                    );
                  },
                  child: const Text('Play again'),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.tonal(
                  onPressed: () => Navigator.of(context).pop(),
                  child: const Text('Back'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

