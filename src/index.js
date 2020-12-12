// Classes
import PetAPI from './utils/PetAPI';
const url = require('url');

const petApi = new PetAPI();
const params = new url.URLSearchParams({
  geo_range: 50,
  city_or_zip: 47374,
  species: 'dog',
  output: 'json',
});

petApi.getPets('pet_search', params.toString());
