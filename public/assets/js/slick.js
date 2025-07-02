// 1 multiple-items
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

// 2 center-mode
$('.center-mode').slick({
  centerMode: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

// 3 responsive
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
  ]
});

//  4 variable-width
$('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

// 5 add-remove
var slideIndex = 0;
$('.add-remove').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

$('.js-add-slide').on('click', function () {
  slideIndex++;
  $('.add-remove').slick('slickAdd', '<div class="p-2"><img src="../assets/images/slick/12.jpg" alt="" class="img-fluid rounded"></div>');
});

$('.js-remove-slide').on('click', function () {
  console.log("tets");
  $('.add-remove').slick('slickRemove', slideIndex - 1);
  console.log(slideIndex)
  if (!slideIndex == 0) {
    slideIndex--;
  }
});


// 6 filtering
$('.filtering').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

var filtered = false;
$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});

// 7 autoplay-slider
$('.autoplay-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
  ]
});

//  8 Slider Syncing
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});




$('.fade-s').slick({
  dots: true,
  infinite: true,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  rtl:true
});


$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  dots: true,
  rtl:true
});