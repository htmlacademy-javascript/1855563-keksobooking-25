import {switchFormState} from './form.js';
import {initValidation} from './validation.js';
import {initMap} from './map.js';
import {createSlider} from './slider.js';



switchFormState(true);

initMap();

createSlider();

initValidation();

