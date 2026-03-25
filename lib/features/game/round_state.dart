import 'package:flutter/foundation.dart';
import 'package:shadowmatch/features/game/shape_spec.dart';

@immutable
class RoundState {
  const RoundState({
    required this.prompt,
    required this.options,
    required this.correctIndex,
  });

  final ShapeSpec prompt;
  final List<ShapeSpec> options;
  final int correctIndex;
}

