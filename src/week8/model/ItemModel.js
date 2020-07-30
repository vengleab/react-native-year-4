import {DefaultModel} from './DefaultModel';

class ItemModel extends DefaultModel {
  constructor() {
    super();
    this.defaultKey = '@ITEMS';
  }

  async add(item) {
    const oldItems = await this.getByKey(this.defaultKey);
    console.log({oldItems});
    if (oldItems) {
      await this.update(this.defaultKey, [...oldItems, item]);
    } else {
      await this.update(this.defaultKey, [item]);
    }
  }

  async getAll() {
    const allItems = await this.getByKey(this.defaultKey);
    console.log({allItems});
    return allItems ? allItems : [];
  }
}

export default new ItemModel();
