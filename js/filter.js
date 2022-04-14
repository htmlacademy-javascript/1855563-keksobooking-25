import {resetMarkers} from './map.js';
import {debounce} from './util.js';

const SIMILAR_ADS_COUNT = 10;
const DEFAULT_VALUE = 'any';

const priceList = {
  'any': 0,
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

const formFilters = document.querySelector('.map__filters');
const housingTypeSelect = formFilters.querySelector('#housing-type');
const housingPriceSelect = formFilters.querySelector('#housing-price');
const housingRoomsSelect = formFilters.querySelector('#housing-rooms');
const housingGuestsSelect = formFilters.querySelector('#housing-guests');
const housingFeaturesFieldset = formFilters.querySelector('#housing-features');
const featureCheckbox = housingFeaturesFieldset.querySelectorAll('.map__checkbox');

const filterByPrice = (ad) => {
  const offerPrice = Number(ad.offer.price);
  const selectPrice = housingPriceSelect.value;
  switch (priceList[selectPrice]) {
    case priceList.high:
      return offerPrice <= priceList.high.max && offerPrice >= priceList.high.min;
    case priceList.middle:
      return offerPrice <= priceList.middle.max && offerPrice >= priceList.middle.min;
    case priceList.low:
      return offerPrice <= priceList.low.max && offerPrice >= priceList.low.min;
    case priceList.any:
      return true;
  }
};

const filterByType = (ad) => ad.offer.type === housingTypeSelect.value || housingTypeSelect.value === DEFAULT_VALUE;
const filterByRooms = (ad) => ad.offer.rooms === Number(housingRoomsSelect.value) || housingRoomsSelect.value === DEFAULT_VALUE;
const filterByGuests = (ad) => ad.offer.guests === Number(housingGuestsSelect.value) || housingGuestsSelect.value === DEFAULT_VALUE;


const getbyFeature = (ad) => {
  const {offer} = ad;

  let featuresCheckedCount = 0;
  let offerFeaturesCheckedCount = 0;
  featureCheckbox.forEach((item) => {
    if (item.checked) {
      featuresCheckedCount += 1;
      const isInclude = offer.features && offer.features.includes(item.value);
      if (isInclude) {offerFeaturesCheckedCount += 1;}
    }
  });

  if (featuresCheckedCount === offerFeaturesCheckedCount) {
    return true;
  }
};

const onFilterFormChange = (ads, rerenderMarkers, isAfterReset = false) => {
  resetMarkers();
  const filteredAds = isAfterReset ? ads : ads.filter((ad) => filterByType(ad) && filterByRooms(ad) && filterByGuests(ad) && filterByPrice(ad) && getbyFeature(ad));
  rerenderMarkers(filteredAds.slice(0, SIMILAR_ADS_COUNT));
};

const setFilterListener = (ads, cb) => {
  formFilters.addEventListener('change', debounce( () => onFilterFormChange(ads, cb)));
  formFilters.addEventListener('reset', debounce( () => onFilterFormChange(ads, cb, true)));
};

export {setFilterListener};
