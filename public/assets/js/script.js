//  -----------------------------------------------------------------------------------

//     Template Name: ra-admin Admin
//     Template URI: http://admin.la-themes.com/ra-admin/theme
//     Description: This is Admin theme
//     Author: la-themes
//     Author URI: https://themeforest.net/user/la-themes

// -----------------------------------------------------------------------------------

// 01. Horizontal Nav js
// 02. Flag  Icon Js
// 03. copy js
// 04. sidebar toggle js
// 05. List page js
// 06. Sidebar scroll js
// 07. Loader JS
// 08. tap on top
// 09. flag dropdown
// 10. hide-show
// 11. dark mode js
// 12. close on click js
// 13. searchbar js
// 14. closeCollapse js
// 15. Modal js


// >>-- 01 Horizontal Nav Js --<<
let navBar = $(".main-nav");
let size = "150px";
let leftsideLimit = -100;
let navbarSize;
let containerWidth;
let maxNavbarLimit;

function setUpHorizontalHeader() {
  navbarSize = navBar.width();
  containerWidth = ($(".simplebar-content").width())
  maxNavbarLimit = -(navbarSize - containerWidth);
  if ($("nav").hasClass("horizontal-sidebar")) {
    $(".menu-next").removeClass("d-none");
    $(".menu-previous").removeClass("d-none");
  } else {
    navBar.css("marginLeft",0)
    $(".menu-next").addClass("d-none");
    $(".menu-previous").addClass("d-none");
  }
  $(".horizontal-sidebar .show").removeClass("show");
}

$(document).on('click', '.menu-previous', function (e) {
  let layoutOption = getLocalStorageItem("layout-option","ltr");
  let attribute = (layoutOption == 'ltr' || layoutOption == 'box-layout') ? 'marginLeft' : 'marginRight';
  let currentPosition = parseInt(navBar.css(attribute));
  if (currentPosition < 0) {
    navBar.css(`${attribute}`, "+=" + size)
    $(".menu-next").removeClass("d-none");
    $(".menu-previous").removeClass("d-none");
    if (currentPosition >= leftsideLimit) {
      $(this).addClass("d-none");
    }
  }
})

$(document).on('click', '.menu-next', function (e) {
  let layoutOption = getLocalStorageItem("layout-option","ltr");
  let attribute = (layoutOption == 'ltr' || layoutOption == 'box-layout') ? 'marginLeft' : 'marginRight';
  let currentPosition = parseInt(navBar.css(attribute));
  if (currentPosition >= maxNavbarLimit) {
    $(".menu-next").removeClass("d-none");
    $(".menu-previous").removeClass("d-none");
    navBar.css(`${attribute}`, "-=" + size)
    if (currentPosition - parseInt(size) <= maxNavbarLimit) {
      $(this).addClass("d-none");
    }
  }
})

$(function () {
  setUpHorizontalHeader();
  let themeMode = getLocalStorageItem('theme-mode', 'light')
  setTimeout(() => {
    $('body').addClass(`${themeMode}`)
  }, 1000);
});


// >>-- 02 Flag  Icon Js --<<
$(function () {
  var text = $(".selected i").attr('class')
  $(".flag i").prop('class', text);
  $(document).on('click', '.lang', function () {
    $(".lang").removeClass("selected");
    $(this).addClass("selected");
    text = $(".selected i").attr('class')
    $(".flag i").prop('class', text);
  });
})



// >>-- 03 Copy js --<<
function copyvalue() {
  var temp = document.createElement('input');
  var texttoCopy = document.getElementById('copyText2').innerHTML;
  temp.type = 'input';
  temp.setAttribute('value', texttoCopy);
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
  console.timeEnd('time2');
}



// >>-- 04 Sidebar toggle js --<<
$(document).on('click', '.header-toggle', function () {
  $("nav").toggleClass("semi-nav");
});
$(".toggle-semi-nav").on("click", function () {
  $("nav").removeClass("semi-nav");
});


// >>-- 05 List page js --<<
$(".contact-listbox").on("click", function () {
  $(this).toggleClass("stared");
});

function resize() {
  var $window = $(window),
    $nav = $('nav');

  $nav.removeClass('semi-nav');
  if ($window.width() < 768) {
    // $nav.removeClass('semi-nav');

  } else if ($window.width() < 1199) {
    $nav.addClass('semi-nav');
  }
}

$(function () {
  resize();
});
window.addEventListener("resize", () => {
  resize();
});


// >>-- 06 Sidebar scroll js --<<
var myElement = document.getElementById('app-simple-bar');
new SimpleBar(myElement, { autoHide: true });

// Sidebar active class js
$(function () {
  let current = location.pathname;
  current = current.substring((current.lastIndexOf('/')) + 1);
  $('.main-nav li a').each(function () {
    var $this = $(this);
    if (current === $this.attr("href").split('/').pop()) {
      if ($this.parent().parent().parent().hasClass("another-level")) {
        $this.parent().parent().parent().parent().closest('li').children().addClass('show').attr("aria-expanded", "true");
      }
      $this.parent().parent().parent().children().addClass('show');
      $this.parent().parent().parent().children().attr("aria-expanded", "true");
      $this.parent('li').addClass('active');
    }
  })
})

// >>-- 07 Loader JS --<<
$('.loader-wrapper').fadeOut('slow', function () {
  $(this).remove();
});


// >>-- 08 tap on top --<<
let calcScrollValue = () => {
  let scrollProgress = document.getElementsByClassName("go-top");
  let progressValue = document.getElementsByClassName("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress[0].style.display = 'grid';
  } else {
    scrollProgress[0].style.display = 'none';
  }

  scrollProgress[0].addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress[0].style.background = `conic-gradient( rgba(var(--primary),1) ${scrollValue}%, var(--light-gray) ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;



// >>-- 09 Flag dropdown --<<
$(function () {
  var text = $(".selected img").attr('src')
  $(".flag img").prop('src', text);
  $(document).on('click', '.lang', function () {
    $(".lang").removeClass("selected");
    $(this).addClass("selected");
    text = $(".selected img").attr('src')
    $(".flag img").prop('src', text);
  });
})
$(function () {
  var text = $(".selected i").attr('class')
  $(".flag i").prop('class', text);
  $(document).on('click', '.lang', function () {
    $(".lang").removeClass("selected");
    $(this).addClass("selected");
    text = $(".selected i").attr('class')
    $(".flag i").prop('class', text);
  });
})


// >>-- 10 Hide-show --<<

function myFunction() {
  var x = document.getElementById("myapp");
  if (x.style.display === "none") {
    x.style.display = "block";
    let buttoncontent = $("#button-content").html().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    $("#button-code").html(buttoncontent)
  } else {
    x.style.display = "none";
    $("#button-code").html("")
  }
}


// >>-- 11 Dark mode js --<<

document.querySelector(".header-dark").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("sun");
  document.querySelector(".moon-logo").classList.toggle("moon");
  if ($('body').hasClass("dark")) {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    setLocalStorageItem('theme-mode', 'light')
  } else {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
    setLocalStorageItem('theme-mode', 'dark')
  }
})
function appendHtml() {
  var div = document.getElementsByClassName('app-wrapper');
  div.innerHTML += '<p>This is some HTML code</p>';
}
window.onload = function () {
  appendHtml();
}

// >>-- 12 Close on click js --<<

$(document).on('click', '.close-btn', function () {
  let targetItem = $(this).closest(".head-box");
  let targetParent = targetItem.parent();
  $(this).parent().parent().remove();
  if (targetParent.find(".head-box").length <= 0) {
    targetParent.parent().parent().find('.head-box-footer').addClass('d-none');
    targetParent.parent().parent().find('.offcanvas-body').addClass('h-auto');
  }
});

 // >>-- 13 Searchbar js --<<
$(document).on('keyup', '.search-filter', function (e) {
  var search = $(this).val().toLowerCase();
  $('.search-list').each(function () {
    $(this).find('.search-list-content h6').each(function (ele) {
      var content = $(this).text().toLowerCase();
      if (content.includes(search)) {
        $(this).closest(".search-list-item").show();
        var highlightedText = content.replace(new RegExp(search, 'gi'), function (match) {
            return '<span class="highlight-searchtext">' + match + '</span>';
        });
        $(this).html(highlightedText);
      } else {
        $(this).closest(".search-list-item").hide();
      }
    });
  });
})


// >>-- 14 CloseCollapse js --<<
var closeCollaps = document.querySelectorAll('.main-nav li a[data-bs-toggle="collapse"]');
closeCollaps.forEach(function (element) {
  element.addEventListener('click', function () {
    var parent = element.closest('.collapse');
    var all = document.querySelectorAll('.main-nav ul.collapse');
    all.forEach(function (e) {
      if (e !== parent) {
        e.classList.remove('show');
        var ariaexpand = e.previousElementSibling;
        if (ariaexpand) ariaexpand.setAttribute('aria-expanded', 'false');
      }
    });
    parent?.classList.add('show');
    var ariaexpand = element;
    if (ariaexpand) ariaexpand.setAttribute('aria-expanded', 'true');
  });
});

// >>-- 15  Modal js --<<

$(function () {
  $('#welcomeCard').modal('show');
});

// >>-- 16  Alert js --<<
function showAlert(type, message) {
    const alertsContent = document.getElementById('alerts-content');
    alertsContent.innerHTML = ''; // Limpia cualquier alerta previa

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-light-${type}`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = message;

    alertsContent.appendChild(alertDiv);

    // Ocultar el div automáticamente después de unos segundos con animación
    setTimeout(() => {
        alertDiv.style.transition = 'opacity 1s ease-out';
        alertDiv.style.opacity = '0';
        setTimeout(() => {
            alertDiv.remove();
        }, 1000); // Tiempo de la animación en milisegundos
    }, 5000); // 3000 milisegundos = 3 segundos
}
