import {getRandomNumber, getRandomFloat} from './util.js';


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

const MAX_AVATAR_NUMBER = 10;

const ADS_COUNT = 10;

const LAT_MIN = 35.65000;

const LAT_MAX = 35.70000;

const LNG_MIN = 139.70000;

const LNG_MAX = 139.80000;

const createAd = (index) => {
  const location = {
    lat: getRandomFloat(LAT_MIN, LAT_MAX, 5),
    lng: getRandomFloat(LNG_MIN, LNG_MAX, 5)
  };

  const avatarNumber = index < MAX_AVATAR_NUMBER ? `0${index}` : index;

  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    location,
    offer: {
      title: TITLES[getRandomNumber(0, TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(1000, 9000),
      type: TYPE_LIST[getRandomNumber(0, TYPE_LIST.length - 1)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 6),
      checkin: CHECKIN_LIST[getRandomNumber(0, CHECKIN_LIST.length - 1)],
      checkout: CHECKOUT_LIST[getRandomNumber(0, CHECKOUT_LIST.length - 1)],
      features: FEATURES.slice(0, getRandomNumber(0, FEATURES.length - 1)),
      description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
      photos: PHOTOS.slice(0, getRandomNumber(0, PHOTOS.length - 1))
    }
  };

};

const createAds = (num) => {
  const advertisements = [];

  for (let i = 1; i <= num; i++) {
    const ad = createAd(i);
    advertisements.push(ad);
  }

  return advertisements;
};

const ads = createAds(ADS_COUNT);

export {ads};
