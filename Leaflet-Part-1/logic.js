//  This is the best so far
// source of starter code Mod15-Day1-Act10-Stu_GeoJSON solved logic.js
//C:\Users\chrisgru\UofM-VIRT-DATA-PT-09-2022-U-LOLC\15-Mapping-Web\1\Activities\10-Stu_GeoJson\Solved

// Store our API endpoint as queryUrl.
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-14&endtime=2023-01-15";
// &maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

const dataPromise = d3.json(url);
console.log("Data Promise: ",dataPromise);

// Perform a GET request to the query URL/
d3.json(url).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  console.log(data.features);
  let colorlist = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma
  let colorlist2 = ['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529','#002415'];//multi-hue yellow green plus one
  let colorlist3 = ['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58','#000000']//  '#011859'multi-hue yellow blue plus one
  //leaflet option to return color
  //https://colorbrewer2.org/#type=sequential&scheme=YlGn&n=9
  //https://leafletjs.com/examples/choropleth/  
  function getColor(depth) {
    return depth > 250 ? colorlist3[9] :
           depth > 150 ? colorlist3[8] :
           depth > 100 ? colorlist3[7] :
           depth > 50  ? colorlist3[6] :
           depth > 20  ? colorlist3[5] :
           depth > 15  ? colorlist3[4] :
           depth > 10  ? colorlist3[3] :
           depth > 5   ? colorlist3[2] :
           depth > 1   ? colorlist3[1] :
                         colorlist3[0];
};

  //create circle markers
   
  const circleMarkers = [];
  data.features.forEach(feature=> {

    circleMarkers.push(L.circleMarker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]], {
      opacity: .9,
      color: getColor(feature.geometry.coordinates[2]),
      fillColor: getColor(feature.geometry.coordinates[2]),
      radius: feature.properties.mag*2,
      }).bindPopup(`<h2>${feature.properties.place}</h2><hr><h3>Magnitude ${feature.properties.mag}<\h3><hr><h3>Depth ${feature.geometry.coordinates[2]}`))
  });


//   //need to split this off into a separate data pull
//   https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json
// // Create a Polygon, and pass in some initial options.
// const plateMarkers = [];
// data.features.forEach(feature=>{
//     plateMarkers.push(L.polygon([
//       [45.54, -122.68],
//       [45.55, -122.68],
//       [45.55, -122.66]
//     ], {
//       color: "yellow",
//       fillColor: "yellow",
//       fillOpacity: 0.75
//     }).addTo(myMap).bindPopup(favoriteanimal[3]));
//   });

      console.log(circleMarkers)
  createFeatures(data.features);
  


  function createMap(earthquakes) {
    let circleLayer = L.layerGroup(circleMarkers)
    // .bindPopup('hello world').on('click',function(){alert('Clicked on a group!');})
    ;
    console.log(circleLayer)

    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Create a baseMaps object.
    let baseMaps = {
      "Street Map": street,
      "Topographic Map": topo
    };

    // Create an overlay object to hold our overlay.
    let overlayMaps = {
      CircleCities:circleLayer,
      // Earthquakes: earthquakes
      // ,Tectonics: tectonics
    };

    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    let myMap = L.map("map", {
      center: [
        0,0
      ],

      zoom: 2,
      layers: [street,
        circleLayer, 
        // earthquakes
      // ,tectonics
    ]
    });

    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

    //there is a way to create a legend with a plugin
    // https://github.com/ptma/Leaflet.Legend

    //need css style components to get this to work
    // create legend copied from Mod15-Day2-Act04 and updated from https://gis.stackexchange.com/questions/193161/add-legend-to-leaflet-map
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      let div = L.DomUtil.create("div", "info legend ");
      let labels = [' less than 1','1-5', '5-10', '10-15', '15-20', '20-50', '50-100', '100-150', '150-250', 'greater than 250'];
      let colors = colorlist3
      console.log(colors)

      let legendInfo = "<h4><strong>Earthquake Depth (m)</strong></h3>";

      div.innerHTML = legendInfo;
    
      for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]),
        console.log(labels[i]),
        div.innerHTML +=
          "<i style='background: " + colors[i] + "'></i><span>" + labels[i] + "</span><br><br>";
      }
    
      let quakeInfoLink = "<i><a href='https://earthquake.usgs.gov/earthquakes/map/?extent=-78.90393,-228.51563&extent=74.21198,259.10156>More...</a></i>";
    
      div.innerHTML += quakeInfoLink;
      
    return div;
    };
  
    // Adding the legend to the map
    legend.addTo(myMap);

  };

  function createFeatures(earthquakeData) {

    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place, magnitude and depth the earthquake.
  
    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // Run the onEachFeature function once for each piece of data in the array.

    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h1>${feature.properties.place}</h1><hr><h3>Magnitude ${feature.properties.mag}<\h3><hr><h3>Depth ${feature.geometry.coordinates[2]}`);
    }
    var circleLayer = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature
    });

    // var earthquakes = L.geoJSON(earthquakeData, {
    //   onEachFeature: onEachFeature
    // });

    // Send our earthquakes layer to the createMap function/
    createMap(circleLayer);
  }

//end of d3
});
