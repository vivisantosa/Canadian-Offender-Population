

//1.  extract the data from csv
//1.a load csv data
var table4 = "static/data/table4.json" 
// var table4 = "table4.csv" 


// Important! The HTML is edited to have selDat1 and selDat2
// Selecting elements on the HTML
var selDat3 = d3.select("#selDataset3")
var selDat4 = d3.select("#selDataset4")

var provinceNames = ["National","BC","AB","SK","MB","ON","QC","NB","NL","PE","NS","NW","YU","NU"] 
var statusList = ["In Custody", "Community", "Both"]
var Year = ['2013', '2014', '2015', '2016', '2017', '2018' ]



// Create dropdown
provinceNames.forEach( d=> {
  selDat3.append("option").text(d)
  } )

statusList.forEach( d=> {
  selDat4.append("option").text(d)
  } )


// Set the province, status and Race as global variable. This way, we just have to change province and sex
var Province = "National"
var Status= "Both"

// Load data into
d3.json(table4,function(d) {
  console.log("TABLE 2",d)
  
  // Initialize the function
  function init() {

    var trace1Y = [] 
    var trace2Y = []
    var trace3Y = []
    var trace4Y = []
    
    // push data to trace 1 or 2 only if it matches the condition
    d.forEach(function(data) {

      // console.log(data.Percent_Population)
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Black" ){
        trace1Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Aboriginal" ){
        trace2Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "White" ){
        trace3Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Other Minority" ){
        trace4Y.push(data.avg_length)
        // console.log(trace1Y)
      }
    });

    // set up trace to prepare data for one of the table
    var trace1 = {
      x: Year,
      y: trace1Y,
      name: 'Black',
      type: 'scatter',
      marker:{
        color: '#FC9D9A'}
    };
    
    // set up trace to prepare data for one of the table
    var trace2 = {
      x: Year,
      y: trace2Y,
      name: 'Aboriginal',
      type: 'scatter',
      marker:{
        color: '#FE4365'}
    };
    // set up trace to prepare data for one of the table
    var trace3 = {
      x: Year,
      y: trace3Y,
      name: 'White',
      type: 'scatter',
      marker:{
        color: '#83AF9B'}
    };
    // set up trace to prepare data for one of the table
    var trace4 = {
      x: Year,
      y: trace4Y,
      name: 'Other Minority',
      type: 'scatter',
      marker:{
        color: '#C8C8A9'}
    };
    
    // draw the plots
    var data = [trace1, trace2, trace3, trace4];
    var layout = {showlegend: true, yaxis:{title:"Length of Sentence (Days)"}};
    var CHART = d3.selectAll("#plot2").node();
    Plotly.newPlot(CHART, data, layout);

    


};
init()
// TO DO! On change, run this program
  // d3.selectAll("body").on("change", updatePlotly);
  // d3.selectAll("body").on("change", updatePlotly);
// Call the initialization function

d3.select("#selDataset3").on("change", updateProvince);
d3.select("#selDataset4").on("change", updateStatus);
  
// Create function to capture Sex selection
  function updateStatus() {
    var dropdownMenu2 = d3.select("#selDataset4");
    var dataset2 = dropdownMenu2.node().value;
    var Status = dataset2
    console.log(Status)
    
    var trace1Y = [] 
    var trace2Y = []
    var trace3Y = []
    var trace4Y = []
    
    // push data to trace 1 or 2 only if it matches the condition
    d.forEach(function(data) {

      // console.log(data.Percent_Population)
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Black" ){
        trace1Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Aboriginal" ){
        trace2Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "White" ){
        trace3Y.push(data.avg_length)
      }
      if ( data.province == Province && data.in_custody_community == Status && data.race == "Other Minority" ){
        trace4Y.push(data.avg_length)
        // console.log(trace1Y)
      }

    });

    // set up trace to prepare data for one of the table
    var trace1 = {
      x: Year,
      y: trace1Y,
      name: 'Black',
      type: 'scatter',
      marker:{
        color: '#FC9D9A'}
    };
    
    // set up trace to prepare data for one of the table
    var trace2 = {
      x: Year,
      y: trace2Y,
      name: 'Aboriginal',
      type: 'scatter',
      marker:{
        color: '#FE4365'}
    };
    // set up trace to prepare data for one of the table
    var trace3 = {
      x: Year,
      y: trace3Y,
      name: 'White',
      type: 'scatter',
      marker:{
        color: '#83AF9B'}
    };
    // set up trace to prepare data for one of the table
    var trace4 = {
      x: Year,
      y: trace4Y,
      name: 'Other Minority',
      type: 'scatter',
      marker:{
        color: '#C8C8A9'}
    };
    
    // draw the plots
    var data = [trace1, trace2, trace3, trace4];
    var layout = {showlegend: true, yaxis:{title:"Length of Sentence (Days)"}};
    var CHART = d3.selectAll("#plot2").node();
    
    Plotly.newPlot(CHART, data, layout);
    
  }



// Create function to capture Province selection, then call init()
function updateProvince() {
  var dropdownMenu1 = d3.select("#selDataset3");
  var dataset = dropdownMenu1.node().value;
  var Province = dataset
  console.log(Province)
  
  var trace1Y = [] 
  var trace2Y = []
  var trace3Y = []
  var trace4Y = []
  
  // push data to trace 1 or 2 only if it matches the condition
  d.forEach(function(data) {

    // console.log(data.Percent_Population)
    if ( data.province == Province && data.in_custody_community == Status && data.race == "Black" ){
      trace1Y.push(data.avg_length)
    }
    if ( data.province == Province && data.in_custody_community == Status && data.race == "Aboriginal" ){
      trace2Y.push(data.avg_length)
    }
    if ( data.province == Province && data.in_custody_community == Status && data.race == "White" ){
      trace3Y.push(data.avg_length)
    }
    if ( data.province == Province && data.in_custody_community == Status && data.race == "Other Minority" ){
      trace4Y.push(data.avg_length)
      // console.log(trace1Y)
    }

  });

  // set up trace to prepare data for one of the table
  var trace1 = {
    x: Year,
    y: trace1Y,
    name: 'Black',
    type: 'scatter',
    marker:{
      color: '#FC9D9A'}
  };
  
  // set up trace to prepare data for one of the table
  var trace2 = {
    x: Year,
    y: trace2Y,
    name: 'Aboriginal',
    type: 'scatter',
    marker:{
      color: '#FE4365'}
  };
  //  // set up trace to prepare data for one of the table
  var trace3 = {
    x: Year,
    y: trace3Y,
    name: 'White',
    type: 'scatter',
    marker:{
      color: '#83AF9B'}
  };
  //  // set up trace to prepare data for one of the table
  var trace4 = {
    x: Year,
    y: trace4Y,
    name: 'Other Minority',
    type: 'scatter',
    marker:{
      color: '#C8C8A9'}
  };
  
  // draw the plots
  var data = [trace1, trace2, trace3, trace4];
  var layout = {showlegend: true, yaxis:{title:"Length of Sentence (Days)"}};
  var CHART = d3.selectAll("#plot2").node();
  Plotly.newPlot(CHART, data, layout);
  
}

})



