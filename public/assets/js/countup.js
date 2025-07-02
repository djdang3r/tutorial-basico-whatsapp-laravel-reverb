 // countup js
 
 document.querySelectorAll('.counter').forEach(function(element) {
    var countTo = parseInt(element.getAttribute('data-count'));
    var currentCount = parseInt(element.textContent);
    var duration = 8000; 
    var interval = 16; 

    var iterations = duration / interval;
    var stepValue = (countTo - currentCount) / iterations;

    var intervalId = setInterval(function() {
        currentCount += stepValue;
        element.textContent = + Math.floor(currentCount);
        iterations--;
        if (iterations <= 0) {
            clearInterval(intervalId);
            element.textContent = '' + countTo;
        }
    }, interval);
});

function animateCounters() {
  document.querySelectorAll('.update-counter').forEach(function(element) {
      var countTo = parseInt(element.getAttribute('data-count'));
      var currentCount = 0;
      var duration = 8000;
      var interval = 16;      
      var iterations = duration / interval;
      var stepValue = (countTo - currentCount) / iterations;

      var intervalId = setInterval(function() {   
          currentCount += stepValue;
          element.textContent = Math.floor(currentCount);
          iterations--;

          if (iterations <= 0) {
              clearInterval(intervalId);
              element.textContent = '' + countTo;
          }
      }, interval);
  });
}

document.getElementById('startCounter').addEventListener('click', animateCounters);