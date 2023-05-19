const reveal = document.querySelectorAll('.reveal');
setInterval(() => {
    const {top, bottom} = reveal[0].getBoundingClientRect()
    console.log(top, bottom)
    if(top > -200 && bottom < 1070){
        reveal[0].classList.add('reveal_active')
    } else {
        reveal[0].classList.remove('reveal_active')
    }
    if(top > -3500 && bottom < -2200){
        reveal[1].classList.add('reveal_active')
    } else {
        reveal[1].classList.remove('reveal_active')
    }

}, 100)
