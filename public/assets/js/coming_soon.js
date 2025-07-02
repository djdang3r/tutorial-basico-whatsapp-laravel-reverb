let countdownDays = document.getElementById("days");
let countdownHours = document.getElementById("hours");
let countdownMinutes = document.getElementById("minutes");
let countdownSeconds = document.getElementById("seconds");

const deadlineDate = new Date('December 31, 2024 23:59:59').getTime();

setInterval(() => {    
  // Get current date and time
  const currentDate = new Date().getTime();

  // Calculate the distance between current date and time and the deadline date and time
  const distance = deadlineDate - currentDate;

  // Calculations the data for remaining days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Insert the result data into individual countdown boxes
  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;
}, 1000);