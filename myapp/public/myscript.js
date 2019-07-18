//Party Preparing
// Set the date we're counting down to (timezone (UTC+07:00) Indochina Time - ICT)
var _date = new Date();
console.log(_date);

var _timezoneOffset = _date.getTimezoneOffset() * 1000 * 60;
console.log(_timezoneOffset);

var currentTime =
  _date.getHours() * 1000 * 3600 +
  _date.getMinutes() * 1000 * 60 +
  _date.getSeconds() * 1000;
console.log(currentTime);

var remainTime = 24 * 3600 * 1000 - currentTime;
console.log(remainTime);

var countDownDate =
  _date.getTime() +
  remainTime +
  _timezoneOffset +
  1000 * 3600 * (7 + 0 * 24 + 8);
console.log(countDownDate);

// Update the count down every 1 second
var cdt = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // console.log(distance);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // console.log(days);

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours);

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(minutes);

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(seconds);

  // Display the result in the element with id
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished
  if (distance < 0) {
    clearInterval(cdt);
    document.getElementById("clockdiv").innerHTML = "Chúc mừng hạnh phúc!";
  }
}, 1000);
// console.log(cdt);
