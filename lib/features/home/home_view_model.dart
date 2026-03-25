import 'package:flutter/foundation.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';
import 'package:shadowmatch/core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storage = StorageService();

  int _bestScoreClassic = 0;
  int get bestScoreClassic => _bestScoreClassic;

  int _bestScoreTimeAttack = 0;
  int get bestScoreTimeAttack => _bestScoreTimeAttack;

  int _bestStreak = 0;
  int get bestStreak => _bestStreak;

  Future<void> load() async {
    _bestScoreClassic = int.tryParse(
          _storage.getAppData(AppConstants.keyBestScoreClassic) ?? '',
        ) ??
        0;
    _bestScoreTimeAttack = int.tryParse(
          _storage.getAppData(AppConstants.keyBestScoreTimeAttack) ?? '',
        ) ??
        0;
    _bestStreak = int.tryParse(
          _storage.getAppData(AppConstants.keyBestStreak) ?? '',
        ) ??
        0;
    notifyListeners();
  }
}

