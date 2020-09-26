//1.  extract the data from csv
//1.a load csv data
//1.a Create function that extract unique values

var table1 = "../../01 Resources/Data/Table1_v1.csv" 

d3.csv(table1).then(function(d) {
  console.log(d)
  

  function init() {
    var Province = "National"
    var Sex = "Both"

    var trace1Y = [] 
    var trace2Y = []
    
    // push data to trace 1 or 2 only if it matches the condition
    d.forEach(function(data) {

      // console.log(data.Percent_Population)
      if ( data.province == Province && data.sex == Sex ){
        trace1Y.push(data.race_percent_arrested)
        trace2Y.push(data.race_percent_population)

        console.log(trace1Y)
      }

    });

    var trace1 = {
      x: ['Aboriginal', 'Black', 'Other Minority','White'],
      y: trace1Y,
      name: 'Sum of Race % Arrested',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['Aboriginal', 'Black', 'Other Minority','White'],
      y: trace2Y,
      name: 'Sum of Race % Population',
      type: 'bar'
    };
    
    var data = [trace1, trace2];

    var layout = {barmode: 'group'};

    var CHART = d3.selectAll("#plot").node();
  
    Plotly.newPlot(CHART, data, layout);

    
  }
  init()
})
// console.log(data)

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

//

