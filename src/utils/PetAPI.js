import { API_KEY, AXIOS, BASE_API_URL } from './setup';

class PetAPI {
  constructor() {
    this._apiKey = API_KEY;
    this._baseUrl = BASE_API_URL;
  }

  async getPets(query) {
    const url = `pet_search?key=${this._apiKey}`;
    try {
      const response = await AXIOS.get(url, query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async getPet(query) {
    const url = `pet_details?key=${this._apiKey}`;
    try {
      const response = await AXIOS.get(url, query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export default PetAPI;
