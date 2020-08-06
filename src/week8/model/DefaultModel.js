import AsyncStorage from '@react-native-community/async-storage';

export class DefaultModel {
  constructor() {
    this.defaultKey = '@DEFAULT';
  }

  // CRUD
  // CREATE
  async add(data) {
    const records = await this.getAll();
    const newRecords = [...records, data];
    await AsyncStorage.setItem(this.defaultKey, JSON.stringify(newRecords));
  }

  // Read
  async getById(id) {
    const records = await this.getAll();
    return records.filter(record => record === id);
  }

  async getAll() {
    const data = await AsyncStorage.getItem(this.defaultKey);
    console.log('data', data);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  // Update
  async update(id, data) {
    const records = await this.getAll();
    const newRecords = records.map(record =>
      record.id === id ? data : record,
    );
    await AsyncStorage.setItem(this.defaultKey, JSON.stringify(newRecords));
  }

  //
  async delete(key) {
    // await AsyncStorage.removeItem(key);
  }

  async clear() {
    await AsyncStorage.clear();
  }
}

export default new DefaultModel();
