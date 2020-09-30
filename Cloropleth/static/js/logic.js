/* UofT SCS Data Analytics Boot Camp
  Project - 2
  Filename: logic.js
  Author:   Vivianti Santosa
  Date:     2020-09-29
*/

// Creating map object -------------------------------------------------------
var myMap = L.map("map", {
  center: [55.0000, -97.0000],
  zoom: 4
});

// Adding tile layer
// streetMap layers
var streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});
// lightMap layer
var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Defining a baseMaps object that contains all of our different map choices. Only one
// of these maps will be visible at a time!
var baseMaps = {
  //"Street Map": streetMap,
  "Light Map": lightMap
};

// We create the layers for our two different sets of data, earthquakes and
// tectonicplates.
var aboriginRDI_layer = new L.LayerGroup();
var blackRDI_layer = new L.LayerGroup();
var Incarcerated_Pop_layer = new L.LayerGroup();

// We define an object that contains all of our overlays. Any combination of
// these overlays may be visible at the same time!
var overlays = {
  "Aborigin Disparity Index": aboriginRDI_layer,
  "Black Disparity Index": blackRDI_layer,
  // "Incarcerated Population": Incarcerated_Pop_layer
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control
  .layers(baseMaps, overlays)
  .addTo(myMap);

// Load in geojson data ------------------------------------------------------
var geoData = "static/data/canada_provinces.geojson";

// Grab data with d3
d3.json(geoData, function(data) {

  // Grab second data with d3  
  var Data1 = "static/data/xixi6.json";
  d3.json(Data1, function(data1) {

    // Loop through the geoJSON data then for each object append "CRIME DATA" information
    data.features.forEach((user) => {
      // iterare through province
      for (var i=0; i < 13; i++) {
        if (data1[i].PRUID == user.properties.PRUID) {
          // push each of the information to geoJson properties
          user.properties["Location"] = data1[i].Location;
          user.properties["Pct_Aborigin_Pop"] = data1[i].Pct_Aborigin_Pop;
          user.properties["Pct_Aborigin_Arrested"] = data1[i].Pct_Aborigin_Arrested;
          user.properties["Aborigin_Disparity_Index"] = data1[i].aboriginal_disparity_index;
          user.properties["Black_Disparity_Index"] = data1[i].black_disparity_index;
          user.properties["Other_Disparity_Index"] = data1[i].other_disparity_index;
          user.properties["White_Disparity_Index"] = data1[i].white_disparity_index;
          user.properties["Incarcerated_Pop"] = data1[i].Incarcerated_Pop;
        }
      }
    });  
    //--------------------------------------

    // Create choropleth layer for Aborigin_Disparity_Index
    L.choropleth(data, {
      // Set valueProperty (value that define the color) as: RDIvalue
      valueProperty: "Aborigin_Disparity_Index",

      scale: ["#ffffb2", "#b10026"],// Set color scale
      steps: 5,// Number of breaks in step range
      mode: "q",// q for quartile, e for equidistant, k for k-means
      style: {
        color: "#fff",// Border color
        weight: 1,
        fillOpacity: 0.8
      },
      // Binding a pop-up to each layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Province/Territory: " + feature.properties.PRENAME + 
          "<br>Aborigin Disparity Index:" + feature.properties.Aborigin_Disparity_Index  +
          "<br>Black Disparity Index:" + feature.properties.Black_Disparity_Index  +
          "<br>Other Disparity Index:" + feature.properties.Other_Disparity_Index +
          "<br>White Disparity Index:" + feature.properties.White_Disparity_Index );
      }  
      // create aboriginRDI_layer  
      }).addTo(aboriginRDI_layer);
      // Then we add the aboriginRDI_layer to our map for initial display.
      aboriginRDI_layer.addTo(myMap);
  
    // Create choropleth layer for Black_Disparity_Index
    L.choropleth(data, {
      // Set valueProperty (value that define the color) as: RDIvalue
      valueProperty: "Black_Disparity_Index",

      scale: ["#ffffb2", "#b10026"],// Set color scale
      steps: 8,// Number of breaks in step range
      mode: "q",// q for quartile, e for equidistant, k for k-means
      style: {
        color: "#fff",// Border color
        weight: 1,
        fillOpacity: 0.8
      },
      // Binding a pop-up to each layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Province/Territory: " + feature.properties.PRENAME + 
          "<br>Race Disparity Index:" + feature.properties.Black_Disparity_Index);
      }  
      // create blackRDI_layer   
      }).addTo(blackRDI_layer);
  
    // Create choropleth layer for Incarcerated_Population
    L.choropleth(data, {
      // Set valueProperty (value that define the color) as: RDIvalue
      valueProperty: "Incarcerated_Pop",

      scale: ["#e6e6ff", "#000080"],// Set color scale
      steps: 5,// Number of breaks in step range
      mode: "q",// q for quartile, e for equidistant, k for k-means
      style: {
        color: "#fff",// Border color
        weight: 1,
        fillOpacity: 0.8
      },
      // Binding a pop-up to each layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Province/Territory: " + feature.properties.PRENAME + 
          "<br>Incarcerated_Pop:" + feature.properties.Incarcerated_Pop);
      }  
      // Incarcerated_Pop_layer  
      }).addTo(Incarcerated_Pop_layer);

    // Create TEXT LAYER
    for (var i = 0; i < 13; i++) {
      L.marker([data1[i].latitude,data1[i].longitude], {
        icon: L.divIcon({
            className: 'text-labels',   // Set class for CSS styling
            html: data1[i].province
        }),
        zIndexOffset: 1000     // Make appear above other map features
      }).addTo(myMap); 
    }

    // Set up LEGEND ------------------------------------------------------------------------------------
    var legend = L.control({ position: "bottomleft" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = [-2, 0, 2, 4, 6];
      var colors = ["#ffffb2", "#ebbf8f", "#d87f6c", "#c43f49", "#b10026"];
      var labels = [];

      // Create legend info and Add min & max
      var legendInfo = "<h4>Race Disparity Index</h4>" +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";

      div.innerHTML = legendInfo;

      // Create block sample colors
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



