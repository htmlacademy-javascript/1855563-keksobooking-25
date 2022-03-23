import { ads } from './data.js';
import {createCard} from './offer.js';
import {switchFormState} from './form.js';

switchFormState(false);
createCard(ads[4]);

