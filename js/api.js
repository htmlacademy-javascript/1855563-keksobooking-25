const SIMILAR_ADS_COUNT = 10;

const getData = (initMap) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    initMap(ads.slice(0, SIMILAR_ADS_COUNT));
  });
};



const sendData = (onSuccess, onFail, body, resetPage) => {
  fetch(
  'https://25.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body,
  },
  ).then(() => {
    resetPage();
    onSuccess();
  }).catch((err) => {
    onFail();
  });
};

export {getData, sendData};
