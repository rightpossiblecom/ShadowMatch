enum GameMode {
  classic,
  timeAttack;

  String get label {
    switch (this) {
      case GameMode.classic:
        return 'Classic';
      case GameMode.timeAttack:
        return 'Time Attack';
    }
  }
}

