import {ApiModel} from './ApiModel';

class CartModel extends ApiModel {
  constructor() {
    super();
    this.endpoint = 'https://vengleab-serverless.now.sh/api/carts';
  }
}

export default new CartModel();
