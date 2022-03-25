const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('ошибка, число меньше 0');
  }

  if (max <= min) {
    throw new Error('ошибка, число "до" меньше или равно числу "от"');
  }

  return Math.round(Math.random() * (max - min) + min);
};

const getRandomFloat = (min, max, c = 1) => {
  if (min < 0 || max < 0) {
    throw new Error('ошибка, число меньше 0');
  }

  if (max <= min) {
    throw new Error('ошибка, число "до" меньше или равно числу "от"');
  }

  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(c));
};

const getNoun = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};


export {getRandomNumber, getRandomFloat, getNoun};
