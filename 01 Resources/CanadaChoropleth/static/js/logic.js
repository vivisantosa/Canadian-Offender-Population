// Creating map object
var myMap = L.map("map", {
  center: [55.0000, -97.0000],
  zoom: 4
});


// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Provinces data
var provinces = [
  {
    PRUID: 59,
    Province: "BC",
    Pct_Aborigin_Pop: "6.6%",
    Pct_Aborigin_Arrested: "27.2%",
    Race_Disparity_Index: 4.10
  },
  {
    PRUID: 24,
    Province: "QC",
    Pct_Aborigin_Pop: "4.5%",
    Pct_Aborigin_Arrested: "10.9%",
    Race_Disparity_Index: 2.42
  },
  {
    PRUID: 62,
    Province: "NU",
    Pct_Aborigin_Pop: "85.5%",
    Pct_Aborigin_Arrested: "100%",
    Race_Disparity_Index: 1.71
  },
  {
    PRUID: 11,
    Province: "PE",
    Pct_Aborigin_Pop: "3.6%",
    Pct_Aborigin_Arrested: "0%",
    Race_Disparity_Index: 0
  },
  {
    PRUID: 47,
    Province: "SK",
    Pct_Aborigin_Pop: "6.6%",
    Pct_Aborigin_Arrested: "27.2%",
    Race_Disparity_Index: 3.66
  },
  {
    PRUID: 60,
    Province: "YU",
    Pct_Aborigin_Pop: "23.7%",
    Pct_Aborigin_Arrested: "42.9%",
    Race_Disparity_Index: 1.81
  },
  {
    PRUID: 46,
    Province: "MB",
    Pct_Aborigin_Pop: "18.2%",
    Pct_Aborigin_Arrested: "54.7%",
    Race_Disparity_Index: 3.01
  },
  {
    PRUID: 35,
    Province: "ON",
    Pct_Aborigin_Pop: "3.9%",
    Pct_Aborigin_Arrested: "12.2%",
    Race_Disparity_Index: 3.12
  },
  {
    PRUID: 13,
    Province: "NB",
    Pct_Aborigin_Pop: "6.4%",
    Pct_Aborigin_Arrested: "12.3%",
    Race_Disparity_Index: 1.93
  },
  {
    PRUID: 61,
    Province: "NW",
    Pct_Aborigin_Pop: "50.4%",
    Pct_Aborigin_Arrested: "100%",
    Race_Disparity_Index: 1.99
  },
  {
    PRUID: 48,
    Province: "AB",
    Pct_Aborigin_Pop: "7.6%",
    Pct_Aborigin_Arrested: "31.6%",
    Race_Disparity_Index: 4.14
  },
  {
    PRUID: 10,
    Province: "NL",
    Pct_Aborigin_Pop: "11.4%",
    Pct_Aborigin_Arrested: "10.5%",
    Race_Disparity_Index: 0.92
  },
  {
    PRUID: 12,
    Province: "NS",
    Pct_Aborigin_Pop: "8.2%",
    Pct_Aborigin_Arrested: "10.4%",
    Race_Disparity_Index: 1.28
  }
];

var provinces2 = {
  "59":{
    "Pct_Aborigin_Pop": "6.6%",
    "Pct_Aborigin_Arrested": "27.2%",
    "Race_Disparity_Index": 4.10 },
  "16":{
    "Pct_Aborigin_Pop": "4.5%",
    "Pct_Aborigin_Arrested": "10.9%",
    "Race_Disparity_Index": 2.42 },
  "62":{
    "Pct_Aborigin_Pop": "85.5%",
    "Pct_Aborigin_Arrested": "100%",
    "Race_Disparity_Index": 1.71 },
  "11":{
    "Pct_Aborigin_Pop": "6.6%",
    "Pct_Aborigin_Arrested": "27.2%",
    "Race_Disparity_Index": 4.10 },
  "47":{
    "Pct_Aborigin_Pop": "4.5%",
    "Pct_Aborigin_Arrested": "10.9%",
    "Race_Disparity_Index": 2.42 },
  "60":{
    "Pct_Aborigin_Pop": "85.5%",
    "Pct_Aborigin_Arrested": "100%",
    "Race_Disparity_Index": 1.71 },
  "46":{
    "Pct_Aborigin_Pop": "6.6%",
    "Pct_Aborigin_Arrested": "27.2%",
    "Race_Disparity_Index": 4.10 },
  "35":{
    "Pct_Aborigin_Pop": "4.5%",
    "Pct_Aborigin_Arrested": "10.9%",
    "Race_Disparity_Index": 2.42 },
  "13":{
    "Pct_Aborigin_Pop": "85.5%",
    "Pct_Aborigin_Arrested": "100%",
    "Race_Disparity_Index": 1.71 },
  "61":{
    "Pct_Aborigin_Pop": "6.6%",
    "Pct_Aborigin_Arrested": "27.2%",
    "Race_Disparity_Index": 4.10 },
  "48":{
    "Pct_Aborigin_Pop": "4.5%",
    "Pct_Aborigin_Arrested": "10.9%",
    "Race_Disparity_Index": 2.42 },
  "10":{
    "Pct_Aborigin_Pop": "85.5%",
    "Pct_Aborigin_Arrested": "100%",
    "Race_Disparity_Index": 1.71 }, 
  "10":{
    "Pct_Aborigin_Pop": "85.5%",
    "Pct_Aborigin_Arrested": "100%",
    "Race_Disparity_Index": 1.71 },   
}

function getRDIvalue(number, provinces){
  console.log("I am in getRDIvalue");
  console.log(number);
  // var rdiValues = [];
  for (var i=0; i < 13; i++) {
    console.log("provinces", number, provinces[i].PRUID,provinces[i].Race_Disparity_Index);
    //console.log("data", data[i].properties.PRUID);
    if (provinces[i].PRUID == number) {
      console.log("bingo")
      var rdiValue = provinces[i].Race_Disparity_Index;  
      // rdiValues.push(rdiValue) 
      console.log("rdiValue", rdiValue);
      return rdiValue
  }}
}
// provinces2 = {
//   "59":{
//     "MediuamHOuse":20,
//     "MediaAge":20
//   },
//   "16":70000,
//   "29":80000
// }

// loop over the geogson data
// for every province:
// loop over the array of provicnes until you find an entry that has pRUID=PRUID

// loop over the geojson data
// for every provinceget the corresponding data from provinces2
// proinvce_data = provinces2["59"]

// inject to my provice medianIncome = provicen_data["MedianINcome"]

// Load in geojson data
var geoData = "static/data/canada_provinces.geojson";

// Grab data with d3
d3.json(geoData, function(data) {
  console.log("here 2",data);

  // forEach
  //   //console.log("provinces", number, provinces[i].PRUID,provinces[i].Race_Disparity_Index);
  //   //console.log("data", data[i].properties.PRUID);
  //   //jsonObj.members.viewers[newUser] = newValue ;

  //   data[i].properties.Race_Disparity_Index = provinces of PRUID "Race_Disparity_Index"
  // }}

  // Grab second data with d3  
  var geoData1 = "static/data/Median_Household_Income_2016.geojson";
  d3.json(geoData1, function(data1) {
    console.log("here 3 ", data1);
    console.log("provinces", provinces);

    var geojson;

    // Create a new choropleth layer
    geojson = L.choropleth(data, {

      // Define what  property in the features to use
      // valueProperty: getRDIvalue(data.features, provinces),
      valueProperty: "PRUID",

      // Set color scale
      scale: ["#ffffb2", "#b10026"],

      // Number of breaks in step range
      steps: 5,

      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "#fff",
        weight: 1,
        fillOpacity: 0.8
      },

      // Binding a pop-up to each layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Zip Code: " + feature.properties.rmapshaperid + feature.properties.PRNAME + "<br>Median Household Income:<br>" +
          "$" + feature.properties.PRUID);
      }
    }).addTo(myMap);

    // Set up the legend
    var legend = L.control({ position: "bottomleft" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson.options.limits;
      var colors = geojson.options.colors;
      var labels = [];

      // Add min & max
      var legendInfo = "<h4>Race Disparity Index</h4>" +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });

      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    };

    // Adding legend to the map
    legend.addTo(myMap);
  });
});

// Load RaceDisparityIndex
// d3.csv("hours-of-tv-watched.csv").then  (tvData => {
//   console.log(tvData);
//   var names = tvData.map(data=> data.name);
//   console.log ("names ", names); 
//   tvData.forEach( data => {
//       //data.hours = parseInt(data.hours);
//       data.hours = +data.hours; //+data.hours is equivalent to parseInt(data.hours)
//       // not the same as data.hours += data.hours;
//       console.log("Name: ", data.name );
//       console.log("Hours: ", data.hours);
//   });
// });

