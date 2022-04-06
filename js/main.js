import { ads } from './data.js';
import {createCard} from './offer.js';
import {switchFormState, getCoordinates} from './form.js';
import {initValidation} from './validation.js';
import {initPinMarker, initMap, createAddMarkers} from './map.js';
import {createSlider} from './slider.js';

const INIT_MAP_COORDINATES = {
  lat: 35.681729,
  lng: 139.753927,
};

switchFormState(true);
initMap(switchFormState, INIT_MAP_COORDINATES);

initPinMarker(getCoordinates, INIT_MAP_COORDINATES);

createAddMarkers(ads, createCard);

createSlider();

initValidation();

