var picture = {

		height:'300',
	    width:'0',
	    duration:'9000'

	};	

picture['width'] = picture['height'] * 1.88;





var KContainer = d3.select('.charK')
				.append('svg')
				.attr('height', +picture.height)
				.attr('width', +picture.width)
				.style('background', '#212121');
				// .style('border', '1px solid orange');

var trace = d3.svg.line()
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

var xOffset = +feather.width * Math.cos ( +feather.angle * Math.PI /180 );
var yOffset = +feather.width * Math.sin ( +feather.angle * Math.PI /180 * (-1) );





var data;

d3.json("./data/coordinates1.json", function(error, json) {

  if (error) return console.warn(error);
  data = json;

  data.forEach(function(d) {

    d.x = +d.x / 700 * +picture.height;
    d.y = +d.y / 700 * +picture.height;

  });
  // console.log(data);


  visualize(data);

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

  var tracePath = [];
  var traceQuantity = (Math.round( +feather.width / +feather.thickness) + 1) * 2;
  var tempData = [];

  for(j=0; j<traceQuantity; j++){

  	for(i=0; i<data.length; i++){

  		tempData[i] = { 
  			x:+data[i].x + j * xOffset / traceQuantity, 
  			y:+data[i].y + j * yOffset / traceQuantity 
  		};
  	}


  	traceGroup = KContainer.append('g').append('path')
  		      .attr("d", trace(tempData))
  		      .attr('fill', 'none')
            .style("stroke", "#8F2F34")
  		      .style("stroke-linecap", "round")
  		      .style("stroke-width", +feather.thickness);
  }


  var	totalLength = traceGroup.node().getTotalLength();

  KContainer
        .selectAll('path')
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(+picture.duration)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
};