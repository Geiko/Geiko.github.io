'use strict';
$(document).ready(function () {
    (function () {


        $('#adjustLineButton').click(function () {

            $('.menuCurveStyle').css("visibility", "visible");

            //Chandge Curve Max Width
            $('#setCurveMaxWidth').val($('#curveMaxWidthDefault').val());
            $('#setCurveMaxWidth').change(function () {
                $('#curveMaxWidthDefault').val($('#setCurveMaxWidth').val()).trigger('change');
            });

            //Chandge Curve Min Width
            $('#setCurveMinWidth').val($('#curveMinWidthDefault').val());
            $('#setCurveMinWidth').change(function () {
                $('#curveMinWidthDefault').val($('#setCurveMinWidth').val()).trigger('change');
            });
            
            //Chandge Curve Feather Angle
            $('#setCurveAngle').val($('#curveAngleDefault').val());
            $('#setCurveAngle').change(function () {
                $('#curveAngleDefault').val($('#setCurveAngle').val()).trigger('change');
            });
            
            //Chandge Curve Opacity
            $('#setCurveOpacity').val($('#curveOpacityDefault').val());
            $('#setCurveOpacity').change(function () {
                $('#curveOpacityDefault').val($('#setCurveOpacity').val()).trigger('change');
            });

            //Set Curve Color
            var picker = new CP(document.querySelector('#curveColorPickerButton'));
            picker.set($('#curveColorDefault').val());
            picker.on("change", function (color) {
                $('#curveColorDefault').val('#' + color).trigger('change');
            });

            //close Curve menu
            $(document).mouseup(function (e) {
                var container = $(".menuCurveStyle");

                if (!container.is(e.target) // if the target of the click isn't the container
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                    $('.menuCurveStyle').css("visibility", "hidden");
            });
        });

    })();
});