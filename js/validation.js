const MIN_SYMBOLS = 30;
const MAX_SYMBOLS = 100;
const MAX_PRICE = 100000;

const orderForm = document.querySelector('.ad-form');
const roomsField = orderForm.querySelector('[name="rooms"]');
const capacityField = orderForm.querySelector('[name="capacity"]');

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
}, false);

const validateTitle = (value) =>  value.length >= MIN_SYMBOLS && value.length <= MAX_SYMBOLS;

const validatePrice = (value) =>  value >= 1 && value <= MAX_PRICE;

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const getRoomsErrorMessage = () => 'Выбор комнаты невозможен';

const addValidators = (pristine) => {
  pristine.addValidator(
    orderForm.querySelector('#title'),
    validateTitle,
    'От 30 до 100 символов'
  );


  pristine.addValidator(
    orderForm.querySelector('#price'),
    validatePrice,
    'Не более 100 000 руб.'
  );

  pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
  pristine.addValidator(capacityField, validateRooms, getRoomsErrorMessage);
};

const onFormSubmit = (evt, pristine) => {
  evt.preventDefault();
  pristine.validate();
}

const initValidation = () => {
  const pristine = createPristineInstance();

  addValidators(pristine);
  orderForm.addEventListener('submit', (evt) => onFormSubmit(evt, pristine));
};

export {initValidation}
