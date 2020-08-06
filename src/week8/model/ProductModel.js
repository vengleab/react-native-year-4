import {DefaultModel} from './DefaultModel';

class Product extends DefaultModel {
  constructor() {
    super();
    this.defaultKey = '@PRODUCTS';
  }

  async getByProductName(productName) {
    const records = await this.getAll();
    return records.filter(rec => rec.name === productName);
  }
}

export default new Product();
