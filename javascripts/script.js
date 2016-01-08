

var margin = {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40
    }, width = 50 - margin.left - margin.right,
      height = 50 - margin.top - margin.bottom;

    var y = d3.scale.ordinal().domain(d3.range(1)).rangePoints([0, height]);

    var svg = d3.select("#header_wrap")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.selectAll("circle")
      .data(y.domain())
      .enter()
      .append("circle")
      .attr("stroke-width", 0)
      .attr("r", 0)
      .attr("cx", width / 2)
      .attr("cy", y)
      .each(pulse);

    function pulse() {
      var circle = svg.select("circle");
      (function repeat() {
        circle = circle.transition()
          .duration(12)
          .attr("stroke-width", 2)
          .attr("r", 0)
          .transition()
          .duration(700)
          .attr('stroke-width', 0)
          .attr("r", 25)
          .ease('sine')
          .each("end", repeat);
      })();
    }

