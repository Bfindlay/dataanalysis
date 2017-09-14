let map = L.map('map').setView([30.2744, 100.7751], 2.5);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicGVubnlwYW5nY29kZSIsImEiOiJjajZ2bjlwazkxNW10MzJvMzVidjNlcnExIn0.kxfe2U4_vp8dcb6dQdok2g'
}).addTo(map);



let style = feature => {
    const { _2016Census_G16A_NSW_SA1_M_Y12e_Tot } = feature.properties;
    return {
        fillColor: colour(_2016Census_G16A_NSW_SA1_M_Y12e_Tot),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

let colour = d => {
    return (
        d > 150 ? '#0052cc' :
        d > 85 ? '#005ce6' :
        d > 76 ? '#0066ff' :
        d > 68 ? '#1a75ff' :
        d > 60 ? '#3385ff' :
        d > 52 ? '#4d94ff' :
        d > 43 ? '#66a3ff' :
        d > 34 ? '#80b3ff' :
        d > 26 ? '#99c2ff' :
        d > 11 ? '#b3d1ff' :
            '#e6f0ff' //default
    )
}

L.geoJSON(male15_19, {style : style}).addTo(map);