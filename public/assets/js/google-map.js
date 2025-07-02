//  **------Terrain Type map**
var terrainmap = new GMaps({
  div: '#maptypes',
  lat: -12.043333,
  lng: -77.028333,
  mapTypeControlOptions: {
    mapTypeIds: ["terrain"]
  }
});
terrainmap.addMapType("osm", {
  getTileUrl: function (coord, zoom) {
    return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
  },
  tileSize: new google.maps.Size(256, 256),
  name: "OpenStreetMap",
  maxZoom: 20
});
terrainmap.setMapTypeId("terrain");


//  **------satellite Type map**

var satellite = new GMaps({
  div: '#maptypes1',
  lat: -12.043333,
  lng: -77.028333,
  mapTypeControlOptions: {
    mapTypeIds: ["satellite"]
  }
});
satellite.addMapType("osm", {
  getTileUrl: function (coord, zoom) {
    return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
  },
  tileSize: new google.maps.Size(256, 256),
  name: "OpenStreetMap",
  maxZoom: 18
});
satellite.setMapTypeId("satellite");

//  **------Polygons**
Polygons = new GMaps({
  el: '#map-types',
  lat: -12.043333,
  lng: -77.028333,

})
var path = [[-12.040397656836609, -77.03373871559225],
[-12.040248585302038, -77.03993927003302],
[-12.050047116528843, -77.02448169303511],
[-12.044804866577001, -77.02154422636042]];

Polygons.drawPolygon({
  paths: path,
  strokeColor: '#BBD8E9',
  strokeOpacity: 1,
  strokeWeight: 3,
  fillColor: '#BBD8E9',
  fillOpacity: 0.6
});

//  **------ Fusion Tables layers**
var infoWindow;

infoWindow = new google.maps.InfoWindow({});
new GMaps({
  div: '#maplayers',
  zoom: 11,
  lat: 41.850033,
  lng: -87.6500523
}).loadFromFusionTables({
  suppressInfoWindows: true,
});

var map;

//  **------Google Map**
new GMaps({
  el: '#g-map',
  lat: -12.043333,
  lng: -77.028333,
  click: function (e) {
    alert('You clicked marker');
  }
});

// **------ Markers**
new GMaps({
  el: '#mapmarkers',
  lat: -12.043333,
  lng: -77.028333
}).addMarker({
  lat: -12.043333,
  lng: -77.028333,
  title: 'Gmap',
  click: function (e) {
    alert('You clicked marker');
  }
});

//  **------Overlays**
new GMaps({
  el: '#mapOverlays',
  lat: -12.043333,
  lng: -77.028333
}).drawOverlay({
  content: '<div class="map-overlay">Map<div class="overlay-arrow above"></div></div>'
});

// **------ Street View Panoramas**
mappanorama = GMaps.createPanorama({
  el: '#g-streetmap',
  lat: 42.3455,
  lng: -71.0983
}); 