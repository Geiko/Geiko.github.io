'use strict';
$(document).ready(function () {
    (function () {

        var local = {
            titleArray: ['Convert a dummy to the SVG ',
                         'Переведи макет в векторную графику ',
                         'Переведи макет в векторну графіку '],
            justDrawArray: ['(just draw and get HTML code)', 
                        '(просто нарисуй и получи HTML код)', 
                        '(просто намалюй і отримай HTML код)'],
            tipsArray: ['Tips:', 'Советы:', 'Поради:'],
            DummyArray: ['Menu > Sheet > Upload Dummy ',
                         'Меню > Лист > Загрузить макет ',
                         'Меню > Лист > Завантажити макет '],
            backGroundArray: ['- to have dummy on working sheet background.',
                         '- на заднем плане рабочего листа разместить макет.',
                         '- на задньому плані робочого листа розмістити макет.'],
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
            $('#TitleSpan1').text(local.titleArray[+$('#language').find(":selected").val()]);
            $('#justDraw').text(local.justDrawArray[+$('#language').find(":selected").val()]);
            $('#tips').text(local.tipsArray[+$('#language').find(":selected").val()]);
            $('#uploadDummy').text(local.DummyArray[+$('#language').find(":selected").val()]);
            $('#backGround').text(local.backGroundArray[+$('#language').find(":selected").val()]);
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