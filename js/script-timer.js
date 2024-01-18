"use strict";
var $ = function(id) { return document.getElementById(id); };

var session_seconds = "00";
var session_minutes = 2;

// Starting template for the timer
function template() {
  $("minutes").innerHTML = session_minutes;
  $("seconds").innerHTML = session_seconds;
}

function start_timer() {
  session_minutes = 1;
  session_seconds = 59;
  $("minutes").innerHTML = session_minutes;
  $("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    $("minutes").innerHTML = session_minutes;
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    $("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        $("done").innerHTML = "2 minutes Session Completed!";
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}