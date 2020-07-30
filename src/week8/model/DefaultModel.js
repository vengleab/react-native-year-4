import AsyncStorage from '@react-native-community/async-storage';

export class DefaultModel {
  constructor() {
    this.defaultKey = '@DEFAULT';
  }

  // CRUD
  // CREATE
  async add(data) {
    await AsyncStorage.setItem(this.defaultKey, JSON.stringify(data));
  }

  // Read
  async getByKey(key) {
    const result = await AsyncStorage.getItem(this.defaultKey);
    return result && JSON.parse(result);
  }

  async getAll() {
    const allKeys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(allKeys);
  }

  // Update
  async update(key, data) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  //
  async delete(key) {
    await AsyncStorage.removeItem(key);
  }

  async clear() {
    await AsyncStorage.clear();
  }
}

export default new DefaultModel();
