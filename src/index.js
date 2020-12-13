// Styles
import './style.css';

// Classes
import PetAPI from './utils/PetAPI';
import Pet from './components/Pet';

import axios from 'axios';
import { ALL_PETS } from './utils/setup';

// DOM Elements
const main = document.querySelector('#main');

/*
 * TO DO:
 * Get user's location and then make the API call
 * Make a second call for cats and then combine the two into one object/array
 * Make a new API call for the next 50 when pager is clicked/lazy loading?
 */

/*
const petApi = new PetAPI();
const params = [
  {
    params: {
      geo_range: 50,
      city_or_zip: 47374,
      species: 'dog',
      output: 'json',
    },
  },
  {
    params: {
      geo_range: 50,
      city_or_zip: 47374,
      species: 'cat',
      output: 'json',
    },
  },
];

const dogs = petApi.getPets(params);
console.log(dogs);
params.params.species = 'cat';
const cats = petApi.getPets(params);

const pets = dogs.concat(cats);

console.log(pets);


const pets = petApi.getAllPets(params);

console.log(pets);
console.log('Do I wait?');
*/

const params = [
  {
    params: {
      geo_range: 50,
      city_or_zip: 47374,
      species: 'dog',
      output: 'json',
    },
  },
  {
    params: {
      geo_range: 50,
      city_or_zip: 47374,
      species: 'cat',
      output: 'json',
    },
  },
];

/*
const getAllPets = (query) => {
  const url = `${BASE_API_URL}pet_search?key=${API_KEY}`;
  Promise.all([axios.get(url, query[0]), axios.get(url, query[1])])
    .then((res) => {
      const dogs = res[0].data.pets;
      const cats = res[1].data.pets;
      const allPets = dogs.concat(cats);
      return allPets;
    })
    .catch((err) => console.log(err));
};

const pets = (params) => getAllPets(params);
console.log(pets(params));
*/

const createCardList = (pets) => {
  const cardList = document.createElement('div');
  cardList.classList.add(
    'card-list',
    'grid',
    'grid-cols-1',
    'sm:grid-cols-3',
    'max-w-7.5xl',
    'gap-6'
  );
  pets.forEach((petObj, i) => {
    const pet = new Pet(petObj);
    const petCard = pet.createCard();
    cardList.appendChild(petCard);
  });
  main.appendChild(cardList);
};

document.addEventListener('DOMContentLoaded', createCardList(ALL_PETS));
