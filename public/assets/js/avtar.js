$(function() {
    var tooltip_init = {
        init: function () {
            $("button").tooltip();
            $("a").tooltip();
            $("input").tooltip();
            $("li").tooltip();
        }
    };
    tooltip_init.init()
});