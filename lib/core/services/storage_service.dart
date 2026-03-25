import 'package:hive_flutter/hive_flutter.dart';
import 'package:shadowmatch/core/constants/app_constants.dart';

class StorageService {
  Box<String> get _appData => Hive.box<String>(AppConstants.appDataBox);
  Box<String> get _settings => Hive.box<String>(AppConstants.settingsBox);

  String? getSetting(String key) => _settings.get(key);
  Future<void> setSetting(String key, String value) => _settings.put(key, value);

  String? getAppData(String key) => _appData.get(key);
  Future<void> setAppData(String key, String value) => _appData.put(key, value);

  Future<void> clearAll() async {
    await _appData.clear();
    await _settings.clear();
  }
}

