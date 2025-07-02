AOS.init();


// >>-- cursor js start --<<
const circleElement = document.querySelector('.circle-cursor');

const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 }
const circle = { x: 0, y: 0 };


let currentScale = 0;
let currentAngle = 0;


window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {

  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;


  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;

  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150);

  const scaleValue = (mouseVelocity / 150) * 0.5;

  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}
tick();

// >>-- cursor js end --<<



// >>-- tap on top --<<
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
/* Theme name prepend to localstorage key*/
const themeName = "La-Theme";

/* Get item in local store */
function setLocalStorageItem(key,value){
  localStorage.setItem(`${themeName}-${key}`, value);
}

$(document).on('click','#darkDemoBtn',function () {
  // setLocalStorageItem("sidebar-option", 'dark-sidebar');
  setLocalStorageItem("theme-mode", 'dark');
  window.location.href ='index.php'
})




// header js

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
      $(".landing-nav_main").addClass("landing-nav-active");
    } else {
      $(".landing-nav_main").removeClass("landing-nav-active");
    }
  });
});

// tooltip js
"use strict";
$(function() {
  var tooltip_init = {
    init: function () {
      $("a").tooltip();
    }
  };
  tooltip_init.init()
});


// Highlight text js
// const words = ["Monitoring", "Designers", "Managers", "Marketers"];
const words = ["Monitoring","Complete Control","Management"];
let currentIndex = 0;
const highlightText = document.getElementById('highlight-text');

function changeText() {
  // Hide the text with animation
  highlightText.classList.add('hidden');

  // Wait for the transition to complete before changing the text
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    highlightText.textContent = words[currentIndex];
    highlightText.classList.remove('hidden');
  }, 500);  // The same duration as the CSS transition
}

// Change word every 3 seconds
setInterval(changeText, 4000);
