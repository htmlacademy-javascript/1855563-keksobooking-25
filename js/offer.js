import {getNoun} from './util.js';

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const allPhotos = (block, photos) => {
  photos.forEach((img) => {
    const imgListItem = document.createElement('img');

    imgListItem.classList.add('popup__photo');
    imgListItem.width = 45;
    imgListItem.height = 40;
    imgListItem.alt = 'Фотография жилья';
    imgListItem.src = img;

    block.append(imgListItem);
  });
};

const allFeatures = (block, features) => {
  features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature');
    featureListItem.classList.add(`popup__feature--${feature}`);

    block.append(featureListItem);
  });
};


const createCard = (ad) => {
  const roomsDec = getNoun(ad.offer.rooms, 'комната', 'комнаты', 'комнат');
  const guestDec = getNoun(ad.offer.guests, 'гостя', 'гостей', 'гостей');

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = ad.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} ${roomsDec} для ${ad.offer.guests} ${guestDec}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = ad.offer.description;
  cardElement.querySelector('.popup__type').textContent = TYPES[ad.offer.type];
  cardElement.querySelector('.popup__avatar').src = ad.author.avatar;

  const imgContainer = cardElement.querySelector('.popup__photos');
  const featureContainer = cardElement.querySelector('.popup__features');

  if (ad.offer.features.length > 0) {
    featureContainer.innerHTML = '';
    allFeatures(featureContainer, ad.offer.features);
  } else {
    featureContainer.remove();
  }

  if (ad.offer.photos.length > 0) {
    imgContainer.innerHTML = '';
    allPhotos(imgContainer, ad.offer.photos);
  } else {
    imgContainer.remove();
  }

  return cardElement;

};


export {createCard};
