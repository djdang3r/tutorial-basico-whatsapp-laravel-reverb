//  **------Leaflet on Mobile Map**
var map = L.map('mobilemap').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
}).addTo(map);

//  **------Accessible maps**
var map = L.map('markersmap').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.10], {
	fillColor: '#467FFB',
	fillOpacity: 0.6,
	radius: 500
}).addTo(map);

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047],
], {
	fillColor: '#467FFB',
	fillOpacity: 0.6,
	radius: 500
}).addTo(map);

marker.bindPopup("<b>Hello!</b><br>I am a popup.").openPopup();
circle.bindPopup("This is circle.");
polygon.bindPopup("This is polygon.");

var popup = L.popup()
	.setLatLng([51.513, -0.09])
	.setContent("I am a standalone popup.")
	.openOn(map);

// **------ Markers, Circles and Polygons**
var map = L.map('accessiblemap').setView([50.4501, 30.5234], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.4501, 30.5234], { alt: 'Kyiv' }).addTo(map)
	.bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');


//  **------Interactive Choropleth Map**
var map = L.map('interactivemap').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//  **------Markers With Custom Icons**
var map = L.map('customiconsmap').setView([51.5, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
		iconSize: [38, 95],
		shadowSize: [50, 64],
		iconAnchor: [22, 94],
		shadowAnchor: [4, 62],
		popupAnchor: [-3, -76]
	}
});

var greenIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png' });
var redIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });
var orangeIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png' });

var mGreen = L.marker([51.5, -0.09], { icon: greenIcon }).bindPopup('I am a green.').addTo(map);
var mRed = L.marker([51.495, -0.083], { icon: redIcon }).bindPopup('I am a red.').addTo(map);
var mOrange = L.marker([51.49, -0.1], { icon: orangeIcon }).bindPopup('I am an orange.').addTo(map);


// **------ Layer Groups and Layers Control**
var map = L.map('layersmap', { scrollWheelZoom: false }).setView([-29.50, 145], 3.5);

const basemaps = {
	StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),
	Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'TOPO-WMS' }),
	Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-Overlay-WMS' })
};

L.control.layers(basemaps).addTo(map);

basemaps.Topography.addTo(map);

const marker1 = L.marker([-37.699450, 176.279420]).addTo(map);
const marker2 = L.marker([-27.643310, 153.305140]).addTo(map);
const marker3 = L.marker([-33.956330, 122.150270]).addTo(map);
const marker4 = L.marker([-34.962390, 117.391220]).addTo(map);
const marker5 = L.marker([-17.961210, 122.214820]).addTo(map);
const marker6 = L.marker([-16.505960, 151.751520]).addTo(map);
const marker7 = L.marker([-22.594400, 167.484440]).addTo(map);
const marker8 = L.marker([-37.977000, 177.057000]).addTo(map);
const marker9 = L.marker([-41.037600, 173.017000]).addTo(map);
const marker10 = L.marker([-37.670300, 176.212000]).addTo(map);