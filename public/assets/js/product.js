
//  **------product**
// product box js

$('.grid-layout-view').on('click', function (e) {
  $(".product-wrapper-grid").children().children().removeClass();
  $(".product-wrapper-grid").children().children().addClass("list-view");
  $(".product-wrapper-grid").children().children().addClass("col-sm-6");
  // document.querySelector(".col-lg-4").classList.add("d-none");
});

$('.product-view4').on('click', function (e) {
if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-xxl-3");
    // document.querySelector(".col-3").classList.add("d-none");
}
});

$('.product-view3').on('click', function (e) {
if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-md-4");
    // document.querySelector(".col-4").classList.add("d-none");
}
});

$('.product-view2').on('click', function (e) {
if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-sm-6 product-view-box");
    // document.querySelector(".col-6").classList.add("d-none");
}
});
$('.product-view').on('click', function (e) {
  if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-12");
      // document.querySelector(".col-6").classList.add("d-none");  
  }
  });

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

var select = document.getElementById('select-input');

for (var i = -20; i <= 1000; i++) {

    var option = document.createElement("option");
    option.text = i;
    option.value = i;

    select.appendChild(option);
}
var html5Slider = document.getElementById('html-input');

noUiSlider.create(html5Slider, {
    start: [10, 30],
    connect: true,
    range: {
        'min': 20,
        'max': 40
    }
});

var inputNumber = document.getElementById('number-input');

html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        inputNumber.value = value;
    } else {
        select.value = Math.round(value);
    }
});

select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});

document.querySelector('.toggle-btn').addEventListener('click', () => {
	var productbox = document.querySelector(".productbox");
	productbox.classList.toggle("producttoggle");
});
