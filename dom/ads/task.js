let rotator__case = document.querySelectorAll('.rotator__case')
let i = 0;
let time = 1000;
let color = 'red';
let interval;

function f1() {
    clearInterval(interval);
    if(i == 6){
        i = 0;
    }
    for (let j = 0; j < 6; j++) {
        if (rotator__case[j].classList.contains('rotator__case_active')) {
            rotator__case[j].classList.remove('rotator__case_active')
        }
    }
    time = rotator__case[i].getAttribute('data-speed');
    color = rotator__case[i].getAttribute('data-color');
    rotator__case[i].classList.add('rotator__case_active');
    rotator__case[i].style.cssText = `color: ${color};`
    console.log(time)
    console.log(color)
    i++
    interval = setInterval(f1, time);
}
f1();