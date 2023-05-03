let cookie = document.querySelector('.clicker__cookie');
let clicker__counter = document.getElementById('clicker__counter');
let num = 0;

cookie.addEventListener('click', function(){
    num++;
    clicker__counter.innerHTML = num;
    cookie.classList.add('clicka')
    setTimeout(()=> {
        cookie.classList.remove('clicka')
    }, 100)
})