import { ads } from './data.js';
import {createCard} from './offer.js';
import {switchFormState} from './form.js';
import './validation.js';

const mapCanvas = document.querySelector('#map-canvas');

const card = createCard(ads[4]);

switchFormState(false);
mapCanvas.appendChild(card);

