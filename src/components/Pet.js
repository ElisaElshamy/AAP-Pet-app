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
    card.setAttribute('x-data', '{ isOpen: false }');

    const heartButton = document.createElement('button');
    heartButton.classList.add(
      'absolute',
      'top-5',
      'focus:outline-none',
      'right-2.5',
      'lg:right-5',
      'z-8'
    );
    heartButton.innerHTML = `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 21C9.75 16.4996 5 11.9993 5 7.50036C5 5.01537 7.13132 3 9.75 3C12.133 3 13.3172 4.12509 14.5 6.37527C15.6842 4.12509 16.883 3 19.25 3C21.8687 3 24 5.01537 24 7.50036C24 11.9993 19.25 16.4996 14.5 21Z" fill="white" fill-opacity="0.7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 21C9.75 16.4996 5 11.9993 5 7.50036C5 5.01537 7.13132 3 9.75 3C12.133 3 13.3172 4.12509 14.5 6.37527C15.6842 4.12509 16.883 3 19.25 3C21.8687 3 24 5.01537 24 7.50036C24 11.9993 19.25 16.4996 14.5 21Z" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    <defs>
        <filter id="filter0_d" x="0" y="0" width="29" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
    </defs>
</svg>`;

    const infoButton = document.createElement('button');
    infoButton.setAttribute('x-on:click', 'isOpen = true');
    infoButton.classList.add(
      'absolute',
      'top-12',
      'focus:outline-none',
      'right-2.5',
      'lg:right-5',
      'z-8'
    );
    infoButton.innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.702869">
                                <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27" fill="black">
                                  <rect fill="white" width="27" height="27"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5386 9.11454C15.2006 9.42866 14.7945 9.58572 14.3176 9.58572C13.8426 9.58572 13.4327 9.42866 13.0918 9.11454C12.7527 8.80043 12.5813 8.41832 12.5813 7.97204C12.5813 7.52672 12.7537 7.14366 13.0918 6.82667C13.4327 6.50872 13.8426 6.3507 14.3176 6.3507C14.7945 6.3507 15.2015 6.50872 15.5386 6.82667C15.8776 7.14366 16.0462 7.52672 16.0462 7.97204C16.0462 8.41928 15.8776 8.80043 15.5386 9.11454ZM15.6679 19.5311C15.0847 19.7619 14.6212 19.9353 14.2735 20.0569C13.9268 20.1776 13.5237 20.2379 13.0649 20.2379C12.3601 20.2379 11.8113 20.0655 11.4206 19.7217C11.0299 19.3779 10.8355 18.9422 10.8355 18.4116C10.8355 18.2067 10.8498 17.996 10.8786 17.7805C10.9083 17.567 10.9552 17.3256 11.0194 17.0546L11.7481 14.4804C11.8123 14.2333 11.8679 13.9987 11.9119 13.7803C11.956 13.5601 11.977 13.358 11.977 13.1741C11.977 12.8466 11.909 12.6168 11.774 12.4875C11.6371 12.3582 11.3794 12.295 10.9954 12.295C10.8077 12.295 10.6143 12.3227 10.416 12.3812C10.2197 12.4415 10.0492 12.4961 9.90941 12.5497L10.1019 11.7568C10.5788 11.5624 11.0356 11.3957 11.4714 11.2578C11.9071 11.118 12.3189 11.049 12.7068 11.049C13.4068 11.049 13.947 11.2195 14.3272 11.5566C14.7054 11.8947 14.896 12.3342 14.896 12.8744C14.896 12.9864 14.8826 13.1837 14.8567 13.4652C14.8318 13.7478 14.782 14.0054 14.7121 14.2419L13.9862 16.8085C13.9268 17.0144 13.8742 17.25 13.8263 17.5133C13.7794 17.7757 13.7564 17.9768 13.7564 18.1128C13.7564 18.4528 13.832 18.6865 13.9853 18.81C14.1366 18.9326 14.4019 18.9958 14.7773 18.9958C14.9554 18.9958 15.1536 18.9642 15.3768 18.9029C15.5989 18.8416 15.7598 18.787 15.8613 18.7401L15.6679 19.5311ZM13.312 2C7.06513 2 2 7.06513 2 13.312C2 19.5589 7.06513 24.625 13.312 24.625C19.5589 24.625 24.625 19.5589 24.625 13.312C24.625 7.06513 19.5589 2 13.312 2Z"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5386 9.11454C15.2006 9.42866 14.7945 9.58572 14.3176 9.58572C13.8426 9.58572 13.4327 9.42866 13.0918 9.11454C12.7527 8.80043 12.5813 8.41832 12.5813 7.97204C12.5813 7.52672 12.7537 7.14366 13.0918 6.82667C13.4327 6.50872 13.8426 6.3507 14.3176 6.3507C14.7945 6.3507 15.2015 6.50872 15.5386 6.82667C15.8776 7.14366 16.0462 7.52672 16.0462 7.97204C16.0462 8.41928 15.8776 8.80043 15.5386 9.11454ZM15.6679 19.5311C15.0847 19.7619 14.6212 19.9353 14.2735 20.0569C13.9268 20.1776 13.5237 20.2379 13.0649 20.2379C12.3601 20.2379 11.8113 20.0655 11.4206 19.7217C11.0299 19.3779 10.8355 18.9422 10.8355 18.4116C10.8355 18.2067 10.8498 17.996 10.8786 17.7805C10.9083 17.567 10.9552 17.3256 11.0194 17.0546L11.7481 14.4804C11.8123 14.2333 11.8679 13.9987 11.9119 13.7803C11.956 13.5601 11.977 13.358 11.977 13.1741C11.977 12.8466 11.909 12.6168 11.774 12.4875C11.6371 12.3582 11.3794 12.295 10.9954 12.295C10.8077 12.295 10.6143 12.3227 10.416 12.3812C10.2197 12.4415 10.0492 12.4961 9.90941 12.5497L10.1019 11.7568C10.5788 11.5624 11.0356 11.3957 11.4714 11.2578C11.9071 11.118 12.3189 11.049 12.7068 11.049C13.4068 11.049 13.947 11.2195 14.3272 11.5566C14.7054 11.8947 14.896 12.3342 14.896 12.8744C14.896 12.9864 14.8826 13.1837 14.8567 13.4652C14.8318 13.7478 14.782 14.0054 14.7121 14.2419L13.9862 16.8085C13.9268 17.0144 13.8742 17.25 13.8263 17.5133C13.7794 17.7757 13.7564 17.9768 13.7564 18.1128C13.7564 18.4528 13.832 18.6865 13.9853 18.81C14.1366 18.9326 14.4019 18.9958 14.7773 18.9958C14.9554 18.9958 15.1536 18.9642 15.3768 18.9029C15.5989 18.8416 15.7598 18.787 15.8613 18.7401L15.6679 19.5311ZM13.312 2C7.06513 2 2 7.06513 2 13.312C2 19.5589 7.06513 24.625 13.312 24.625C19.5589 24.625 24.625 19.5589 24.625 13.312C24.625 7.06513 19.5589 2 13.312 2Z" fill="white" fill-opacity="0.7"/>
                                <path d="M13.0918 9.11454L11.7324 10.5816L11.7366 10.5854L13.0918 9.11454ZM13.0918 6.82667L11.7277 5.364L11.7237 5.36772L13.0918 6.82667ZM15.5386 6.82667L14.1663 8.28162L14.1726 8.28754L15.5386 6.82667ZM15.6679 19.5311L16.4038 21.3908L17.3651 21.0104L17.6106 20.0062L15.6679 19.5311ZM14.2735 20.0569L14.931 21.9458L14.934 21.9447L14.2735 20.0569ZM10.8786 17.7805L8.89759 17.5051L8.89612 17.5162L10.8786 17.7805ZM11.0194 17.0546L9.09499 16.5098L9.08316 16.5516L9.07315 16.5938L11.0194 17.0546ZM11.7481 14.4804L13.6725 15.0252L13.6785 15.0042L13.6839 14.9831L11.7481 14.4804ZM11.9119 13.7803L13.8724 14.1759L13.8731 14.1726L11.9119 13.7803ZM11.774 12.4875L13.1572 11.0428L13.1469 11.0332L11.774 12.4875ZM10.416 12.3812L9.85069 10.4627L9.83958 10.466L9.82851 10.4694L10.416 12.3812ZM9.90941 12.5497L7.96586 12.0779L7.06664 15.7822L10.6257 14.4171L9.90941 12.5497ZM10.1019 11.7568L9.34696 9.90472L8.39967 10.2909L8.15835 11.285L10.1019 11.7568ZM11.4714 11.2578L12.0748 13.1646L12.0824 13.1622L11.4714 11.2578ZM14.3272 11.5566L15.6599 10.0653L15.654 10.0601L14.3272 11.5566ZM14.8567 13.4652L12.8651 13.2823L12.8645 13.2897L14.8567 13.4652ZM14.7121 14.2419L12.7942 13.6751L12.7908 13.6863L12.7876 13.6976L14.7121 14.2419ZM13.9862 16.8085L15.9079 17.3627L15.9107 17.3528L13.9862 16.8085ZM13.8263 17.5133L11.8585 17.1556L11.8575 17.1613L13.8263 17.5133ZM13.9853 18.81L15.2442 17.256L15.2406 17.253L13.9853 18.81ZM15.3768 18.9029L15.9065 20.8315L15.9086 20.8309L15.3768 18.9029ZM15.8613 18.7401L17.8041 19.2152L18.7902 15.1828L15.0221 16.9247L15.8613 18.7401ZM14.1772 7.6494C14.1785 7.64825 14.1868 7.64075 14.2027 7.63071C14.2188 7.62054 14.2382 7.61049 14.2598 7.60217C14.3067 7.58406 14.3326 7.58572 14.3176 7.58572V11.5857C15.2826 11.5857 16.1797 11.249 16.9 10.5797L14.1772 7.6494ZM14.3176 7.58572C14.3042 7.58572 14.3282 7.58429 14.3715 7.6009C14.3913 7.60851 14.4092 7.61769 14.4239 7.62694C14.4385 7.63607 14.446 7.64282 14.4469 7.64367L11.7366 10.5854C12.4584 11.2504 13.3564 11.5857 14.3176 11.5857V7.58572ZM14.4511 7.64748C14.4578 7.65374 14.499 7.69547 14.5351 7.77632C14.5721 7.85895 14.5813 7.93222 14.5813 7.97204H10.5813C10.5813 9.00056 11.0039 9.90658 11.7324 10.5816L14.4511 7.64748ZM14.5813 7.97204C14.5813 8.01459 14.5715 8.08724 14.5358 8.16701C14.5012 8.24455 14.4628 8.28275 14.4598 8.28561L11.7237 5.36772C11.0069 6.03991 10.5813 6.94138 10.5813 7.97204H14.5813ZM14.4558 8.28932C14.4549 8.29016 14.4471 8.29721 14.432 8.30679C14.4167 8.3165 14.398 8.3262 14.3772 8.33428C14.3318 8.35188 14.3056 8.3507 14.3176 8.3507V4.3507C13.3521 4.3507 12.4504 4.69006 11.7277 5.36401L14.4558 8.28932ZM14.3176 8.3507C14.3314 8.3507 14.3037 8.35217 14.2548 8.33314C14.2322 8.32435 14.2117 8.31368 14.1946 8.30274C14.1777 8.29193 14.1684 8.2836 14.1663 8.28161L16.9109 5.37172C16.1887 4.69055 15.2852 4.3507 14.3176 4.3507V8.3507ZM14.1726 8.28754C14.1662 8.28151 14.1258 8.24014 14.0905 8.16032C14.0546 8.07908 14.0462 8.00831 14.0462 7.97204H18.0462C18.0462 6.95281 17.6331 6.04696 16.9046 5.36579L14.1726 8.28754ZM14.0462 7.97204C14.0462 7.93783 14.0541 7.86601 14.0914 7.782C14.1282 7.69923 14.1708 7.65536 14.1793 7.64748L16.8979 10.5816C17.6328 9.90072 18.0462 8.99319 18.0462 7.97204H14.0462ZM14.932 17.6715C14.3651 17.8958 13.9279 18.059 13.6131 18.1691L14.934 21.9447C15.3144 21.8116 15.8042 21.6281 16.4038 21.3908L14.932 17.6715ZM13.6161 18.1681C13.5262 18.1993 13.3537 18.2379 13.0649 18.2379V22.2379C13.6937 22.2379 14.3275 22.1558 14.931 21.9458L13.6161 18.1681ZM13.0649 18.2379C12.8717 18.2379 12.7664 18.2139 12.7241 18.2006C12.6884 18.1894 12.7066 18.1892 12.7418 18.2202L10.0994 21.2232C10.9672 21.9868 12.047 22.2379 13.0649 22.2379V18.2379ZM12.7418 18.2202C12.7401 18.2187 12.7495 18.2268 12.7639 18.246C12.7786 18.2656 12.7943 18.2912 12.8077 18.3213C12.8371 18.3869 12.8355 18.4274 12.8355 18.4116H8.83548C8.83548 19.5033 9.26704 20.4908 10.0994 21.2232L12.7418 18.2202ZM12.8355 18.4116C12.8355 18.3 12.8433 18.1777 12.861 18.0448L8.89612 17.5162C8.85638 17.8142 8.83548 18.1133 8.83548 18.4116H12.8355ZM12.8595 18.0559C12.8784 17.9204 12.9117 17.7429 12.9656 17.5154L9.07315 16.5938C8.99869 16.9084 8.93816 17.2135 8.89763 17.5051L12.8595 18.0559ZM12.9437 17.5994L13.6725 15.0252L9.82378 13.9356L9.09499 16.5098L12.9437 17.5994ZM13.6839 14.9831C13.7545 14.7113 13.8192 14.4396 13.8724 14.1759L9.95141 13.3848C9.91651 13.5578 9.87009 13.7554 9.81235 13.9777L13.6839 14.9831ZM13.8731 14.1726C13.9388 13.8437 13.977 13.5091 13.977 13.1741H9.97703C9.97703 13.2069 9.97308 13.2764 9.95074 13.3881L13.8731 14.1726ZM13.977 13.1741C13.977 12.6825 13.8957 11.75 13.1571 11.0428L10.3909 13.9321C10.1457 13.6974 10.0461 13.4515 10.0083 13.3236C9.97182 13.2004 9.97703 13.137 9.97703 13.1741H13.977ZM13.1469 11.0332C12.4038 10.3316 11.4328 10.295 10.9954 10.295V14.295C11.0914 14.295 11.0783 14.3043 10.9982 14.2845C10.9246 14.2663 10.6666 14.1924 10.4011 13.9418L13.1469 11.0332ZM10.9954 10.295C10.608 10.295 10.2244 10.3526 9.85069 10.4627L10.9814 14.2996C10.9935 14.296 11.0001 14.295 11.0014 14.2948C11.0027 14.2946 11.0005 14.295 10.9954 14.295V10.295ZM9.82851 10.4694C9.6313 10.53 9.40288 10.6019 9.19317 10.6824L10.6257 14.4171C10.6956 14.3902 10.8081 14.353 11.0035 14.2929L9.82851 10.4694ZM11.853 13.0215L12.0455 12.2286L8.15835 11.285L7.96586 12.0779L11.853 13.0215ZM10.8569 13.6088C11.2909 13.4319 11.6969 13.2842 12.0748 13.1646L10.8679 9.35103C10.3743 9.50724 9.86672 9.69285 9.34696 9.90472L10.8569 13.6088ZM12.0824 13.1622C12.3521 13.0756 12.5569 13.049 12.7068 13.049V9.04904C12.0809 9.04904 11.4621 9.16034 10.8603 9.35345L12.0824 13.1622ZM12.7068 13.049C12.8986 13.049 13.0004 13.0728 13.0381 13.0846C13.0689 13.0943 13.0433 13.0912 13.0003 13.0531L15.654 10.0601C14.7926 9.29637 13.7159 9.04904 12.7068 9.04904V13.049ZM12.9944 13.0479C12.9901 13.044 12.9772 13.0316 12.9612 13.0096C12.9449 12.9874 12.9297 12.9612 12.9175 12.9331C12.8915 12.8728 12.896 12.8431 12.896 12.8744H16.896C16.896 11.8028 16.4903 10.8074 15.6599 10.0653L12.9944 13.0479ZM12.896 12.8744C12.896 12.864 12.8961 12.8896 12.8905 12.9729C12.8854 13.049 12.8772 13.151 12.8651 13.2823L16.8484 13.6482C16.8735 13.3742 16.896 13.0906 16.896 12.8744H12.896ZM12.8645 13.2897C12.8508 13.4446 12.825 13.5708 12.7942 13.6751L16.6301 14.8088C16.7391 14.4399 16.8129 14.051 16.849 13.6408L12.8645 13.2897ZM12.7876 13.6976L12.0617 16.2642L15.9107 17.3528L16.6366 14.7862L12.7876 13.6976ZM12.0645 16.2543C11.9811 16.5437 11.9144 16.8486 11.8586 17.1556L15.794 17.8711C15.834 17.6513 15.8726 17.4851 15.9079 17.3626L12.0645 16.2543ZM11.8575 17.1613C11.8045 17.4578 11.7564 17.7975 11.7564 18.1128H15.7564C15.7564 18.148 15.7541 18.1458 15.7604 18.091C15.7662 18.0412 15.7769 17.9671 15.7951 17.8654L11.8575 17.1613ZM11.7564 18.1128C11.7564 18.6226 11.8482 19.6561 12.7299 20.367L15.2406 17.253C15.533 17.4888 15.6624 17.7624 15.7142 17.9207C15.7622 18.0673 15.7564 18.1489 15.7564 18.1128H11.7564ZM12.7263 20.364C13.4363 20.9392 14.2992 20.9958 14.7773 20.9958V16.9958C14.6919 16.9958 14.6943 16.9877 14.7557 17.0021C14.8097 17.0149 15.0135 17.0691 15.2442 17.256L12.7263 20.364ZM14.7773 20.9958C15.186 20.9958 15.5688 20.9242 15.9065 20.8315L14.847 16.9743C14.7957 16.9884 14.7649 16.9942 14.7517 16.9963C14.7387 16.9983 14.7486 16.9958 14.7773 16.9958V20.9958ZM15.9086 20.8309C16.1577 20.7622 16.4463 20.673 16.7005 20.5555L15.0221 16.9247C15.0439 16.9146 15.0556 16.9102 15.0538 16.9109C15.0526 16.9114 15.0438 16.9147 15.0259 16.9207C14.9892 16.9331 14.9304 16.9513 14.8449 16.9749L15.9086 20.8309ZM13.9186 18.265L13.7251 19.056L17.6106 20.0062L17.8041 19.2152L13.9186 18.265ZM13.312 0C5.96056 0 0 5.96056 0 13.312H4C4 8.1697 8.1697 4 13.312 4V0ZM0 13.312C0 20.6633 5.96034 26.625 13.312 26.625V22.625C8.16992 22.625 4 18.4546 4 13.312H0ZM13.312 26.625C20.6635 26.625 26.625 20.6635 26.625 13.312H22.625C22.625 18.4543 18.4543 22.625 13.312 22.625V26.625ZM26.625 13.312C26.625 5.96034 20.6633 0 13.312 0V4C18.4546 4 22.625 8.16992 22.625 13.312H26.625Z" fill="#4D4D4D" mask="url(#path-1-outside-1)"/>
                              </g>
                            </svg>`;

    const petDetails = document.createElement('div');
    petDetails.classList.add('pet-details', 'flex', 'flex-col', 'px-6');

    const petImg = document.createElement('img');
    petImg.src = `${this.card_img}`;
    petImg.style.cssText = `width: 100%; height: 60%;`;

    const petName = document.createElement('h4');
    petName.innerHTML = this.name;
    petName.classList.add('pet-name');

    const breed = document.createElement('h5');
    breed.innerHTML = this.breed;
    breed.classList.add('breed');

    const info = document.createElement('span');
    info.innerHTML = `${this.gender}, ${this.age}`;
    info.classList.add('gender-age');

    const location = document.createElement('span');
    location.innerHTML = this.location;
    location.classList.add('location');

    const petInfoCard = this.createInfoCard();
    petDetails.append(petName, breed, info, location);
    card.append(petImg, heartButton, infoButton, petDetails, petInfoCard);

    return card;
  }

  createInfoCard() {
    const infoCard = document.createElement('div');
    infoCard.classList.add('info-card');
    infoCard.setAttribute('x-show', 'isOpen');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('x-on:click', 'isOpen = false');
    closeButton.classList.add(
      'absolute',
      'top-5',
      'focus:outline-none',
      'right-2.5',
      'lg:right-5',
      'z-12'
    );
    closeButton.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.2L19.8 0L11 8.8L2.2 0L0 2.2L8.8 11L0 19.8L2.2 22L11 13.2L19.8 22L22 19.8L13.2 11L22 2.2Z" fill="white"/>
</svg>`;

    const infoWrap = document.createElement('div');
    infoWrap.classList.add('info-wrap');

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
    infoCard.append(closeButton, infoWrap, learnMore);

    return infoCard;
  }
}

export default Pet;
