import {switchFormState, switchFilterState} from './form.js';
import {initValidation} from './validation.js';
import {initMap, renderAddMarkers} from './map.js';
import {createSlider} from './slider.js';
import {getData} from './api.js';
import {initLoadPhoto} from './photos.js';
import {showAlert} from './user-modal.js';
import {setFilterListener} from './filter.js';

const onLoadSuccess = (ads) => {
  renderAddMarkers(ads.slice(0, 10));
  setFilterListener(ads, renderAddMarkers);
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

