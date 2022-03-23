const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const createCard = (ad) => {
console.log(ad);

  const mapCanvas = document.querySelector('#map-canvas');
  const cardFragment = document.createDocumentFragment();

  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  const popup = cardTemplate.querySelector('.popup');

  cardElement.querySelector('.popup__title').textContent = ad.offer.title;

  cardElement.querySelector('.popup__text--address').textContent = ad.offer.address;

  cardElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;

  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  cardElement.querySelector('.popup__description').textContent = ad.offer.description;

  cardElement.querySelector('.popup__type').textContent = TYPES[ad.offer.type];


  const featureContainer = cardElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const adFeatures = ad.offer.features;

  featureList.forEach((featureListItem) => {
    const isNecessary = adFeatures.some(
      (feature) => featureListItem.classList.contains('popup__feature--' + feature),
    );

    if(!isNecessary) {
      featureListItem.remove();
    }
  });



  const adImg = ad.offer.photos;
  const imgContainer = cardElement.querySelector('.popup__photos');

  imgContainer.innerHTML = '';

  adImg.forEach((img) => {
    const imgListItem = document.createElement('img');

    imgListItem.classList.add('popup__photo');
    imgListItem.width = 45;
    imgListItem.height = 40;
    imgListItem.alt = 'Фотография жилья';
    imgListItem.src = img;

    imgContainer.append(imgListItem)
  });

  cardElement.querySelector('.popup__avatar').src = ad.author.avatar;


  cardFragment.appendChild(cardElement);
  mapCanvas.appendChild(cardFragment);

};


export {createCard};
