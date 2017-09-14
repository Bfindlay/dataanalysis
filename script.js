//JS and leaflet stuff
mapboxgl.accessToken = 'pk.eyJ1IjoicGVubnlwYW5nY29kZSIsImEiOiJjajZ2bjlwazkxNW10MzJvMzVidjNlcnExIn0.kxfe2U4_vp8dcb6dQdok2g';

var map = new mapboxgl.Map({
  container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [151.209900, -33.865143], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
