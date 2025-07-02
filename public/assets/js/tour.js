 // Tour js
 const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'shepherd-theme-custom',
    scrollTo: {
      behavior: "smooth",
      block: "center"
    },
  }
});

tour.addStep({
  id: 'profile-tabs',
  title: 'All Tabs!',
  text: ' Go and cheak Now 👍\n',
  attachTo: {
    element: '#profile-tabs',
    on: 'bottom'
  },
  buttons: [
    {text: '< Back', action: tour.back},
    {text: 'Next >',action: tour.next }
  ]
});

tour.addStep({
  id: 'featured-Stories',
  title: 'Stories !',
  text: ' Beautiful day start with some pictures\n',
  attachTo: {
    element: '#featured-Stories',
    on: 'bottom'
  },
  buttons: [
    {text: '< Back', action: tour.back},
    {text: 'Next >',action: tour.next }
  ]
});

tour.addStep({
  id: 'post',
  title: 'Post',
  text: ' Some picture of our post secthion..\n',
  attachTo: {
    element: '#post',
    on: 'bottom'
  },
  buttons: [
    { text: '< Back', action: tour.back},
    {text: 'Next >',action: tour.next }
  ]
});

tour.addStep({
  id: 'about-me',
  title: 'About Me',
  text: ' something details about me!!\n',
  attachTo: {
    element: '#about-me',
    on: 'bottom'
  },
  buttons: [
    { text: '< Back', action: tour.back},
    {text: 'Next >',action: tour.next }
  ]
});

tour.addStep(  {
  id: 'friend',
  title: 'Friend',
  text: ' Friendlists who follow this!\n',
  attachTo: {
    element: '#friend',
    on: 'bottom'
  },
  buttons: [
    { text: '< Back', action: tour.back},
    { text: 'Done &#x1F44D;', action: tour.cancel}
  ]
});

tour.start();

 //  **------ slider**
 
$('.story-container').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});