//  scroll js
var myElement = document.getElementById('vertical_scroll');
new SimpleBar(myElement, { autoHide: true });

var myElement = document.getElementById('vertical_scroll_content');
new SimpleBar(myElement, { autoHide: false });

var myElement = document.getElementById('horizontal_scroll');
new SimpleBar(myElement, { autoHide: false });

var myElement = document.getElementById('both_scroll');
new SimpleBar(myElement, { autoHide: false });
    
