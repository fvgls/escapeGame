// CREATION CARTE //

var mapEurope = L.map('mapid').setView([53.8, 10.46], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1Ijoia2l3aW1hcHBpbmciLCJhIjoiY2pvaWtseGRyMDFqYjNsbGl2a2J6bWt1bSJ9.qEtmiqiNOVX74JS_7FNoEQ',
  { maxZoom: 14, minZoom: 3, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', id: 'mapbox.streets' }).addTo(mapEurope);


// CREATION MARKER //

var couchePing1 = new L.layerGroup();
createMarker(1,mapEurope,couchePing1);
mapEurope.addLayer(couchePing1);

var coucheWorm = new L.layerGroup();
createMarker(3,mapEurope,coucheWorm);
mapEurope.addLayer(coucheWorm);

var coucheContainer = new L.layerGroup();
createMarker(4,mapEurope,coucheContainer);
mapEurope.addLayer(coucheContainer);
//mapEurope.removeLayer(coucheContainer);

var coucheSki = new L.layerGroup();
createMarker(6,mapEurope,coucheSki);
mapEurope.addLayer(coucheSki);

var coucheGloria = new L.layerGroup();
createMarker(7,mapEurope,coucheGloria);
mapEurope.addLayer(coucheGloria);
