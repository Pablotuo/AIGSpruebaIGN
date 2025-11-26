// Crear la variable map, crea un mapa y lo muestra en las coordenadas(lat,Lon) con un zoom determinado(8).
var map = L.map('map').setView([9.7489, -83.7534], 8);
// Activa capabase de OpenStreetMap
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors' //Esto ultimo no se que es 
});


// Íconos de colores
var iconVerde = L.ExtraMarkers.icon({
    markerColor: 'green',
    shape: 'circle',
    prefix: 'fa',
    icon: 'fa-check'
});

var iconRojo = L.ExtraMarkers.icon({
    markerColor: 'red',
    shape: 'circle',
    prefix: 'fa',
    icon: 'fa-xmark'
});

var iconAmarillo = L.ExtraMarkers.icon({
    markerColor: 'yellow',
    shape: 'circle',
    prefix: 'fa',
    icon: 'fa-question'
});

// Activa capabase Satélite ESRI
var satellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        maxZoom: 19,
        attribution: '© ESRI World Imagery'
    }
);
// Mostrar OpenStreetMaps por defecto
street.addTo(map);

// Lo que muestra el boton de seleccion de mapas.
var baseMaps = {
    "Mapa": street,
    "Satélite": satellite
};
//Crea el boton de seleccion de mapas. 
L.control.layers(baseMaps).addTo(map);

// Lista de Puntos de Interes, crea la variable lugares
var lugares = [ 
  {
    lat: 9.992554,   
    lon: -83.024251,
    nombre: "57-LA",
    descripcion: "Blanco",
    "color": "verde",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/imagenes/image%20(3).png?raw=true"
  },
  {
    lat: 10.992554,
    lon: -84.024251,
    nombre: "57-LB",
    descripcion: "Amarillo",
    "color": "rojo",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/images/20220501_122303.jpg?raw=true"
  }
];

// Agregar los marcadores al mapa
lugares.forEach(function(lugar) {    //Recore la lista de Hitos
    L.marker([lugar.lat, lugar.lon]).addTo(map)    //Crea el marcador 
        .bindPopup(
            "<b>" + lugar.nombre + "</b><br>" +
            lugar.descripcion + "<br>" +
            "<img src='" + lugar.imagen + "' alt='" + lugar.nombre +
            "' style='width:350px; height:auto;'>" 
        ); // Popup con: negrita, descripcion foto a (350px)
});
