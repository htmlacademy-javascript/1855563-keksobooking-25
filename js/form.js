import {resetSlider} from './slider.js';
import {resetMap} from './map.js';

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const addressField = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const switchFormState = (isDisabled) => {
  const formElements = form.querySelectorAll('fieldset');
  const filterElements = mapFilters.querySelectorAll('select, fieldset');

  if (isDisabled) {
    form.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  }

  formElements.forEach((item) => {
    item.disabled = isDisabled;
  });

  filterElements.forEach((selects) => {
    selects.disabled = isDisabled;
  });
};

const getCoordinates = (coordinates) => {
  addressField.value = `${Number(coordinates.lat.toFixed(5))}, ${Number(coordinates.lng.toFixed(5))}`;
};

const clearForm = () => {
  form.reset();
}

const resetPage = () => {
  clearForm();
  resetSlider();
  resetMap();
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});

export {switchFormState, getCoordinates, resetPage};
