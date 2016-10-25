import Map = require("esri/map");
import FeatureLayer = require("esri/layers/FeatureLayer");

const URL = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0";

const map = new Map("map", {
  basemap: "hybrid",
  center: [-82.44, 35.61],
  zoom: 17
});

const featureLayer = new FeatureLayer(URL);

map.addLayer(featureLayer);