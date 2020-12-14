// Style Imports
import './style.css';

// Class Imports
import PetAPI from './utils/PetAPI';
import DropdownFilter from './components/DropdownFilter';
import Pet from './components/Pet';

// DOM Elements
const main = document.querySelector('#main');

// DOM Fragment - Add all elements to this then append to main
// to prevent Document reflow everytime we add a child to main
const docFrag = document.createDocumentFragment();

// Initial Global Variables
let cardList;
const petApi = new PetAPI();
const dropdownFilter = new DropdownFilter(
  ['Act quickly', 'Adopted', 'Special needs'],
  ''
);

/*
 * TO DO:
 * Get user's location and then make the API call
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
  pets.forEach(async (petObj, i) => {
    const pet = new Pet(petObj.details_url);
    const petData = await petApi.getPet(pet.url);
    pet.setPetInfo(petData);
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

const calcInfoCardHeight = () => {
  const infoCards = document.querySelectorAll('.info-card');

  infoCards.forEach((infoCard, i) => {
    const infoCardWidth = infoCard.offsetWidth;
    if (window.innerWidth > 767) {
      infoCard.style.height = `${infoCardWidth * 1.5}px`;
    } else {
      infoCard.style.height = `${infoCardWidth * 0.45}px`;
    }
  });
};

window.addEventListener('resize', calcCardHeight);
window.addEventListener('resize', calcInfoCardHeight);
document.addEventListener('DOMContentLoaded', async () => {
  const petData = await petApi.getAllPets(params);
  cardList = document.createElement('div');
  cardList.appendChild(dropdownFilter.createDropdownFilter());
  createCardList(petData);

  calcCardHeight();
});
