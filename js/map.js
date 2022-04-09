import {getCoordinates, switchFormState} from './form.js';
import {ads} from './data.js';
import {createCard} from './offer.js';

const ZOOM_MAP = 10;
const INIT_MAP_COORDINATES = {
  lat: 35.681729,
  lng: 139.753927,
};
const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION_LAYER = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const map = L.map('map-canvas');
const layerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const addPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderAddMarkers = (markers) => {
  markers.forEach((ad) => {
    const lat = ad.location.lat;
    const lng = ad.location.lng;
    const marker = L.marker({
      lat,
      lng,
    },
    {
      draggable: false,
      icon: addPinIcon,
    });

    marker.addTo(layerGroup).bindPopup(createCard(ad));
  });
};

const createPinMarker = () => {
  const mainPinMarker = L.marker(
    INIT_MAP_COORDINATES,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  getCoordinates(INIT_MAP_COORDINATES);

  mainPinMarker.on('move', (evt) => {
    getCoordinates(evt.target.getLatLng());
  });

  mainPinMarker.addTo(map);
};

const initMap = () => {
  map.on('load', () => {
    switchFormState(false);
    renderAddMarkers(ads);
  })
    .setView(INIT_MAP_COORDINATES, ZOOM_MAP);

  L.tileLayer(
    LAYER,
    {
      attribution: ATTRIBUTION_LAYER,
    },
  ).addTo(map);

  createPinMarker();
};

export {initMap};
