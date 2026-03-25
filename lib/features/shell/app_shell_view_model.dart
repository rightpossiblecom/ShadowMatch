import 'package:flutter/material.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';
import 'package:shadowmatch/core/services/storage_service.dart';

class AppShellViewModel extends ChangeNotifier {
  final StorageService _storage = StorageService();

  ThemeMode _themeMode = ThemeMode.system;
  ThemeMode get themeMode => _themeMode;

  Future<void> load() async {
    final raw = _storage.getSetting(AppConstants.keyThemeMode);
    _themeMode = _fromStorageValue(raw) ?? ThemeMode.system;
    notifyListeners();
  }

  Future<void> setThemeMode(ThemeMode mode) async {
    _themeMode = mode;
    notifyListeners();
    await _storage.setSetting(
      AppConstants.keyThemeMode,
      _toStorageValue(mode),
    );
  }

  ThemeMode? _fromStorageValue(String? value) {
    switch (value) {
      case 'system':
        return ThemeMode.system;
      case 'light':
        return ThemeMode.light;
      case 'dark':
        return ThemeMode.dark;
    }
    return null;
  }

  String _toStorageValue(ThemeMode mode) {
    switch (mode) {
      case ThemeMode.system:
        return 'system';
      case ThemeMode.light:
        return 'light';
      case ThemeMode.dark:
        return 'dark';
    }
  }
}

