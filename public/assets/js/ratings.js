
$(function() {
  function ratingEnable() {

   $('#example-1to10').barrating('show', {
    theme: 'bars-1to10'
   });
   }

   $('#example-square').barrating('show', {
    theme: 'bars-square',
    showValues: true,
    showSelectedRating: false
   });

   $('#example-pill').barrating('show', {
    theme: 'bars-pill',
    initialRating: 'A',
    showValues: true,
    showSelectedRating: false,
    allowEmpty: true,
    emptyValue: '-- no rating selected --',
    onSelect: function(value, text) {
      
    }
  });

  $('#example-reversed').barrating('show', {
    theme: 'bars-reversed',
    showSelectedRating: true,
    reverse: true
  });

  $('#example-horizontal').barrating('show', {
    theme: 'bars-horizontal',
    reverse: true,
    hoverState: false
  });

  ratingEnable();
  });


// custome emoji change js start //
const starsEl = document.querySelectorAll(".emoji-star");
const emojiEl = document.querySelectorAll(".far");
const colorArray = ["#F03161", "#74788D", "#F03161", "#FC9314", "#05BF81"];

function updateRating(index) {
    starsEl.forEach((star, idx) => {
        star.classList.toggle("active", idx <= index);
    });
    emojiEl.forEach((emoji, idx) => {
        emoji.style.transform = `translateX(-${index * 44}px)`;
        emoji.style.color = idx === index ? colorArray[index] : 'black';
    });
}

starsEl.forEach((star, index) => {
    star.addEventListener("click", () => updateRating(index));
});

updateRating(0);
// custome emoji js end //


// emoji progress start//
var emojis = ['😠','😒','😧','😦','😑','😀','😆','😍','🤩','💙'];
var text = ['1','2','3','4','5','6','7','8','9','10'];

$("input").on("input", function() { // Use "input" event for real-time update
    var i = $(this).val();
    $(".emoji").html(emojis[i]);
    $(".text").html(text[i]);
});
// emoji progress end//