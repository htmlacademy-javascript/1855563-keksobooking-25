import {resetMarker} from './map.js';

const SIMILAR_ADS_COUNT = 10;

const priceList = {
  'any': {
    'min': 0,
    'max': 100000
  },
  'low': {
    'min': 0,
    'max': 10000
  },
  'middle': {
    'min': 10000,
    'max': 50000
  },
  'high': {
    'min': 50000,
    'max': 100000
  }
};

const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');
const housingFeaturesFieldset = document.querySelector('#housing-features');
const featureCheckbox = housingFeaturesFieldset.querySelectorAll('.map__checkbox');

const filterPrice = (offerPrice, selectPrice) => {
  switch (priceList[selectPrice]) {
    case priceList.high:
      return offerPrice <= priceList.high.max && offerPrice >= priceList.high.min;
    case priceList.middle:
      return offerPrice <= priceList.middle.max && offerPrice >= priceList.middle.min;
    case priceList.low:
      return offerPrice <= priceList.low.max && offerPrice >= priceList.low.min;
    case priceList.any:
      return offerPrice <= priceList.any.max && offerPrice >= priceList.any.min;
  }
};

const getAdsRank = (ad) => {
  const {offer} = ad;
  let rank = 0;

  if (offer.type === housingTypeSelect.value) {
    rank += 1;
  }

  if (filterPrice(offer.price, housingPriceSelect.value)) {
    rank += 1;
  }

  if (offer.rooms === Number(housingRoomsSelect.value)) {
    rank += 1;
  }

  if (offer.guests === Number(housingGuestsSelect.value)) {
    rank += 1;
  }

  featureCheckbox.forEach((item) => {
    if (item.checked) {
      const isInclude = offer.features && offer.features.includes(item.value);
      if (isInclude) {rank += 1;}
    }
  });

  return rank;
};

const compareAds = (adA, adB) => {
  const rankA = getAdsRank(adA);
  const rankB = getAdsRank(adB);

  return rankB - rankA;
};

const reRenderMarkers = (cb) => {
  resetMarker();
  cb();
};

const setHousingType = (cb) => {
  housingTypeSelect.addEventListener('change', () => reRenderMarkers(cb));
};

const setHousingPrice = (cb) => {
  housingPriceSelect.addEventListener('change', () => reRenderMarkers(cb));
};

const setHousingRooms = (cb) => {
  housingRoomsSelect.addEventListener('change', () => reRenderMarkers(cb));
};

const setHousingSelect = (cb) => {
  housingGuestsSelect.addEventListener('change', () => reRenderMarkers(cb));
};

const setHousingFeatures= (cb) => {
  housingFeaturesFieldset.addEventListener('change', () => reRenderMarkers(cb));
};

const sortAds = (ads, cb) => {
  const setChange = () => cb(ads.slice().sort(compareAds).slice(0, SIMILAR_ADS_COUNT));

  setHousingType(() => setChange());
  setHousingPrice(() => setChange());
  setHousingRooms(() => setChange());
  setHousingSelect(() => setChange());
  setHousingFeatures(() => setChange());
  setChange();
};

export {sortAds};
