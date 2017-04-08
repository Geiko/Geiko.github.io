'use strict';
$(document).ready(function () {
    (function () {

        var local = {
            titleArray: ['Convert a dummy to HTML:',
                         'Переведи макет в HTML',
                         'Переведи макет в HTML'],
            // orArray: ['or', 'или', 'або'],
            tipsArray: ['Tips:', 'Советы:', 'Поради:'],



            DummyArray: ['Menu > Sheet > Upload Dummy - to have dummy on working sheet background. ',
                         'Меню > Лист > Загрузить макет - на заднем плане рабочего листа разместить макет.',
                         'Меню > Лист > Завантажити макет - на задньому плані робочого листа розмістити макет.'],
            dblClickArray: [' - create new dot. ', ' - создать новую точку. ', ' - створити нову точку. '],
            deleteDotArray: [' - delete a dot. ', ' - удалить точку. ', ' - знищити точку. '],
            dragDotArray: [' a dot. ', ' точку. ', ' точку. '],
            maxWidthArray: ['Menu > Tape > Max Width = 0',
                            'Меню > Лист > Max Ширина = 0',
                            'Меню > Лист > Max Ширина = 0'],
            maxWidthTextArray: [' in order to get one Curve instead of Bunch of Curves.',
                                ' для получения одной линии вместо пучка линий.',
                                ' для отримання однієї лінії замість пучка ліній.'],
            sheetArray: ['Sheet', 'Лист', 'Лист'],
            uploadDummyArray: ['Upload Dummy', 'Загрузить макет', 'Завантажити макет'],
            deleteDummyArray: ['Delete Dummy', 'Удалить макет', 'Знищити макет'],
            opacityArray: ['Opacity: ', 'Непрозрачность: ', 'Непрозорість: '],
            colorArray: ['Color: ', 'Цвет', 'Колір'],
            dotsArray: ['Dots', 'Точки', 'Точки'],
            radiusArray: ['Radius:', 'Радиус:', 'Радіус:'],
            curveArray: ['Tape', 'Лента', 'Стрічка'],
            featherAngleArray: ['Feather Angle, degree: ', 'Угол наклона пера, град: ', 'Кут нахилу пера, град: '],
            widthArray: ['Width: ', 'Ширина: ', 'Ширина: '],
            aboutArray: ['About', 'Про', 'Про'],
            usageArray: ['Usage example', 'Пример использования', 'Приклад використання']
        };
        //-----------------------------------------------------------------------------------------------

        var setLanguage = function () {
            $('#TitleSpan').text(local.titleArray[+$('#language').find(":selected").val()]);
            // $('#orSpan').text(local.orArray[+$('#language').find(":selected").val()]);



            $('#tips').text(local.tipsArray[+$('#language').find(":selected").val()]);

            $('#uploadDummy').text(local.DummyArray[+$('#language').find(":selected").val()]);
            $('#dblClick').text(local.dblClickArray[+$('#language').find(":selected").val()]);
            $('#deleteDot').text(local.deleteDotArray[+$('#language').find(":selected").val()]);
            $('#dragDot').text(local.dragDotArray[+$('#language').find(":selected").val()]);
            $('#menuTape').text(local.maxWidthArray[+$('#language').find(":selected").val()]);
            $('#oneCurve').text(local.maxWidthTextArray[+$('#language').find(":selected").val()]);
            $('#adjustPlateButton').val(local.sheetArray[+$('#language').find(":selected").val()]);
            $('#getvalLabel').html(local.uploadDummyArray[+$('#language').find(":selected").val()]);
            $('#deleteImg').html(local.deleteDummyArray[+$('#language').find(":selected").val()]);
            $('.opacityMenu').text(local.opacityArray[+$('#language').find(":selected").val()]);
            $('.colorPic').val(local.colorArray[+$('#language').find(":selected").val()]);
            $('#adjustDotsButton').val(local.dotsArray[+$('#language').find(":selected").val()]);
            $('.dotsRadiusMenu').text(local.radiusArray[+$('#language').find(":selected").val()]);
            $('#adjustLineButton').val(local.curveArray[+$('#language').find(":selected").val()]);
            $('.curveAnglehMenu').text(local.featherAngleArray[+$('#language').find(":selected").val()]);
            $('.curveWidthMenu').text(local.widthArray[+$('#language').find(":selected").val()]);
            $('.aboutRef').text(local.aboutArray[+$('#language').find(":selected").val()]);
            $('.exampleRef').text(local.usageArray[+$('#language').find(":selected").val()]);
        };
        //-----------------------------------------------------------------------------------------------

        setLanguage();

        $('#language').change(function () {
            setLanguage();
        });


    })();
});