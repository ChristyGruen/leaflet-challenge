//  THIS IS NOT THE BEST STARTER CODE - Mod15-Day1-Act10 is better (saved to logic.js file)


//source of starter code Mod15-Day1-Act03-Stu_City_Markers solved logic.js
//C:\Users\chrisgru\UofM-VIRT-DATA-PT-09-2022-U-LOLC\15-Mapping-Web\1\Activities\03-Stu_City_Markers\Solved

// Create a map object.
var myMap = L.map("map", {
  center: [41, -118],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: 8550405
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: 446599
}
];

// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < cities.length; i++) {
  let city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(myMap);
}
// how to create circles from Mod15-Day1-Act05
// Create a red circle over Dallas.
L.circle([32.7767, -96.7979], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 100000
}).addTo(myMap);





// let newyorkmarker = L.marker([40.7128,-74.0059], {
//   draggable:false, 
//   title:"New York"
// }).addTo(myMap)
// .bindPopup("<h2>New York </h2>")

// let LosAngeles = L.marker([34.0522,-118.2437], {
//   draggable:false, 
//   title:"LA"
// }).addTo(myMap)
// .bindPopup("<h2>LA</h2><hr><h3>City of Angels<h3>")

// let Houston = L.marker([29.7604,-95.3698], {
//   draggable:false, 
//   title:"New York"
// }).addTo(myMap)
// .bindPopup("<h2>H-Town</h2>")

// let Omaha = L.marker([41.2524,-95.9980], {
//   draggable:false, 
//   title:"Omaha"
// }).addTo(myMap)
// .bindPopup("<h2>Omaha</h2>")

// let Chicago = L.marker([41.8781,-87.5298], {
//   draggable:false, 
//   title:"Chicago"
// }).addTo(myMap)
// .bindPopup("<h2>Windy City</h2>")
