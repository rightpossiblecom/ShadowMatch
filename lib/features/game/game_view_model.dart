import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';
import 'package:shadowmatch/core/services/storage_service.dart';
import 'package:shadowmatch/features/game/game_mode.dart';
import 'package:shadowmatch/features/game/round_state.dart';
import 'package:shadowmatch/features/game/shape_spec.dart';

class GameViewModel extends ChangeNotifier {
  GameViewModel({required this.mode});

  final GameMode mode;
  final StorageService _storage = StorageService();
  final math.Random _rng = math.Random();

  int _score = 0;
  int get score => _score;

  int _streak = 0;
  int get streak => _streak;

  int _bestStreak = 0;
  int get bestStreak => _bestStreak;

  int _lives = 3;
  int get lives => _lives;

  int _secondsLeft = 60;
  int get secondsLeft => _secondsLeft;

  RoundState? _round;
  RoundState? get round => _round;

  int? _selectedIndex;
  int? get selectedIndex => _selectedIndex;

  bool _isGameOver = false;
  bool get isGameOver => _isGameOver;

  Timer? _timer;

  Future<void> start() async {
    _bestStreak = int.tryParse(_storage.getAppData(AppConstants.keyBestStreak) ?? '') ?? 0;

    if (mode == GameMode.classic) {
      _lives = 3;
    } else {
      _secondsLeft = 60;
      _timer?.cancel();
      _timer = Timer.periodic(const Duration(seconds: 1), (_) {
        if (_isGameOver) return;
        _secondsLeft -= 1;
        if (_secondsLeft <= 0) {
          _secondsLeft = 0;
          _endGame();
        }
        notifyListeners();
      });
    }

    _nextRound();
    notifyListeners();
  }

  void _endGame() {
    _isGameOver = true;
    _timer?.cancel();
    notifyListeners();
    unawaited(_persistRecords());
  }

  Future<void> _persistRecords() async {
    final bestKey = mode == GameMode.classic
        ? AppConstants.keyBestScoreClassic
        : AppConstants.keyBestScoreTimeAttack;
    final prevBest = int.tryParse(_storage.getAppData(bestKey) ?? '') ?? 0;
    if (_score > prevBest) {
      await _storage.setAppData(bestKey, _score.toString());
    }

    final prevBestStreak = int.tryParse(_storage.getAppData(AppConstants.keyBestStreak) ?? '') ?? 0;
    if (_bestStreak > prevBestStreak) {
      await _storage.setAppData(AppConstants.keyBestStreak, _bestStreak.toString());
    }
  }

  void select(int index) {
    if (_isGameOver) return;
    if (_round == null) return;
    if (_selectedIndex != null) return;

    _selectedIndex = index;
    final isCorrect = index == _round!.correctIndex;

    if (isCorrect) {
      HapticFeedback.selectionClick();
      _score += 1;
      _streak += 1;
      if (_streak > _bestStreak) _bestStreak = _streak;
    } else {
      HapticFeedback.mediumImpact();
      _streak = 0;

      if (mode == GameMode.classic) {
        _lives -= 1;
        if (_lives <= 0) {
          _lives = 0;
          notifyListeners();
          _endGame();
          return;
        }
      } else {
        _secondsLeft = math.max(0, _secondsLeft - 2).toInt();
        if (_secondsLeft == 0) {
          notifyListeners();
          _endGame();
          return;
        }
      }
    }

    notifyListeners();

    Future<void>.delayed(const Duration(milliseconds: 420), () {
      if (_isGameOver) return;
      _nextRound();
      notifyListeners();
    });
  }

  void _nextRound() {
    _selectedIndex = null;

    final prompt = _randomPrompt();
    final correct = prompt;
    final wrong1 = _randomWrong(prompt);
    final wrong2 = _randomWrong(prompt, avoid: {wrong1});

    final options = <ShapeSpec>[correct, wrong1, wrong2]..shuffle(_rng);
    final correctIndex = options.indexOf(correct);

    _round = RoundState(
      prompt: prompt,
      options: options,
      correctIndex: correctIndex,
    );
  }

  ShapeSpec _randomPrompt() {
    final types = ShapeType.values;
    final type = types[_rng.nextInt(types.length)];

    final turns = _difficultyRotationTurns(score: _score);
    return ShapeSpec(type: type, rotationTurns: turns);
  }

  double _difficultyRotationTurns({required int score}) {
    if (score < 5) return 0.0;
    if (score < 12) return _pick([0.0, 0.25, 0.5, 0.75]);
    return _pick([0.0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875]);
  }

  ShapeSpec _randomWrong(ShapeSpec prompt, {Set<ShapeSpec>? avoid}) {
    avoid ??= const {};
    for (var tries = 0; tries < 25; tries++) {
      final makeSimilar = _score >= 10 && _rng.nextDouble() < 0.45;
      final type = makeSimilar ? prompt.type : _pick(ShapeType.values.where((t) => t != prompt.type).toList());
      final rotation = makeSimilar
          ? _pick([0.0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875])
          : _pick([0.0, 0.25, 0.5, 0.75]);
      final spec = ShapeSpec(type: type, rotationTurns: rotation);
      if (spec == prompt) continue;
      if (avoid.contains(spec)) continue;
      return spec;
    }
    return ShapeSpec(type: ShapeType.square, rotationTurns: 0.25);
  }

  T _pick<T>(List<T> items) => items[_rng.nextInt(items.length)];

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }
}

