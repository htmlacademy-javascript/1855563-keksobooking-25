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


const TITLES = [
  'Дизайн-отель в центре Парижа',
  'Уютный гостевой дом в Барселоне',
  'Апартаменты с видом на Колизей',
  'Отель в центре Праги',
  'Соврменный отель на окраине Токио',
  'Роскошное бунгало на пляже Бора-Бора',
  'Люкс-апартаменты в центре Воронежа',
  'Этно-деревня в Варнице',
  'Бутик-отель у ж/д вокзала Дрездена',
  'Отель с видом на Аллею славы в Лос-Анджелесе'
];
const TYPE_LIST = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const CHECKIN_LIST = [
  '12:00',
  '13:00',
  '14:00'
];
const CHECKOUT_LIST = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const DESCRIPTIONS = [
  'Этот отель находится неподалеку от художественного музея и университета.',
  'Этот бутик-отель расположен в таунхаусе, всего в 7 минутах ходьбы от центра',
  'Отель с рестораном, баром, открытым бассейном и собственной бесплатной парковкой расположен менее чем в 1 км от пляжа.',
  'Дом для отпуска с балконом и бесплатным Wi-Fi расположен в деревне. Из окон открывается вид на сад.',
  'Отель типа "постель и завтрак" находится на территории большого имения, в 250 метрах от известного пляжа.',
  'Жилье для осознанных путешествий. Апартаменты расположены в 100 метрах от пляжа. В числе удобств бесплатный Wi-Fi и принадлежности для барбекю.',
  'Роскошный курортный отель с уникальными бунгало над водой расположен рядом с пляжем на мысе. Пляж отеля с белым песком предназначен исключительно для гостей.',
  'Этот 5-звездочный курорт и спа-центр отличается эксклюзивным частным пляжем и индивидуальными виллами, которые расположены над водой.',
  'Этот 4-звездочный улучшенный бутик-отель, построенный в 1888 году, расположен в районе вилл. К услугам гостей элегантные номера, тренажерный зал и сауна.',
  'Расположенный в поймах рек отель может похвастаться легким доступом к центру города. Персонал отеля сделает все, чтобы Ваш отдых оказался удачным.',
];

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 10;

const getAdvertisements = (num) => {
  let advertisements = [];
  for (let i = 1; i <= num; i++) {
    const location = {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5)
    };
    let userNumber = getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);
    if (userNumber < 10) {
      userNumber = '0'+ userNumber;
    }
    const advertisement = {
      author: {
        avatar: 'img/avatars/user' + userNumber + '.png',
      },
      location: location,
      offer: {
        title: TITLES[getRandomNumber(0, TITLES.length-1)],
        address: location.lat + ', ' + location.lng,
        price: getRandomNumber(1000, 9000),
        type: TYPE_LIST[getRandomNumber(0, TYPE_LIST.length-1)],
        rooms: getRandomNumber(1, 5),
        guests: getRandomNumber(1, 6),
        checkin: CHECKIN_LIST[getRandomNumber(0, CHECKIN_LIST.length-1)],
        checkout: CHECKOUT_LIST[getRandomNumber(0, CHECKOUT_LIST.length-1)],
        features: FEATURES.slice(0, getRandomNumber(0, FEATURES.length-1)),
        description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length-1)],
        photos: PHOTOS[getRandomNumber(0, PHOTOS.length-1)]
      }
    };
    advertisements.push(advertisement);
  }
  return advertisements;
}

getAdvertisements(10);
