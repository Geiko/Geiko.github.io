'use strict';
$(document).ready(function () {
    (function () {


        $('#adjustPlateButton').click(function () {

            $('.menuStyle').css("visibility", "visible");

            //Set Plate Background
            $('#getvalLabel').click(function () {

                document.getElementById('getval').addEventListener('change', readURL, true);
                function readURL() {
                    var file = document.getElementById("getval").files[0];
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
                    }
                    if (file) {
                        reader.readAsDataURL(file);
                    }
                    else { }
                };
            });


            //Delete Plate Background
            $('#deleteImg').click(function () {
                $('#clock').css("background-image", "url('')");
            });

            //Chandge Plate Opacity
            $('#setSvgOpacity').val($('.svg-content').css('opacity'));
            $('#setSvgOpacity').change(function () {
                $('.svg-content').css("opacity", $('#setSvgOpacity').val());
            });

            //Set Plate Color
            var picker = new CP(document.querySelector('#colorPickerButton'));
            picker.set($('.svg-content').css('background-color'));
            picker.on("change", function (color) {
                $('.svg-content').css("background-color", '#' + color);
            });

            //close menu
            $(document).mouseup(function (e) {
                var container = $(".menuStyle");

                if (!container.is(e.target) // if the target of the click isn't the container
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                    $('.menuStyle').css("visibility", "hidden");
            });
        });

    })();
});