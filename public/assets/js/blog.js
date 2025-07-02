// Image to background js

(function ($) {
  "use strict";
  $(".bg-img").parent().addClass('bg-size');
  jQuery('.bg-img').each(function () {

    var el = $(this),
        src = el.attr('src'),
        parent = el.parent();

    parent.css({
      'background-image': 'url(' + src + ')',
      'background-size': 'cover',
      'background-position': 'center top',
      'display': 'block'
    });

    el.hide();
  });

})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogCard = this.closest('.col-md-6');
            if (blogCard) {
                blogCard.remove();
            }
        });
    });
});

// Glightbox js
GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh",
});

var lightboxDescription = GLightbox({
    selector: '.descriptionbox'
});

// var lightboxVideo = GLightbox({
//     selector: '.glightboxvideo'
// });
//
// var lightboxVideo = GLightbox({
//     selector: '.gbox'
// });