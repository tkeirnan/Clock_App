//IIFE -
(function() {
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let is24Hour = false;
  const timeDisplay = document.getElementById("clock");
  const changeButton = document.getElementById("changeFormat");

  function updateCalendar() {
     const today = new Date();

     const day = today.getDay();
     const date = today.getDate();
     const month = today.getMonth();

     const currentDateEl = document.getElementById("day-month-date");
     currentDateEl.innerText =
     dayArray[day] + ", " + monthArray[month] + " " + date;
  }

    var updateTime = function() {
        console.log(is24Hour);
        var currentDate = new Date(),
          hours = currentDate.getHours();
          hours = ("0" + hours).slice(-2);
          (minutes = currentDate.getMinutes()), (minutes = ("0" + minutes).slice(-2));
          seconds = currentDate.getSeconds();
          seconds = ("0" + seconds).slice(-2);

          var suffix = hours >= 12 ? "PM" : "AM";

          if (is24Hour) {
             displayTime(hours, suffix)
            } else {
              
              let hours12 = hours % 12;

            if (hours12 === 0) {
                hours12 = 12;
            }
            hours12 = ("0" + hours).slice(-2);

            displayTime(hours12, suffix)
        }
        updateCalendar();   
    };

    function displayTime(hours, suffix){
        timeDisplay.innerText =
                hours + ":" + minutes + ":" + seconds + " " + suffix;

    }

    var changeFormat = function() {
        is24Hour = !is24Hour;
    };

  changeButton.addEventListener("click", changeFormat);
  window.setInterval(updateTime, 1000);

  updateTime();
})();
