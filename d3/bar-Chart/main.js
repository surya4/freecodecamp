
var margin = {
  top: 20,
  right: 10,
  bottom: 20,
  left: 10
};

var width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
  .range([0, width]);

var y = d3.scale.linear()
  .range([height, 0]);

var url = 'data.json';

d3.json(url, function(err, dataset) {
  if (err) {
    console.log("D3 error" + err);
  }
  console.log(dataset.data[0][1]);
  var data = dataset.data;
  
  var graph = d3.select("chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  .data(dataset.data)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d * 5;
      return barHeight + "px";
    });

  d3.select(".notes")
    .append("text")
    .text(dataset.description);




});
