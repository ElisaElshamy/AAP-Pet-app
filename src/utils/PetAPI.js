import { API_KEY, AXIOS, BASE_API_URL } from './setup';

class PetAPI {
  constructor() {
    this._apiKey = API_KEY;
    this._baseUrl = BASE_API_URL;
  }

  async getPets(url_func, query) {
    const url = `${url_func}?key=${this._apiKey}`;
    try {
      const response = await AXIOS.post(url, query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getPet(url_func, query) {}
}

export default PetAPI;
