var picture = {

		height:'700',
	    width:'0',
	    duration:'9000'

	};	

picture['width'] = picture['height'] * 1.88;





var svg = d3.select('.letterK')
				.append('svg')
				.attr('height', +picture.height)
				.attr('width', +picture.width)
        // .style('background', '#99CCFF');
				.style('background', 'black')
				.style('border', '1px solid orange');

var line = d3.svg.line()
				.x(function(d){return d.x;})
				.y(function(d){return d.y;})
    			.interpolate("basis");





var feather = {

		width:'25',
		thickness:'3',
		angle: '33' // degree

	};

feather.width = feather.width / 700 * +picture.height;
feather.thickness = Math.round( feather.thickness / 700 * +picture.height) + .1;
// feather.thickness = 1;

var xOffset = +feather.width * Math.cos ( +feather.angle * Math.PI /180 );
var yOffset = +feather.width * Math.sin ( +feather.angle * Math.PI /180 * (-1) );





var data;
// d3.csv("./data/coordinates1.csv", function(error, csv) {

//   if (error) return console.warn(error);
//   data = csv;

d3.json("./data/coordinates1.json", function(error, json) {

  if (error) return console.warn(error);
  data = json;

  data.forEach(function(d) {

    d.x = +d.x / 700 * +picture.height;
    d.y = +d.y / 700 * +picture.height;

  });
  console.log(data);


  visualize(data);

  // visualize(data1,  function() {
  //           visualize(data2);
  //         });

  // var dot = svg.selectAll('circle')
  //        .data(data)
  //        .enter()
  //        .append('circle') 
  //              .attr('cx', function(d){return d.x})
  //              .attr('cy', function(d){return d.y})
  //              .attr('r', 3)
  //              .style('fill', 'red');

});





function visualize(data){
// function visualize(data, callback){

  var path = [];
  var lineQuantity = (Math.round( +feather.width / +feather.thickness) + 1) * 2;
  var tempData = [];

  for(j=0; j<lineQuantity; j++){

  	for(i=0; i<data.length; i++){

  		tempData[i] = { 
  			x:+data[i].x + j * xOffset / lineQuantity, 
  			y:+data[i].y + j * yOffset / lineQuantity 
  		};
  	}

  	path[j] = svg.append('g').append('path')
  		      .attr("d", line(tempData))
  		      .attr('fill', 'none')
            .style("stroke", "#8F2F34")
  		      .style("stroke-linecap", "round")
  		      .style("stroke-width", +feather.thickness);
  }



  var	totalLength = path[0].node().getTotalLength();

  d3.selectAll('path')
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(+picture.duration)
          .ease("linear")
          .attr("stroke-dashoffset", 0);

  // callback();

};











// var data = [
//     {"x":"200","y":"100"},
//     {"x":"400","y": "60"},
//     {"x":"580","y":"150"},
//     {"x":"590","y":"325"},
//     {"x":"550","y":"450"},
//     {"x":"550","y":"450"},
//     {"x":"550","y":"450"},
// // ];

// // var data2 = [
//     {"x":"575","y":"435"},
//     {"x":"575","y":"435"},
//     {"x":"575","y":"435"},

//     {"x":"590","y":"400"},
//     {"x":"620","y":"350"},
//     {"x":"680","y":"290"},
//     {"x":"730","y":"230"},
//     {"x":"708","y":"200"},

//     {"x":"708","y":"180"},
//     {"x":"710","y":"170"},

//     {"x":"715","y":"165"},
//     {"x":"715","y":"165"},
//     {"x":"715","y":"165"},
// // ];

// // var data3 = [
//     {"x":"715","y":"165"},
//     {"x":"710","y":"170"},
//     {"x":"708","y":"180"},
//     {"x":"713","y":"200"},
//     {"x":"723","y":"230"},
//     {"x":"740","y":"280"},
//     {"x":"715","y":"330"},

//     {"x":"620","y":"320"},
//     {"x":"520","y":"380"},
//     {"x":"520","y":"380"},
// // ];

// // var data4 = [
//     {"x":"520","y":"380"},
//     {"x":"640","y":"320"},
//     {"x":"720","y":"400"},
//     {"x":"800","y":"500"},
//     {"x":"880","y":"570"},
//     {"x":"970","y":"590"},
//     {"x":"1085","y":"555"}
// ];

// visualize(data);


  