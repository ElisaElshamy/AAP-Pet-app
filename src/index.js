// Styles
import './style.css';

// Classes
import PetAPI from './utils/PetAPI';

/*
 * TO DO:
 * Get user's location and then make the API call
 * Make a second call for cats and then combine the two into one object/array
 */

const petApi = new PetAPI();
const params = {
  params: {
    geo_range: 50,
    city_or_zip: 47374,
    species: 'dog',
    output: 'json',
  },
};

petApi.getPets(params);
