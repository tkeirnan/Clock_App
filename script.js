(function() {
    const dayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]; 
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    
    function updateCalendark() {
            const today = new Date();
    
            const day = today.getDay();
            const date = today.getDate();
            const month = today.getMonth();

    const currentDateEl = document.getElementById('day-month-date');
    currentDateEl.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + date;
    }

    setInterval(updateCalendark, 1000);
    
    updateCalendark();
    
})();


var is24Hour = false,
    timeDisplay = document.getElementById("clock"),
    changeButton = document.getElementById("changeFormat");


var updateTime = function() {
    var currentDate = new Date(),
        hours = currentDate.getHours();
        hours = ("0" + hours).slice(-2);
        minutes = currentDate.getMinutes(),
        minutes = ("0" + minutes).slice(-2);
        seconds = currentDate.getSeconds();
        seconds = ("0" + seconds).slice(-2);

    if(is24Hour) {
        timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;
    }
    else {
        var suffix = hours >= 12 ? "PM" : "AM",
            hours12 = hours % 12;
        
        timeDisplay.innerText = hours12 + ":" + minutes + ":" + seconds + " " + suffix;
    }    

};

var changeFormat = function() {
    is24Hour = !is24Hour;
};

changeButton.addEventListener("click", changeFormat);
window.setInterval(updateTime, 1000);



