const MIN_SYMBOLS = 30;
const MAX_SYMBOLS = 100;
const MAX_PRICE = 100000;

const orderForm = document.querySelector('.ad-form');
const roomsField = orderForm.querySelector('[name="rooms"]');
const capacityField = orderForm.querySelector('[name="capacity"]');
const priceField = orderForm.querySelector('#price');
const typeHousing = orderForm.querySelector('#type');
const timeIn = orderForm.querySelector('#timein');
const timeOut = orderForm.querySelector('#timeout');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const roomsOption = {
  1: ['1'],
  2: ['2', '1'],
  3: ['3', '2', '1'],
  100: ['0']
};

const createPristineInstance = () => new Pristine(orderForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const validateTitle = (value) =>  value.length >= MIN_SYMBOLS && value.length <= MAX_SYMBOLS;

const validatePrice = (value) =>  value <= MAX_PRICE;

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const getRoomsErrorMessage = () => 'Выбор комнаты невозможен';

const validatePriceField = () => minPrice[typeHousing.value] <= priceField.value;
const getPriceErrorMessage = () => `Не менее ${minPrice[typeHousing.value]} руб. за ночь`;

const addValidators = (pristine) => {
  pristine.addValidator(
    orderForm.querySelector('#title'),
    validateTitle,
    `От ${MIN_SYMBOLS} до ${MAX_SYMBOLS} символов`
  );


  pristine.addValidator(
    priceField,
    validatePrice,
    `Не более ${MAX_PRICE} руб.`
  );

  pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
  pristine.addValidator(capacityField, validateRooms, getRoomsErrorMessage);
  pristine.addValidator(priceField, validatePriceField, getPriceErrorMessage);
};


const onFormSubmit = (evt, pristine) => {
  evt.preventDefault();
  pristine.validate();
};

const setFormTime = (fromSelect, toSelect) => {
  toSelect.value = fromSelect.value;
};

const initValidation = () => {
  const pristine = createPristineInstance();

  addValidators(pristine);
  pristine.validate(priceField);

  typeHousing.addEventListener('change', () => {
    pristine.validate(priceField);
  });

  timeIn.addEventListener('change', () => {
    setFormTime(timeIn, timeOut);
  });

  timeOut.addEventListener('change', (evt) => {
    evt.preventDefault();
    setFormTime(timeOut, timeIn);
  });

  orderForm.addEventListener('submit', (evt) => onFormSubmit(evt, pristine));
};

export {initValidation};
