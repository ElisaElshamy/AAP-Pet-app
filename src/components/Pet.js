class Pet {
  constructor(petUrl) {
    // May be used later for pet's profile page
    this.url = petUrl;

    // Initialize all of the pet's details to null
    // since we will have no choice but to make another
    // API call to each pet's detail_url to get some of
    // the missing info from the pet_search API
    this.name = null;
    this.gender = null;
    this.age = null;
    this.breed = null;
    this.location = null;

    this.card_img = null;
    this.thumbnail = null;

    this.act_quickly = null;
    this.adopted = null;
    this.special_needs = null;

    this.color = null;
    this.size = null;
    this.details = null;
    this.story = null;
  }

  setPetInfo(petData) {
    this.name = petData.pet_name;

    this.gender = petData.sex ? petData.sex : 'Unknown';

    this.age = petData.age ? petData.age : 'Unknown';

    this.breed = petData.secondary_breed
      ? `${petData.primary_breed}/${petData.secondary_breed}`
      : petData.primary_breed;

    this.location = `${petData.addr_city || 'N/A'}, ${
      petData.addr_state_code || 'N/A'
    }`;

    this.card_img = petData.images[0].original_url
      ? petData.images[0].original_url
      : '';

    this.thumbnail = petData.images[0].thumbnail_url
      ? petData.images[0].thumbnail_url
      : '';

    this.act_quickly = petData.act_quickly;
    this.adopted = Math.random() < 0.5; // Generates random Boolean
    this.special_needs = petData.special_needs;

    this.color = petData.color ? petData.color : '';
    this.size = petData.size ? petData.size : '';
    this.story = petData.description ? petData.description : '';
    this.details = {
      housetrained: petData.housetrained,
      good_with_kids: petData.good_with_kids,
      good_with_cats: petData.good_with_cats,
      good_with_dogs: petData.good_with_dogs,
    };
  }

  createCard() {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-white', 'relative', 'shadow-md');

    const petDetails = document.createElement('div');
    petDetails.classList.add('pet-details', 'flex', 'flex-col', 'px-6');

    const petImg = document.createElement('img');
    petImg.src = `${this.card_img}`;
    petImg.style.cssText = `width: 100%; height: 60%;`;

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
      'md:leading-6',
      'lg:leading-8',
      'mb-4',
      'md:mb-2.5',
      'lg:mb-5',
      'tracking-tightest'
    );

    const info = document.createElement('span');
    info.innerHTML = `${this.gender}, ${this.age}`;
    info.classList.add(
      'font-light',
      'text-sm',
      'md:text-base',
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
      'md:text-base',
      'lg:text-xl',
      'text-night',
      'leading-relaxed',
      'tracking-tightest'
    );

    const petInfoCard = this.createInfoCard();
    petDetails.append(petName, breed, info, location);
    card.append(petImg, petDetails, petInfoCard);

    return card;
  }

  createInfoCard() {
    const infoCard = document.createElement('div');
    infoCard.classList.add(
      'info-card',
      'absolute',
      'bg-turquoise-secondary-1',
      'text-white',
      'top-0',
      'left-0',
      'h-full',
      'w-full',
      'z-10'
    );

    const infoWrap = document.createElement('div');
    infoWrap.classList.add(
      'info-wrap',
      'grid',
      'md:gap-5',
      'bg-turquoise-secondary-1',
      'text-white',
      'md:border-solid',
      'md:border',
      'md:border-white',
      'md:grid-cols-3'
    );

    const colorLabel = document.createElement('span');
    colorLabel.innerText = 'Color';
    colorLabel.classList.add('info-label');

    const color = document.createElement('p');
    color.innerText = `${this.color || 'NA'}`;
    color.classList.add('info-value');

    const sizeLabel = document.createElement('span');
    sizeLabel.innerText = 'Size';
    sizeLabel.classList.add('info-label');

    const size = document.createElement('p');
    size.innerText = `${this.size || 'NA'}`;
    size.classList.add('info-value');

    const detailsLabel = document.createElement('span');
    detailsLabel.innerText = 'Details';
    detailsLabel.classList.add('info-label');

    const details = document.createElement('p');
    details.classList.add('info-value');

    // These values are flawed because there are
    // NULL cases which should be treated as 'N/A'
    // and not falsy
    details.innerHTML = this.details.housetrained
      ? 'House-trained<br>'
      : 'Not house-trained';
    details.innerHTML = this.details.good_with_kids
      ? 'Good with kids<br>'
      : 'Not good with kids';
    details.innerHTML = this.details.good_with_cats
      ? 'Good with cats<br>'
      : 'Not good with cats';
    details.innerHTML = this.details.good_with_dogs
      ? 'Good with dogs<br>'
      : 'Not good with dogs';

    const storyLabel = document.createElement('span');
    storyLabel.innerText = 'Story';
    storyLabel.classList.add('info-label');

    const story = document.createElement('p');
    story.innerHTML = `${this.story || 'NA'}`;
    story.classList.add('info-value');

    infoWrap.append(
      colorLabel,
      color,
      sizeLabel,
      size,
      detailsLabel,
      details,
      storyLabel,
      story
    );

    const learnMore = document.createElement('a');
    learnMore.href = '#'; // Would link to pet profile page
    learnMore.innerText = 'Learn more >';
    infoCard.append(infoWrap, learnMore);

    return infoCard;
  }
}

export default Pet;
