import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

class ArticleDataService {
  getAll() {
    return axios.get(API_URL + 'articles');
  }

  get(id) {
    return axios.get(API_URL + `/articles/${id}`);
  }

  create(data) {
    return axios.post(API_URL + '/add', data);
  }

  update(id, data) {
    return axios.put(API_URL + `/articles/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL + `/articles/${id}`);
  }

  deleteAll() {
    return axios.delete(API_URL + `/articles`);
  }

  findByTitle(title) {
    return axios.get(API_URL + `/articles?title=${title}`);
  }
}

export default new ArticleDataService();
