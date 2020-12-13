// Styles
import './style.css';

// Classes
import PetAPI from './utils/PetAPI';
import Pet from './components/Pet';

import axios from 'axios';
import { ALL_PETS } from './utils/setup';

// DOM Elements
const main = document.querySelector('#main');
const cardList = document.querySelector('.card-list');

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
    'md:grid-cols-3colsmd',
    'lg:grid-cols-3colslg',
    'gap-6',
    'justify-center'
  );
  pets.forEach((petObj, i) => {
    const pet = new Pet(petObj);
    const petCard = pet.createCard();
    cardList.appendChild(petCard);
  });
  main.appendChild(cardList);
};

const calcCardHeight = () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, i) => {
    const cardWidth = card.offsetWidth;
    if (window.innerWidth > 767) {
      card.style.height = `${cardWidth * 1.5}px`;
    } else {
      card.style.height = `${cardWidth * 0.45}px`;
    }
  });
};

document.addEventListener('DOMContentLoaded', createCardList(ALL_PETS));
window.addEventListener('resize', calcCardHeight);
