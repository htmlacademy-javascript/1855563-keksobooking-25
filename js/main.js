const getRandomNumber = (a, b) => {
  if (a<0 || b<0) {
    console.log('ошибка, число меньше 0');
    return 0;
  }
  if (b<=a) {
    console.log('ошибка, число "до" меньше или равно числу "от"');
  }
  return Math.round(Math.random() * (b - a) + a);
}

const getRandomDeciamlNumber = (a, b, c=1) => {
  if (a<0 || b<0) {
    console.log('ошибка, число меньше 0');
    return 0;
  }
  if (b<=a) {
    console.log('ошибка, число "до" меньше или равно числу "от"');
    return 0;
  }
  const num = Math.random() * (b - a) + a;
  return num.toFixed(c);
}
