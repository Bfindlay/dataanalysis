//JS and leaflet stuff

var map = L.map('map'),{
  center: [5,28],
  zoom: 3,
  minZoom:2,
  maxZoom: 18
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'),{
  attribution:____________________
  id:'mapbox.streets',
  accessToken:'pk.eyJ1IjoicGVubnlwYW5nY29kZSIsImEiOiJjajZ2bjlwazkxNW10MzJvMzVidjNlcnExIn0.kxfe2U4_vp8dcb6dQdok2g'
}).addTo(map);

//Add some GeoJson
