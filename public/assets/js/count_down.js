//  **------count_down js**
window.addEventListener('load', () => {

    const countDownDate = new Date('December 31, 2024 23:59:59').getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Output the result in an element with id="timer"
      const timerEl = document.querySelectorAll('.timer');
      timerEl.forEach((el) => {
        if (el.querySelector('.days')) {
          el.querySelector('.days').innerHTML = days;
        }
        if (el.querySelector('.hours')) {
          el.querySelector('.hours').innerHTML = hours;
        }
        if (el.querySelector('.minutes')) {
          el.querySelector('.minutes').innerHTML = minutes;
        }
        if (el.querySelector('.seconds')) {
          el.querySelector('.seconds').innerHTML = seconds;
        }
      });
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
      }
    }, 1000);
  });
  
  var timer= document.getElementById('timer');
  var time=9;
  setInterval(function(){
    timer.innerHTML=time;
    time--;
    if(time<=0) time =10;
  },1000)

  

  var timer= document.getElementById('timer');
  var time=9;
  setInterval(function(){
    timer.innerHTML=time;
    time--;
    if(time<=0) time =10;
  },1000)

  