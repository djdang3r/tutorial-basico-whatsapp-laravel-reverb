//  **------editor**
$('#editor').trumbowyg({
    btns: [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ],
});

$('#editor1').trumbowyg({
    btns: [
        ['strong', 'em'],
        ['justifyLeft', 'justifyCenter'],
        ['insertImage', 'link'],
    ],
});


"use strict";
$(function() {
    var tooltip_init = {
        init: function () {
            $("button").tooltip();
        }
    };
    tooltip_init.init()
});