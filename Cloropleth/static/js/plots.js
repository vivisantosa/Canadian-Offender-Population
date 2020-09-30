
//1.  extract the data from csv
//1.a load csv data
// var table1 = "../../01 Resources/Data/table1.csv"
var table1 = "static/data/table1.json" 
// var table1 = "table1.json" 



// Important! The HTML is edited to have selDat1 and selDat2
// Selecting elements on the HTML
var selDat1 = d3.select("#selDataset1")
var selDat2 = d3.select("#selDataset2")

var provinceNames = ["National","BC","AB","SK","MB","ON","QC","NB","NL","PE","NS","NW","YU","NU"] 
var sexList = ["Male", "Female", "Both"]
var Races = ['Aboriginal', 'Black', 'Other Minority','White']



// Create dropdown
provinceNames.forEach( d=> {
  selDat1.append("option").text(d)
  } )

sexList.forEach( d=> {
  selDat2.append("option").text(d)
  } )



// Set the province and sex as global variable. This way, we just have to change province and sex
var Province = "National"
var Sex = "Both"

// Load data into
// d3.csv(table1).then(function(d) {
d3.json(table1,function(d) {

  
  // Initialize the function
  function init() {

    var trace1Y = [] 
    var trace2Y = []
    
    // push data to trace 1 or 2 only if it matches the condition
    d.forEach(function(data) {

      // console.log(data.Percent_Population)
      if ( data.province == Province && data.sex == Sex ){
        trace1Y.push(data.race_percent_arrested)
        trace2Y.push(data.race_percent_population)

        // console.log(trace1Y)
      }

    });

    // set up trace to prepare data for one of the table
    var trace1 = {
      x: Races,
      y: trace1Y,
      name: 'Sum of Race % Arrested',
      type: 'bar'
    };
    
    // set up trace to prepare data for one of the table
    var trace2 = {
      x: Races,
      y: trace2Y,
      name: 'Sum of Race % Population',
      type: 'bar'
    };
    
    // draw the plots
    var data = [trace1, trace2];
    var layout = {barmode: 'group'};
    var CHART = d3.selectAll("#plot").node();
    Plotly.newPlot(CHART, data, layout);

    
  }
init()

// TO DO! On change, run this program
  // d3.selectAll("body").on("change", updatePlotly);
  // d3.selectAll("body").on("change", updatePlotly);
// Call the initialization function

d3.select("#selDataset1").on("change", updateProvince);
d3.select("#selDataset2").on("change", updateSex);

  
// Create function to capture Sex selection
  function updateSex() {
    var dropdownMenu2 = d3.select("#selDataset2");
    var dataset2 = dropdownMenu2.node().value;
    var Sex = dataset2
    console.log(Sex)
    
    var trace1Y = [] 
    var trace2Y = []
    
    // push data to trace 1 or 2 only if it matches the condition
    d.forEach(function(data) {

      // console.log(data.Percent_Population)
      if ( data.province == Province && data.sex == Sex ){
        trace1Y.push(data.race_percent_arrested)
        trace2Y.push(data.race_percent_population)

        // console.log(trace1Y)
      }

    });

    // set up trace to prepare data for one of the table
    var trace1 = {
      x: Races,
      y: trace1Y,
      name: 'Sum of Race % Arrested',
      type: 'bar'
    };
    
    // set up trace to prepare data for one of the table
    var trace2 = {
      x: Races,
      y: trace2Y,
      name: 'Sum of Race % Population',
      type: 'bar'
    };
    
    // draw the plots
    var data = [trace1, trace2];
    var layout = {barmode: 'group'};
    var CHART = d3.selectAll("#plot").node();
    
    Plotly.newPlot(CHART, data, layout);
    
  }



// Create function to capture Province selection, then call init()
function updateProvince() {
  var dropdownMenu1 = d3.select("#selDataset1");
  var dataset = dropdownMenu1.node().value;
  var Province = dataset
  console.log(Province)
  
  var trace1Y = [] 
  var trace2Y = []
  
  // push data to trace 1 or 2 only if it matches the condition
  d.forEach(function(data) {

    // console.log(data.Percent_Population)
    if ( data.province == Province && data.sex == Sex ){
      trace1Y.push(data.race_percent_arrested)
      trace2Y.push(data.race_percent_population)

      // console.log(trace1Y)
    }

  });

  // set up trace to prepare data for one of the table
  var trace1 = {
    x: Races,
    y: trace1Y,
    name: 'Sum of Race % Arrested',
    type: 'bar'
  };
  
  // set up trace to prepare data for one of the table
  var trace2 = {
    x: Races,
    y: trace2Y,
    name: 'Sum of Race % Population',
    type: 'bar'
  };
  
  // draw the plots
  var data = [trace1, trace2];
  var layout = {barmode: 'group'};
  var CHART = d3.selectAll("#plot").node();
  Plotly.newPlot(CHART, data, layout);
  
}

})

