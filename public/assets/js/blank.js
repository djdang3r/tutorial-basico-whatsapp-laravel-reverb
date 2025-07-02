// $(document).on('click','.close-btn',function (e) {
//   let targetItem = $(this).closest(".head-box");
//   let targetParent = targetItem.parent();
//   targetItem.remove();
//   if (targetParent.find(".head-box").length<=0){
//       targetParent.find(".hidden-massage").addClass("active-massage");
//   }
// })


// Horizontal Nav css
let navBar = $(".main-nav");
let size = "500px";
let leftsideLimit = -500;

let navbarSize;
let containerWidth;
let maxNavbarLimit;

function setUpHorizontalHeader(){
  navbarSize = navBar.width();
  containerWidth = ($(".simplebar-content").width())
  maxNavbarLimit =  -(navbarSize - containerWidth);
  if ($("nav").hasClass("horizontal-sidebar")) {
      $(".menu-next").removeClass("d-none");
      $(".menu-previous").removeClass("d-none");
  }else{
      $(".menu-next").addClass("d-none");
      $(".menu-previous").addClass("d-none");
  }
}

$(document).on('click','.menu-previous',function (e) {
  let currentPosition = parseInt(navBar.css("marginLeft"));
  if (currentPosition < 0) {
      navBar.css("marginLeft","+=" + size)
      $(".menu-next").removeClass("d-none");
      $(".menu-previous").removeClass("d-none");
      if (currentPosition >= leftsideLimit) {
          $(this).addClass("d-none");
      }
  }
})
$(document).on('click','.menu-next',function (e) {
  let currentPosition = parseInt(navBar.css("marginLeft"));
  if (currentPosition >= maxNavbarLimit) {
      $(".menu-next").removeClass("d-none");
      $(".menu-previous").removeClass("d-none");
      navBar.css("marginLeft","-=" + size)
      if (currentPosition - parseInt(size) <= maxNavbarLimit) {
          $(this).addClass("d-none");
      }
  }
})


$(function() {
  setUpHorizontalHeader();
});


//  **------flag dropdown**
$(function() {
  var text = $(".selected i").attr('class')
  $(".flag i").prop('class', text);
    $(document).on('click','.lang',function () {
      $(".lang").removeClass("selected");
      $(this).addClass("selected");
      text = $(".selected i").attr('class')
      $(".flag i").prop('class', text);
  });
})
