import axios from 'axios';
import { API_KEY, BASE_API_URL } from './setup';

/*
 * TO DO:
 * Handle errors 404 etc
 */

class PetAPI {
  constructor() {
    this._apiKey = API_KEY;
    this._baseUrl = BASE_API_URL;
  }

  getAllPets(query) {
    const url = `${this._baseUrl}pet_search?key=${this._apiKey}`;
    return Promise.all([axios.get(url, query[0]), axios.get(url, query[1])])
      .then((res) => {
        const dogs = res[0].data.pets;
        const cats = res[1].data.pets;
        const allPets = dogs.concat(cats);
        return allPets;
      })
      .catch((err) => console.log(err));
  }

  getPets(query) {
    const url = `pet_search?key=${this._apiKey}`;
    return axios
      .get(url, query)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  getPetQuery(query) {
    const url = `pet_details?key=${this._apiKey}`;
    return axios
      .get(url, query)
      .then((res) => res)
      .catch((err) => err);
  }

  getPet(url) {
    return axios
      .get(url)
      .then((res) => {
        const petData = res.data.pet;
        return petData;
      })
      .catch((err) => err);
  }
}

export default PetAPI;
