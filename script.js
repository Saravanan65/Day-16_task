function countdown(count, callback) {
    if (count >= 1) {
      setTimeout(function() {
        document.getElementById("countdown-container").innerHTML = count;
        countdown(count - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function happyIndependenceDay() {
    document.getElementById("countdown-container").innerHTML = "Happy Independence Day!";
  }
  
  console.log("Countdown starting...");
  countdown(10, function() {
    happyIndependenceDay();
  });
