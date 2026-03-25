import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shadowmatch/features/game/shape_spec.dart';

class ShapePainter extends CustomPainter {
  ShapePainter({
    required this.spec,
    required this.color,
  });

  final ShapeSpec spec;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.fill;

    final rect = Offset.zero & size;
    final path = _pathFor(spec.type, rect.deflate(size.shortestSide * 0.12));

    canvas.save();
    canvas.translate(rect.center.dx, rect.center.dy);
    canvas.rotate(spec.rotationTurns * 2 * math.pi);
    canvas.translate(-rect.center.dx, -rect.center.dy);
    canvas.drawPath(path, paint);
    canvas.restore();
  }

  Path _pathFor(ShapeType type, Rect rect) {
    switch (type) {
      case ShapeType.circle:
        return Path()..addOval(rect);
      case ShapeType.square:
        return Path()..addRRect(RRect.fromRectAndRadius(rect, const Radius.circular(18)));
      case ShapeType.triangle:
        return _polygon(rect, 3);
      case ShapeType.diamond:
        return Path()
          ..moveTo(rect.center.dx, rect.top)
          ..lineTo(rect.right, rect.center.dy)
          ..lineTo(rect.center.dx, rect.bottom)
          ..lineTo(rect.left, rect.center.dy)
          ..close();
      case ShapeType.star:
        return _star(rect, points: 5, innerRatio: 0.46);
      case ShapeType.arrow:
        return _arrow(rect);
    }
  }

  Path _polygon(Rect rect, int sides) {
    final path = Path();
    final r = rect.shortestSide / 2;
    final c = rect.center;

    for (var i = 0; i < sides; i++) {
      final a = (-math.pi / 2) + (i * 2 * math.pi / sides);
      final p = Offset(c.dx + r * math.cos(a), c.dy + r * math.sin(a));
      if (i == 0) {
        path.moveTo(p.dx, p.dy);
      } else {
        path.lineTo(p.dx, p.dy);
      }
    }
    path.close();
    return path;
  }

  Path _star(Rect rect, {required int points, required double innerRatio}) {
    final path = Path();
    final c = rect.center;
    final outerR = rect.shortestSide / 2;
    final innerR = outerR * innerRatio;

    final total = points * 2;
    for (var i = 0; i < total; i++) {
      final isOuter = i.isEven;
      final r = isOuter ? outerR : innerR;
      final a = (-math.pi / 2) + (i * math.pi / points);
      final p = Offset(c.dx + r * math.cos(a), c.dy + r * math.sin(a));
      if (i == 0) {
        path.moveTo(p.dx, p.dy);
      } else {
        path.lineTo(p.dx, p.dy);
      }
    }
    path.close();
    return path;
  }

  Path _arrow(Rect rect) {
    final w = rect.width;
    final h = rect.height;

    final shaftW = w * 0.30;
    final headW = w * 0.70;
    final headH = h * 0.45;

    final cx = rect.center.dx;
    final cy = rect.center.dy;

    return Path()
      ..moveTo(cx - shaftW / 2, rect.top)
      ..lineTo(cx + shaftW / 2, rect.top)
      ..lineTo(cx + shaftW / 2, cy - headH / 2)
      ..lineTo(cx + headW / 2, cy - headH / 2)
      ..lineTo(cx, cy + headH / 2)
      ..lineTo(cx - headW / 2, cy - headH / 2)
      ..lineTo(cx - shaftW / 2, cy - headH / 2)
      ..close();
  }

  @override
  bool shouldRepaint(covariant ShapePainter oldDelegate) {
    return oldDelegate.spec != spec || oldDelegate.color != color;
  }
}

