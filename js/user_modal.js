const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const onSuccessMessageEscKeydown = (evt, messageSuccessElement) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessage(messageSuccessElement);
  }
};

const closeSuccessMessage = (messageSuccessElement) => {
  messageSuccessElement.classList.add('hidden');
  document.removeEventListener('keydown', (evt) => onSuccessMessageEscKeydown(evt, messageSuccessElement));
};

const onErrorMessageEscKeydown = (evt, messageErrorElement) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage(messageErrorElement);
  }
};

const closeErrorMessage = (messageErrorElement) => {
  messageErrorElement.classList.add('hidden');
  document.removeEventListener('keydown', (evt) => onErrorMessageEscKeydown(evt, messageErrorElement));
};

const showSuccessMessage = () => {
  const messageSuccessExist = document.querySelector('.success.hidden');
  if (messageSuccessExist) {
    messageSuccessExist.classList.remove('hidden');
  } else {
    const messageSuccessElement = messageSuccessTemplate.cloneNode(true);
    body.appendChild(messageSuccessElement);

    document.addEventListener('keydown', (evt) => onSuccessMessageEscKeydown(evt, messageSuccessElement));
    document.addEventListener('click', () => closeSuccessMessage(messageSuccessElement));
  }
};

const showErrorMessage = () => {
  const messageErrorExist = document.querySelector('.error.hidden');
  if (messageErrorExist) {
    messageErrorExist.classList.remove('hidden');
  } else {
    const messageErrorElement = messageErrorTemplate.cloneNode(true);
    body.appendChild(messageErrorElement);

    const errorButton = document.querySelector('.error__button');

    document.addEventListener('keydown', (evt) => onErrorMessageEscKeydown(evt, messageErrorElement));
    document.addEventListener('click', () => closeErrorMessage(messageErrorElement));
    errorButton.addEventListener('click', () => closeErrorMessage(messageErrorElement));
  }
};


export {showSuccessMessage, showErrorMessage};
