define(["require", "exports", "esri/map", "esri/layers/FeatureLayer"], function (require, exports, Map, FeatureLayer) {
    "use strict";
    var URL = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0";
    var map = new Map("map", {
        basemap: "hybrid",
        center: [-82.44, 35.61],
        zoom: 17
    });
    var featureLayer = new FeatureLayer(URL);
    map.addLayer(featureLayer);
});
//# sourceMappingURL=main.js.map