// IIFE

(function() {
    const dayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]; 
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

    function updateClock() {
        const today = new Date();

        const day = today.getDay();
        const date = today.getDate();
        const month = today.getMonth();

        const currentHourEl = document.getElementById('hours'); 
        currentHourEl.innerText = formatHours(today.getHours());
        
        const currentMinEl = document.getElementById('minutes');
        currentMinEl.innerText = formatMinutes(today.getMinutes());

        const currentSecEl = document.getElementById('seconds');
        currentSecEl.innerText = formatSeconds(today.getSeconds());

        const currentDateEl = document.getElementById('day-month-date');
        currentDateEl.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + date;

        function formatHours(hours){
            if (hours < 10) {
                return '0' + hours;
            }
            return hours;
        }
        
        function formatMinutes(minutes){
            if (minutes < 10) {
                return '0' + minutes;
            }
            return minutes;
        }
        
        function formatSeconds(seconds){
            if (seconds < 10) {
                return '0' + seconds;
            }
            return seconds;
        }
        
        

    }
 


    setInterval(updateClock, 1000);

updateClock();

})();