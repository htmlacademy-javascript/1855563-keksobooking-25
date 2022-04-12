import {switchFormState, switchFilterState} from './form.js';
import {initValidation} from './validation.js';
import {initMap, renderAddMarkers} from './map.js';
import {createSlider} from './slider.js';
import {getData} from './api.js';
import {initLoadPhoto} from './photos.js';
import {showAlert} from './user-modal.js';
import {sortAds} from './sort.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

const onLoadSuccess = (ads) => {
  sortAds(ads, debounce(renderAddMarkers, RERENDER_DELAY));
  switchFilterState(false);
  initLoadPhoto();
};

const onLoadError = () => {
  showAlert('Возникла ошибка при загрузке объявлений!');
};

switchFormState(true);
switchFilterState(true);

initMap(() => getData(onLoadSuccess, onLoadError));

createSlider();

initValidation();

