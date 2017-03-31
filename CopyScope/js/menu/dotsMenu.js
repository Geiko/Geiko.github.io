'use strict';
$(document).ready(function () {
    (function () {


        $('#adjustDotsButton').click(function () {

            $('.menuDotStyle').css("visibility", "visible");

            //Chandge Dots Radius
            $('#setDotsRadius').val($('#dotsRadiusDefault').val());
            $('#setDotsRadius').change(function () {
                $('#dotsRadiusDefault').val($('#setDotsRadius').val()).trigger('change');
            });

            //Chandge Dots Opacity
            $('#setDotsOpacity').val($('#dotsOpacityDefault').val());
            $('#setDotsOpacity').change(function () {
                $('#dotsOpacityDefault').val($('#setDotsOpacity').val()).trigger('change');
            });

            //Set Dots Color
            var picker = new CP(document.querySelector('#dotsColorPickerButton'));
            picker.set($('#dotsColorDefault').val());
            picker.on("change", function (color) {
                $('#dotsColorDefault').val('#' + color).trigger('change');
            });
            
            //close Dots menu
            $(document).mouseup(function (e) {
                var container = $(".menuDotStyle");

                if (!container.is(e.target) // if the target of the click isn't the container
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                    $('.menuDotStyle').css("visibility", "hidden");
            });
        });

    })();
});