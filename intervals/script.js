// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

setInterval(updateTime, 1000)

function updateTime(){
    time += 1 ;
    counterElement.innerHTML = time;
}