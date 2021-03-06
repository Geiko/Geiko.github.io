

var margin = {
      top: 0,
      right: 10,
      bottom: 10,
      left: 10
    }, 
    width = 70 - margin.left - margin.right,
    height = 70 - margin.top - margin.bottom;

    var y = d3.scale.ordinal().domain(d3.range(1)).rangePoints([0, height]);

    var svg = d3.select("#pulse")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
    svg.selectAll("ellipse")
      .data(y.domain())
      .enter()
      .append("ellipse")
      .attr("stroke-width", 2)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("cx", width / 2)
      .attr("cy", y)
      .each(pulse);

    function pulse() {
      var ellipse = svg.select("ellipse");
      (function repeat() {
        ellipse = ellipse.transition()
          .duration(2000)
          .attr("stroke-width", 2)
          .attr("rx", 0)
          .attr("ry", 0)
          .transition()
          .duration(200)
          .attr('stroke-width', 0)
          .attr("rx", 30)
          .attr("ry", 30)
          .ease('sine')
          .each("end", repeat);
      })();
    }

