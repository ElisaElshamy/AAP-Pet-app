class Pet {
  constructor(petObj) {
    this.url = petObj.details_url;

    /* We will get all properties later in a method called getPetInfo() */
    this.name = petObj.pet_name;
    this.breed = petObj.secondary_breed
      ? `${petObj.primary_breed}/${petObj.secondary_breed}`
      : petObj.primary_breed;
    this.gender = petObj.sex === 'f' ? 'Female' : 'Male';
    this.age = petObj.age ? petObj.age : 'Unknown';
    this.location = `${petObj.addr_city}, ${petObj.addr_state_code}`;
  }

  createCard() {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-white', 'shadow-md');

    const petDetails = document.createElement('div');
    petDetails.classList.add('pet-details', 'flex', 'flex-col');

    const petName = document.createElement('h4');
    petName.innerHTML = this.name;

    const breed = document.createElement('h5');
    breed.innerHTML = this.breed;

    const info = document.createElement('span');
    info.innerHTML = `${this.gender}, ${this.age}`;

    const location = document.createElement('span');
    location.innerHTML = this.location;

    petDetails.append(petName, breed, info, location);
    card.appendChild(petDetails);

    return card;
  }
}

export default Pet;
