import {DefaultModel} from './DefaultModel';

class Product extends DefaultModel {
  constructor() {
    super();
    this.prefix = '@PRODUCTS';
    this.defaultKey = this.prefix;
  }

  add(product) {
    this.defaultKey = `${this.prefix}_${product.id}`;
    this.add(product);
  }

  getByKey(id){
    this.defaultKey = `${this.prefix}_${id}`;
    return super.getByKey(id);
  }
}
