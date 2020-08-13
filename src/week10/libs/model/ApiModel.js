import axios from 'axios';

export class ApiModel {
  constructor() {
    this.endpoint = undefined;
  }
  // CRUD
  getById(id) {
    return axios.get(this.endpoint + '/' + id);
  }

  async getAll() {
    const result = await axios.get(this.endpoint);
    return result.data.records;
  }

  create(object) {
    return axios.post(this.endpoint, object);
  }

  delete(id) {
    return axios.delete(this.endpoint + '/' + id);
  }

  // update whole object
  put(id, object) {
    return axios.put(this.endpoint + '/' + id, object);
  }

  // partial object
  patch(id, object) {
    return axios.put(this.endpoint + '/' + id, object);
  }
}
