const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const addPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const initMap = (activate, coordinates) => {
  map.on('load', () => {
    activate(false);
  })
    .setView(coordinates, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const initPinMarker = (getCoordinates, coordinates) => {
  const mainPinMarker = L.marker(
    coordinates,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  getCoordinates(coordinates);

  mainPinMarker.on('moveend', (evt) => {
    getCoordinates(evt.target.getLatLng());
  });

  mainPinMarker.addTo(map);
};

const createAddMarkers = (ads, createCard) => {
  ads.forEach((ad) => {
    const lat = ad.location.lat;
    const lng = ad.location.lng;
    const marker = L.marker({
      lat,
      lng,
    },
    {
      draggable: true,
      icon: addPinIcon,
    });

    marker.addTo(map).bindPopup(createCard(ad));
  });
};

export {initPinMarker, initMap, createAddMarkers};
