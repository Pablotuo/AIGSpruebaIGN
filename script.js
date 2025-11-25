// Crear la variable map, crea un mapa y lo muestra en las coordenadas(lat,Lon) con un zoom determinado(8).
var map = L.map('map').setView([9.7489, -83.7534], 8);
// Capa base: OpenStreetMap
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
});

// Capa base: Satélite ESRI
var satellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        maxZoom: 19,
        attribution: '© ESRI World Imagery'
    }
);

// Mostrar OSM por defecto
street.addTo(map);

// Control de capas
var baseMaps = {
    "Mapa Claro (OSM)": street,
    "Satélite": satellite
};

L.control.layers(baseMaps).addTo(map);

// Lista de lugares con latitudes, longitudes, nombres, descripciones y la imagen
var lugares = [ 
  {
    lat: 9.992554,
    lon: -83.024251,
    nombre: "57-LA",
    descripcion: "Blanco",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/imagenes/image%20(3).png?raw=true"
  },
  {
    lat: 10.992554,
    lon: -84.024251,
    nombre: "57-LB",
    descripcion: "Blanco",
    imagen: "https://github.com/Pablotuo/ChichiHitos/blob/main/images/20220501_122303.jpg?raw=true"
  }
];

// Agregar los marcadores al mapa
lugares.forEach(function(lugar) {
    L.marker([lugar.lat, lugar.lon]).addTo(map)
        .bindPopup(
            "<b>" + lugar.nombre + "</b><br>" +
            lugar.descripcion + "<br>" +
            "<img src='" + lugar.imagen + "' alt='" + lugar.nombre +
            "' style='width:350px; height:auto;'>"
        );
});
