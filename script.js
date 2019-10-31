var d = new Date();

let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDay();
let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

//console.log(`${day} - ${month} ${date}`);

document.getElementById('year').innerHTML= year;