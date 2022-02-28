const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('ошибка, число меньше 0');
  }

  if (max <= min) {
    throw new Error('ошибка, число "до" меньше или равно числу "от"');
  }

  return Math.round(Math.random() * (max - min) + min);
};

getRandomNumber(8, 12);

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

getRandomFloat(1, 6);
