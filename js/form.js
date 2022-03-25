const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

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

  formElements.forEach((fieldsetItem) => {
    fieldsetItem.disabled = isDisabled;
  });

  filterElements.forEach((selects) => {
    selects.disabled = isDisabled;
  });
};

export {switchFormState};
