// Crear el mapa (coordenadas iniciales)
var map = L.map('map').setView([10.5, -66.9], 5); // Venezuela por ejemplo

// Capa de mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Lista de puntos visitados
var lugares = [
    { nombre: "Lugar 1", coords: [10.496, -66.848] },
    { nombre: "Lugar 2", coords: [10.420, -64.180] },
    { nombre: "Lugar 3", coords: [8.596, -71.145] }
];

// Agregar marcadores
lugares.forEach(l => {
    L.marker(l.coords)
      .addTo(map)
      .bindPopup(`<b>${l.nombre}</b><br>(${l.coords[0]}, ${l.coords[1]})`);
});
