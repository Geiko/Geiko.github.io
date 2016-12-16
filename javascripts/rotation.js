function textrotate(transform) {
    return function (node) {
        node.each(function() {
            var t = d3.transform(d3.functor(transform).apply(this, arguments));
            node.attr("alignment-baseline", "central");
            node.style("dominant-baseline", "central");
            if (t.rotate <= 90 && t.rotate >= -90) {
                node.attr("text-anchor", "begin");
                node.attr("transform", t.toString());
            } else {
                node.attr("text-anchor", "end");
                t.rotate = (t.rotate > 0 ? -1 : 1) * (180 - Math.abs(t.rotate));
                node.attr("transform", t.toString());
            }
        });
    }
}
var w = 100, h = 100;
var n = d3.select(".rotation").insert("svg")
  .attr("width", w)
  .attr("height", h)
  .style("fill", '#33FF00')
  .insert("g")
  .attr("transform","translate(" + w/2 + "," + w/2 + ")");
n.insert("circle")
  .attr("r", 3)
  .attr("cx", 0)
  .attr("cy", 0)
n.insert("text")
  .style('font-size', '9px')
  .text("blah-blah");

function f(rot) {
  n.select("text").call(textrotate("rotate("+rot+")translate(5,0)"));
  setTimeout(function() { f(rot+0.8) }, 25);
}
f(0);