'use strict';
$(document).ready(function () {
    (function () {

        var feather = {
            width: $('#curveMaxWidthDefault').val(),
            thickness: $('#curveMinWidthDefault').val(),
            angle: $('#curveAngleDefault').val(),       // degree
            color: $('#curveColorDefault').val(),
            opacity: $('#curveOpacityDefault').val()
        };

        $('#curveMaxWidthDefault').change(function () {
            feather.width = $('#curveMaxWidthDefault').val();
            refreshSvg();
        });

        $('#curveMinWidthDefault').change(function () {
            feather.thickness = $('#curveMinWidthDefault').val();
            refreshSvg();
        });

        $('#curveAngleDefault').change(function () {
            feather.angle = $('#curveAngleDefault').val();
            refreshSvg();
        });

        $('#curveColorDefault').change(function () {
            var currentCurveColor = $('#curveColorDefault').val();
            feather.color = currentCurveColor;
            $('path').css('stroke', currentCurveColor);
            refreshSvg();
        });

        $('#curveOpacityDefault').change(function () {
            var currentCurveOpacity = $('#curveOpacityDefault').val();
            feather.opacity = currentCurveOpacity;
            $('path').css('opacity', currentCurveOpacity);
            refreshSvg();
        });

        //--------------------------------------------
        var dot = {
            radius: $('#dotsRadiusDefault').val(),
            color: $('#dotsColorDefault').val(),
            textColor: 'white',
            opacity: $('#dotsOpacityDefault').val()
        };

        $('#dotsRadiusDefault').change(function () {
            var currentDotsRadius = $('#dotsRadiusDefault').val();
            dot.radius = currentDotsRadius;
            $('circle').css('r', currentDotsRadius);
        });

        $('#dotsColorDefault').change(function () {
            var currentDotsColor = $('#dotsColorDefault').val();
            dot.color = currentDotsColor;
            $('circle').css('fill', currentDotsColor);
        });

        $('#dotsOpacityDefault').change(function () {
            var currentDotsOpacity = $('#dotsOpacityDefault').val();
            dot.opacity = currentDotsOpacity;
            $('circle').css('opacity', currentDotsOpacity);
            $('text').css('opacity', currentDotsOpacity);
        });

        //------------------------------------------------------------------------------------

        var Canvas = d3.select(".svg-content");


        var data = [];

        var drag = d3.behavior.drag()
            .origin(function (d) { return data; })
            .on("drag", dragged);



        Canvas.on('dblclick', function () {

            var lastDot = d3.mouse(this);
            data.push({ x: lastDot[0], y: lastDot[1] });
            refreshSvg();

        })



        Canvas.on("click", function (d) {

            if (d3.event.ctrlKey) {

                var deletingDot = d3.mouse(this);
                var i = 0;

                data.forEach(function (d) {

                    var distance = Math.pow(
                      (Math.pow(Math.abs(d.x - deletingDot[0]), 2) +
                        Math.pow(Math.abs(d.y - deletingDot[1]), 2)),
                      0.5);

                    if (distance <= dot.radius) {

                        data.splice(i, 1);
                        Canvas.selectAll("circle").remove();
                        refreshSvg();
                        return;
                    }

                    i++;
                });
            }
        });



        function createCircles(Canvas, data) {

            Canvas.selectAll('circle')
                  .data(data)
                  .enter()
                  .append('circle')
                  .text(function (d, i) { return i; })
                  .attr("cx", function (d) { return d.x; })
                  .attr("cy", function (d) { return d.y; })
                  .attr("r", dot.radius)
                    .style('opacity', dot.opacity)
                  .style("fill", dot.color);

            createText(Canvas, data);

        };



        function createText(Canvas, data) {

            Canvas.selectAll('text')
                  .data(data)
                  .enter()
                  .append('text')
                  .attr("x", function (d) { return d.x; })
                  .attr("y", function (d) { return d.y; })
                  .text(function (d, i) { return i; })
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "10px")
                    .style('opacity', dot.opacity)
                  .style("fill", dot.textColor);

        };



        //------------------------------------------------------------------------------------
        function refreshSvg() {

            Canvas.selectAll("path")
                  .remove();
            Canvas.selectAll("text")
                  .remove();

            createLines(Canvas, data);
            createCircles(Canvas, data);

            Canvas.selectAll('circle')
                  .call(drag);

            showCode(data);
        }
        //------------------------------------------------------------------------------------



        function dragged(d) {

            var tmpX = d3.mouse(this)[0];
            var tmpY = d3.mouse(this)[1];

            if (tmpX < 0) {
                tmpX = 0;
            };
            if (tmpY < 0) {
                tmpY = 0;
            };
            //console.log($('.svg-container').width() + '   ' + $('.svg-container').height());
            if (tmpX > 500) {
                tmpX = 500;
            };
            if (tmpY > 500 * 0.7) {
                tmpY = 500 * 0.7;
            };


            d3.select(this)
                  .attr("cx", tmpX)
                  .attr("cy", tmpY);

            var index = +d3.select(this)[0][0].innerHTML;
            data[index] = { x: tmpX, y: tmpY };

            refreshSvg();
        }



        // d3.json ( "./data/coordinates1.json", function ( error, json ) {  // ---------------------------------------------------------

        //   if ( error ) return console.warn ( error );  
        //   var data = scaleData ( json );
        //   var KContainer = createSvg ();
        //   createLines ( KContainer, data );
        // animate ( KContainer );
        // showDots ( KContainer, data );

        // });



        // function scaleData ( json ) {

        //   var data = json;
        //   var maxX=0, minX=100000, maxY=0, minY=100000;
        //   data.forEach(function(d) {
        //     if(+d.x > maxX) maxX = +d.x;
        //     if(+d.x < minX) minX = +d.x;
        //     if(+d.y > maxY) maxY = +d.y;
        //     if(+d.y < minY) minY = +d.y;
        //   });

        //   var comingPicture = {
        //       height: maxY - minY,
        //       width: maxX - minX
        //   }

        //   var pictureProportion = comingPicture.width / comingPicture.height ;
        //   picture.width = picture.height * pictureProportion;

        //   var scale = picture.height / comingPicture.height;

        //   data.forEach(function(d) {
        //     d.x = (+d.x - minX) * scale + feather.width;
        //     d.y = (+d.y - minY) * scale + feather.width;   
        //   });  

        //   return data;
        // }



        // function createSvg () {

        //   var KContainer = d3.select('.charAnimation')
        //           .append('svg')
        //           .attr('height', +picture.height + 2 * feather.width)
        //           .attr('width', +picture.width + 2 * feather.width)
        //           // .attr('class', 'pictureSvg')
        //           // .style('background', '#212121')
        //           .style('opacity', 1)
        //           // .style('border', '1px solid red');

        //   return KContainer;
        // }



        function createLines(KContainer, data) {

            var traceQuantity = Math.round(+feather.width / +feather.thickness) + 1;

            var xOffset = +feather.width * Math.cos(+feather.angle * Math.PI / 180);
            var yOffset = +feather.width * Math.sin(+feather.angle * Math.PI / -180);

            var trace = d3.svg.line()
                  .x(function (d) { return d.x; })
                  .y(function (d) { return d.y; })
                  .interpolate("basis");

            for (var j = 0; j < traceQuantity; j++) {

                var tempData = [];

                for (var i = 0; i < data.length; i++) {
                    tempData[i] = {
                        x: +data[i].x + j * xOffset / traceQuantity,
                        y: +data[i].y + j * yOffset / traceQuantity
                    };
                }

                var traceGroup = KContainer
                          //.append('g')
                          .append('path')
                          .attr("d", trace(tempData))   // binding data to lines
                          .attr('fill', 'none')
                          .style("stroke", feather.color)
                          .style("stroke-linecap", "butt")
                          .style('opacity', feather.opacity)
                          .style("stroke-width", +feather.thickness);
            }
        }



        //function animate(KContainer) {

        //    var totalLength = KContainer
        //              .select('g')
        //              .selectAll('path')
        //              .node()
        //              .getTotalLength();

        //(function repeat() {

        //    KContainer
        //        .selectAll('path')
        //        .attr("stroke-dasharray", totalLength + " " + totalLength)
        //        .attr("stroke-dashoffset", totalLength)
        //        .transition()
        //            .duration(+picture.duration)
        //            .ease("linear")
        //            .attr("stroke-dashoffset", 0)
        //        .transition()
        //            .duration(2000)
        //            .style("stroke", "#8F2F34")
        //        .transition()
        //            .duration(+picture.duration / 2)
        //            .style("stroke", "black")
        //        .transition()
        //            .duration(1200)
        //            .style("stroke", "#212121")
        //        .transition()
        //            .duration(2000)
        //        .transition()
        //            .duration(0)
        //            .style("stroke", "#8F2F34")
        //                .each("end", repeat);
        //})();

        //};



        function showDots(KContainer, data) {

            KContainer.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                      .attr('cx', function (d) { return d.x })
                      .attr('cy', function (d) { return d.y })
                      .attr('r', 2)
                      .style('fill', 'red');

        };



        var showCode = function (data) {

            if (data.length > 0) {

                var svgCode = $('svg')[0].outerHTML;

                while (true) {
                    var t1 = svgCode.indexOf('<text');
                    if (t1 == -1) {
                        break;
                    }
                    var t2 = svgCode.indexOf('</text>') + 7;
                    svgCode = svgCode.substr(0, t1) + svgCode.substr(t2);
                }

                while (true) {
                    var c1 = svgCode.indexOf('<circle');
                    if (c1 == -1) {
                        break;
                    }
                    var c2 = svgCode.indexOf('</circle>') + 9;
                    svgCode = svgCode.substr(0, c1) + svgCode.substr(c2);
                }

                // var genSvgCode = $('#generatedSvgCode').text();
                var genSvgCode = 
`<html>
<head>
    <meta charset="utf-8" /> 
    <title>The generated svg</title>
</head>
<body>                              
    <div class="svg-container"></div>    
</body>
</html>`;

                var index = genSvgCode.indexOf('<div class="svg-container">') + '<div class="svg-container">'.length;
                genSvgCode = genSvgCode.slice(0, index) + svgCode + genSvgCode.slice(index);

                $('#htmlPlace').html(genSvgCode);

                //-------------------------------------------------------------------------------------

                var dataToShow = '\n\t\t\t\t\t[';

                for (var i = 0; i < data.length; i++) {
                    if (i != 0) { dataToShow += '\t\t\t\t\t '; }
                    dataToShow += '{ "x": "'
                            + (data[i].x).toFixed(1) + '", "y": "'
                            + (data[i].y).toFixed(1);
                    i == data.length - 1 ? dataToShow += '"}]' : dataToShow += '"},\n';
                }

                // var codeToShow = $('#generatedCode').text();
                var codeToShow =
`<html>
<head>
  <meta charset="utf-8" /> 
  <title>The generated JSON and d3.js</title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
  <script type="application/javascript" src="http://d3js.org/d3.v3.min.js"></script>
</head>
<body >
    <div class="svg-content"></div>
    <script>
            
        'use strict';
        $(document).ready(function () {
            (function () {

                var data = ;

                var feather = {
                    width: ,
                    thickness: ,
                    angle: ,       // degree
                    color: '',
                    opacity: 
                };

                var Canvas = d3.select('.svg-content')
                            .append('svg')
                            .attr('height', 500)
                            .attr('width', 500)
                            .style('opacity', 1);

                function createLines(KContainer, data) {

                    var traceQuantity = Math.round(+feather.width / +feather.thickness) + 1;

                    var xOffset = +feather.width * Math.cos(+feather.angle * Math.PI / 180);
                    var yOffset = +feather.width * Math.sin(+feather.angle * Math.PI / -180);

                    var trace = d3.svg.line()
                          .x(function (d) { return d.x; })
                          .y(function (d) { return d.y; })
                          .interpolate("basis");

                    for (var j = 0; j < traceQuantity; j++) {

                        var tempData = [];

                        for (var i = 0; i < data.length; i++) {
                            tempData[i] = {
                                x: +data[i].x + j * xOffset / traceQuantity,
                                y: +data[i].y + j * yOffset / traceQuantity
                            };
                        };

                        var traceGroup = KContainer
                                  //.append('g')
                                  .append('path')
                                  .attr("d", trace(tempData))   // binding data to lines
                                  .attr('fill', 'none')
                                  .style("stroke", feather.color)
                                  .style("stroke-linecap", "round")
                                  .style('opacity', feather.opacity)
                                  .style("stroke-width", +feather.thickness);
                    }
                };

                createLines(Canvas, data);

            })();
        });

    </script>    
</body>
</html>
                `;

                var index = codeToShow.indexOf('var data = ') + 'var data = '.length;
                codeToShow = codeToShow.slice(0, index) + dataToShow + codeToShow.slice(index);

                index = codeToShow.indexOf('width: ') + 'width: '.length;
                codeToShow = codeToShow.slice(0, index) + feather.width + codeToShow.slice(index);

                index = codeToShow.indexOf('thickness: ') + 'thickness: '.length;
                codeToShow = codeToShow.slice(0, index) + feather.thickness + codeToShow.slice(index);

                index = codeToShow.indexOf('angle: ') + 'angle: '.length;
                codeToShow = codeToShow.slice(0, index) + feather.angle + codeToShow.slice(index);

                index = codeToShow.indexOf('color: \'') + 'color: \''.length;
                codeToShow = codeToShow.slice(0, index) + feather.color + codeToShow.slice(index);

                index = codeToShow.indexOf('opacity: ') + 'opacity: '.length;
                codeToShow = codeToShow.slice(0, index) + feather.opacity + codeToShow.slice(index);

                $('#dataPlace').text(codeToShow);
            }
        };


    })();
});