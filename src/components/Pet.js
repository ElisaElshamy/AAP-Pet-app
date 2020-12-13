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
    petDetails.classList.add('pet-details', 'flex', 'flex-col', 'px-6');

    const petImg = document.createElement('img');
    petImg.src = 'https://pet-uploads.adoptapet.com/a/5/1/519636138.jpg';
    petImg.style.cssText = `width: 100%;`;

    const petName = document.createElement('h4');
    petName.innerHTML = this.name;
    petName.classList.add(
      'font-extrabold',
      'text-xl',
      'lg:text-3.5xl',
      'text-turquoise',
      'leading-6',
      'lg:leading-10',
      'mt-4',
      'tracking-tightest'
    );

    const breed = document.createElement('h5');
    breed.innerHTML = this.breed;
    breed.classList.add(
      'font-bold',
      'text-base',
      'lg:text-xl',
      'text-night',
      'leading-5',
      'sm:leading-6',
      'lg:leading-8',
      'mb-4',
      'sm:mb-2.5',
      'lg:mb-5',
      'tracking-tightest'
    );

    const info = document.createElement('span');
    info.innerHTML = `${this.gender}, ${this.age}`;
    info.classList.add(
      'font-light',
      'text-sm',
      'sm:text-base',
      'lg:text-xl',
      'text-night',
      'leading-relaxed',
      'tracking-tightest'
    );

    const location = document.createElement('span');
    location.innerHTML = this.location;
    location.classList.add(
      'font-light',
      'text-sm',
      'sm:text-base',
      'lg:text-xl',
      'text-night',
      'leading-relaxed',
      'tracking-tightest'
    );

    petDetails.append(petName, breed, info, location);
    card.append(petImg, petDetails);

    return card;
  }
}

export default Pet;
