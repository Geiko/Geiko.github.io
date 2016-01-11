var height = 100,
    width = 650,
    margin = 30,
    dotQuantity = 100;

xAxisLength = width - 2 * margin;
yAxisLength = height - 2 * margin;

var svg = d3.select('.chart')
				.append('svg')
				.attr('class', 'axis')
				.attr('height', height)
				.attr('width', width)
				// .style('border', '1px solid orange');

// interpolate data on the X axis
var scaleX = d3.scale.linear()
				.domain([0, 100])
				.range([0, xAxisLength])

	// var scaleX = d3.time.scale()
	// 			.domain([new Date(2015, 0, 1), new Date()])
	// 			.range([0, xAxisLength]);

// interpolate data on the Y axis
var scaleY = d3.scale.linear()
				.domain([100,0])
				.range([0, yAxisLength]);

// create X axis
var xAxis = d3.svg.axis()
				.scale(scaleX)
				.orient('bottom');
				// .ticks(6);
				// .tickFormat(d3.time.format('%b %d,%Y'));

// create Y axis
var yAxis = d3.svg.axis()
				.scale(scaleY)
				.orient('left')
				.ticks(5);

// draw Х axis
svg.append('g')
				.attr('class', 'x-axis')
				.attr('transform', 
					'translate('+margin+','+(height - margin)+')')
				.call(xAxis);

// draw Y axis
svg.append('g')
				.attr('class', 'y-axis')
				.attr('transform',
					'translate('+margin+','+margin+')')
				.call(yAxis);

// draw vertical grid lines   
d3.selectAll('g.x-axis g.tick')
				.append('line')
				.classed('grid-line', true)
				.attr('x1', 0)
				.attr('y1', 0)
				.attr('x2', 0)
				.attr('y2', - (yAxisLength));

// draw horizontal grid lines
d3.selectAll('g.y-axis g.tick')
				.append('line')
				.classed('grid-line', true)
				.attr('x1', 0)
				.attr('y1', 0)
				.attr('x2', xAxisLength)
				.attr('y2', 0);


	// svg.append("text")
	//     .attr("x", (width / 2))
	//     .attr("y", margin - 10 )
	//     .attr("text-anchor", "middle")
	//     .style("font-size", "22px")
	//     .text("Live Chart");
	 
	svg.select('g.y-axis')
		.append("text")
	    .attr("x", 0)
	    .attr("y", - 11)
	    .attr("text-anchor", "middle")
	    .style("font-size", "11px")
	    .style("fill", "red")
	    .text("Y");
 
	svg.select('g.x-axis')
		.append("text")
	    .attr("x", xAxisLength + 11)
	    .attr("y", 0)
	    .attr("text-anchor", "middle")
	    .style("font-size", "11px")
	    .style("fill", "red")
	    .text("Х");


// create line
var line = d3.svg.line()
				// .x(function(d){return d.x;})
				.x(function(d,i){return scaleX(i)+margin;})
				.y(function(d){return scaleY(d)+margin;})
    		.interpolate("cardinal");
    		// .interpolate("step-after");

var data,
	path,
	totalLength,
	counter = 1;

(function repeat() {

	counter++;
	if(counter%2 === 0){
		d3.selectAll("path").remove();
	};

	data = d3.range(dotQuantity+1).map(function(){return Math.random()*100});
    // console.log(data);

	// add path
	path = svg.append('g').append("path")
		      .attr("d", line(data))
		      .style("stroke", "yellow")
		      .style("stroke-width", "2");
	if(counter%2 === 0){
		d3.select("path")
			  .style('stroke', 'blue');
	};

	totalLength = path.node().getTotalLength();

	path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(7000)
        .ease("linear")
        .attr("stroke-dashoffset", 0)
          	.each("end", repeat);
})();