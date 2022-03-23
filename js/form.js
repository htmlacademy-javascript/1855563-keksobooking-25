const switchFormState = (isDisabled) => {
  const form = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  if (isDisabled) {
    form.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  }

  const fieldsets = form.querySelectorAll('fieldset');

  fieldsets.forEach((fieldsetItem) => {
    fieldsetItem.disabled = isDisabled;
  });

  const mapSelects = mapFilters.querySelectorAll('select');

  mapSelects.forEach((selects) => {
    selects.disabled = isDisabled;
  });

  const mapFeatures = mapFilters.querySelector('.map__filter');
  mapFeatures.disabled = isDisabled;
}



export {switchFormState};
