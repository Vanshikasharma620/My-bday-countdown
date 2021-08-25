const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const newYears = "20 nov 2021"

function countdown(){
    const newYearsdate = new Date(newYears);
    const currentdate = new Date();

    const totalseconds = (newYearsdate - currentdate) / 1000;

    const day = Math.floor(totalseconds / 3600 /24);
    const hour = Math.floor(totalseconds / 3600 ) % 24;
    const minute = Math.floor(totalseconds / 3600 /60) % 60;
    const second = Math.floor(totalseconds) % 60;

    days.innerHTML= day;
    hours.innerHTML= formatTime(hour);
    mins.innerHTML= formatTime(minute);
    seconds.innerHTML= formatTime(second);
    
    console.log(day, hour , minute , second);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
    
