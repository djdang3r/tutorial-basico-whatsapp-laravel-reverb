//  **------tab js**
$(document).on('click','.tab-link',function () {
	var tabID = $(this).attr('data-tab');

	$(this).addClass('active').siblings().removeClass('active');

	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

//  **------toggle js**

//  document.querySelector('.toggle-btn').addEventListener('click', () => {
// 	var chatcontainer = document.querySelector(".chat-div");
// 	chatcontainer.classList.toggle("chattoggle");
// });

// document.querySelector('.close-toggle').addEventListener('click', () => {
// 	var chatcontainer = document.querySelector(".chat-div");
// 	chatcontainer.classList.remove("chattoggle");
// });

// "use strict";
$(function() {
    var tooltip_init = {
        init: function () {
            $("a").tooltip();
        }
    };
    tooltip_init.init()
});
