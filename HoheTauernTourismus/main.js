//Punkt definieren
var großglockner = {
    lat: 47.074531,
    lng: 12.6939,
    title: "Großglockner"
};

// Karte initialisieren
var map = L.map('map', {
    fullscreenControl: true,
}
).setView([großglockner.lat, großglockner.lng], 10);


// BasemapAT Layer mit Leaflet provider plugin als startLayer Variable
var startLayer = L.tileLayer.provider("BasemapAT.grau");
startLayer.addTo(map);

let themaLayer = {
    borders: L.featureGroup().addTo(map),
    routen: L.featureGroup().addTo(map),
    hut: L.featureGroup().addTo(map),
}

L.control
    .layers({
        "BasemapAT Grau": startLayer,
        "BasemapAT Standard": L.tileLayer.provider("BasemapAT.basemap"),
        "BasemapAT High-DPI": L.tileLayer.provider("BasemapAT.highdpi"),
        "BasemapAT Gelände": L.tileLayer.provider("BasemapAT.terrain"),
        "BasemapAT Orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
        "BasemapAT Beschriftung": L.tileLayer.provider("BasemapAT.overlay"),
    },
        {
            "Nationalparkgrenze": themaLayer.borders.addTo(map),
            "Wandertouren": themaLayer.routen.addTo(map),
            "Almen": themaLayer.hut.addTo(map),
        })
    .addTo(map);

// Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);

/*let controlElevation = L.control.elevation({
   time: false,
    elevationDiv: "#profile",
    height: 300,
    theme: "trail-HoheTauern",
}).addTo(map);
controlElevation.load("HoheTauernTourismus/grossglockner_a");

let pulldown = document.querySelector("#pulldown");

for (let tour of TOUREN) {
    let status = "";
    if (tour.nr == 1) {
        status = "selected";
    }
    pulldown.innerHTML += `<option ${status}>Etappe ${tour.nr}: ${tour.titel}</option>`;
}
*/
new L.Control.MiniMap(
    L.tileLayer("https://wmts.kartetirol.at/gdi_summer/{z}/{x}/{y}.png", {
        attribution: `Datenquelle: <a href="https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol">eGrundkarte Tirol</a>`
    }), {
    toggleDisplay: true,
}
).addTo(map);
 
  let controlElevation = L.control.elevation({
    time: false,
    elevationDiv: "#profile",
    height: 200,
}).addTo(map);
controlElevation.load("Daten/kreuzeckhoehenweg_etappe1.gpx");

/*fetch("NationalparkHoheTauern/npht_agrenze_new.geojson")
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: 'green'
      },
    }).addTo(themaLayer.borders);
  })
  .catch(error => console.error('Error fetching data:', error));

var lng = `Almenzentren.geojson${features.geometry.coordinates[0]}`,
    lat = `Almenzentren.geojson${features.geometry.coordinates[1]}`;

fetch(`Almzentren.geojson`)
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: 'icons/hut.png',
          })
        });
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
          <h4>${features.properties.NAME}</h4>
        `);
      }
    }).addTo(themaLayer.hut);
  })
  .catch(error => {
    console.error('Error loading the GeoJSON data:', error);
  });
*/



