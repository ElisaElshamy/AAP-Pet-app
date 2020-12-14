// Styles
import './style.css';

// Classes
import PetAPI from './utils/PetAPI';
import DropdownFilter from './components/DropdownFilter';
import Pet from './components/Pet';

import axios from 'axios';
import { ALL_PETS } from './utils/setup';

// DOM Elements
const main = document.querySelector('#main');
const dropdownFilter = new DropdownFilter(
  ['Act quickly', 'Adopted', 'Special needs'],
  ''
);

// DOM Fragment - Add all elements to this then append to main
// to prevent Document reflow everytime we add a child to main
const docFrag = document.createDocumentFragment();

let cardList;

/*
 * TO DO:
 * Get user's location and then make the API call
 * Make a second call for cats and then combine the two into one object/array
 * Make a new API call for the next 50 when pager is clicked/lazy loading?
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
const petApi = new PetAPI();
const getPetData = async () => {
  console.log('PET DATA IS HERE!');
  return petData;
};

const createCardList = (pets) => {
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

window.addEventListener('resize', calcCardHeight);
document.addEventListener('DOMContentLoaded', async () => {
  const petData = await petApi.getAllPets(params);
  cardList = document.createElement('div');
  cardList.appendChild(dropdownFilter.createDropdownFilter());
  createCardList(petData);
  calcCardHeight();
});
