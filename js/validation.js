const orderForm = document.querySelector('.ad-form');

const pristine = new Pristine(orderForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
}, false);

//валидация поля "Заголовок объявления"

const validateTitle = (value) =>  value.length >= 30 && value.length <= 100;


pristine.addValidator(
  orderForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

//Валидация поля "цена за ночь"

const validatePrice = (value) =>  value >= 1 && value <= 100000;


pristine.addValidator(
  orderForm.querySelector('#price'),
  validatePrice,
  'Не более 100 000 руб.'
);

//валидация полей "кол-во комнат" и "кол-во мест"

const roomsField = orderForm.querySelector('[name="rooms"]');
const capacityField = orderForm.querySelector('[name="capacity"]');
const roomsOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);

const getRoomsErrorMessage = () => 'Выбор комнаты невозможен';

pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateRooms, getRoomsErrorMessage);

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
