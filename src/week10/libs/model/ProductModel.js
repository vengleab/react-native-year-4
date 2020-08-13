import {ApiModel} from './ApiModel';

class ProductModel extends ApiModel {
  constructor() {
    super();
    this.endpoint = 'https://vengleab-serverless.now.sh/api/products';
  }
}

export default new ProductModel();
