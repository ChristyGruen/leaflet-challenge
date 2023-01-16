//source of starter code Mod15-Day1-Act10-Stu_GeoJSON solved logic.js
//C:\Users\chrisgru\UofM-VIRT-DATA-PT-09-2022-U-LOLC\15-Mapping-Web\1\Activities\10-Stu_GeoJson\Solved

// Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-14&endtime=2023-01-15";
// &maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

function createMap(earthquakes) {
  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Earthquakes: earthquakes
    //,Tectonics: tectonics
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      0,0
    ],
    zoom: 2,
    layers: [street, earthquakes
    //,tectonics
  ]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}


// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  // createFeatures(data.features);
  console.log(data.features)
});


function createFeatures(earthquakeData) {
  // L.circle([-122.2705002, 37.894001]).addTo(myMap)
  createMap(earthquakes)
};

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  // function onEachFeature(feature, layer) {
  //   layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
  // };

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  // var earthquakes = L.geoJSON(earthquakeData, {
  //   onEachFeature: onEachFeature
  // });


  // var earthquakes = L.geoJSON(earthquakeData, {
  //   onEachFeature: onEachFeature

  // });


//   data.forEach(elephant => {
//     L.circle([elephant.geometry.coordinates[1], elephant.geometry.coordinates[0]],
//       // elephant.geometry.coordinates[].location, 
//       {
//         fillOpacity:1,
//         color:"green",
//         fillColor: "blue", // marker color dependent on earthquake depth
//         radius: 100//elephant.properties.mag //marker size dependent on earthquake magnitude
//         }).addTo(myMap)
//         .bindPopup(`<h1>${elephant.properties.place}</h1><hr><h3>Magnitude ${elephant.properties.mag}<\h3><hr><h3>Depth ${elephant.geometry.coordinates[2]}`)
//     })






//   createMap(earthquakes);
// };
// //code from mod15-d2-act03
// function createFeatures(earthquakeData) {
// let markers = L.circle();

// // Loop through the data.
// for (let i = 0; i < earthquakeData.length; i++) {

//   // Set the data location property to a variable.
//   let location = earthquakeData[i].geometry;

//   // Check for the location property.
//   if (location) {

//     // Add a new marker to the cluster group, and bind a popup.
//     markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//       .bindPopup(earthquakeData[i].descriptor));
//   }

// }
// };
//marker size features.properties.mag
//marker color geometry.coordinates[2]
//longitude geometry.coordinates[0]
//latitude geometry.coordinates[1]

//how to create other markers Mod15-Day1-Act04 Ins_Other_Markers
// L.circle([44.52, -122.69], {
//   color: "green",
//   fillColor: "green",
//   fillOpacity: 0.75,
//   radius: 500
// }).addTo(myMap)
// .bindPopup("Portland Avg Precipation");

//set radius using magnitude level
//set fillcolor using depth level
//bindpopup with magnitude, location and depth

