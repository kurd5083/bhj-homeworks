let tim = document.getElementById('timer');
let sec = 60;
let min = 60;
let hrs = 1;
let t;
function add(){
    tick();
    tim.innerHTML = (hrs > 9 ? hrs: "0" + hrs)
    + ":" +(min > 9 ? min: "0" + min)
    + ":" +(sec > 9 ? sec: "0" + sec)
    timer();
}
function tick(){
    sec--;
    if(sec == 0){
        sec = 60;
        min++;
    } if(min == 0){
        min = 60;
        hrs++;
    }
}
function timer(){
 t = setTimeout(add, 1000);
}
timer()
