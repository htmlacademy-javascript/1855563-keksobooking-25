import {switchFormState} from './form.js';
import {initValidation} from './validation.js';
import {initMap} from './map.js';
import {createSlider} from './slider.js';
import {getData} from './api.js';

getData(initMap);

switchFormState(true);

createSlider();

initValidation();

