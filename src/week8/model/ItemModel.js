import {ArrayModel} from './ArrayModel';

class ItemModel extends ArrayModel {
  constructor() {
    super();
    this.defaultKey = '@ITEMS';
  }
}

export default new ItemModel();
