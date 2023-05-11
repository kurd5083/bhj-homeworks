let modal_main = document.getElementById('modal_main');
let show_success = document.querySelector('.show-success')
let modal_success = document.getElementById('modal_success')
let modal__close = document.querySelectorAll('.modal__close');

console.log(modal__close)

modal_main.classList.add('modal_active');

modal__close[0].addEventListener('click', function(){
    modal_main.classList.remove('modal_active');
})
show_success.addEventListener('click', function(){
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
})
modal__close[2].addEventListener('click', function(){
    modal_success.classList.remove('modal_active');
})