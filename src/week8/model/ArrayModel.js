import {DefaultModel} from './DefaultModel';
import AsyncStorage from '@react-native-community/async-storage';

export class ArrayModel extends DefaultModel {
  constructor() {
    super();
    this.defaultKey = 'ArrayModel';
  }

  getById() {
    // throw new Error('There is no this function');
  }

  async update(oldItem, newItem) {
    const records = await this.getAll();
    const newRecords = records.map(record =>
      record === oldItem ? newItem : record,
    );
    await AsyncStorage.setItem(this.defaultKey, JSON.stringify(newRecords));
  }
}
