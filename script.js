// IIFE

(function() {
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    const dayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]; 

    function updateClock() {
        const today = new Date();

        const day = today.getDay();
        const dayNum = today.getDate();
        const month = today.getMonth();
        
        const currentDateEl = document.getElementById('day-of-week');
        currentDateEl.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + dayNum;

        const currentHourEl = document.getElementById('hours'); 
        currentHourEl.innerText = formatHours(today.getHours());
        
        const currentMinEl = document.getElementById('minutes');
        currentMinEl.innerText = formatMinutes(today.getMinutes());

        const currentSecEl = document.getElementById('seconds');
        currentSecEl.innerText = formatSeconds(today.getSeconds());

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