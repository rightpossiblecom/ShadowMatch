import 'package:flutter/foundation.dart';

enum ShapeType {
  circle,
  square,
  triangle,
  diamond,
  star,
  arrow,
}

@immutable
class ShapeSpec {
  const ShapeSpec({
    required this.type,
    required this.rotationTurns,
  });

  final ShapeType type;
  final double rotationTurns; // 0..1 (turns)

  @override
  bool operator ==(Object other) {
    return other is ShapeSpec &&
        other.type == type &&
        (other.rotationTurns - rotationTurns).abs() < 0.0001;
  }

  @override
  int get hashCode => Object.hash(type, (rotationTurns * 1000).round());
}

