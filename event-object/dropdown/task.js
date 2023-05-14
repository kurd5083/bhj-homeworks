let dropdown__value = document.querySelector('.dropdown__value');
let dropdown__list = document.querySelector('.dropdown__list');
let dropdown__link = document.querySelectorAll('.dropdown__link');

dropdown__value.addEventListener('click', function(){
    if(dropdown__list.classList.contains('dropdown__list_active')){
         dropdown__list.classList.remove('dropdown__list_active')
    } else {
        dropdown__list.classList.add('dropdown__list_active');
    }
})

console.log(dropdown__link)
for(let i = 0; i < dropdown__link.length; i++){
    dropdown__link[i].addEventListener('click', function(){
        dropdown__value.innerHTML = dropdown__link[i].innerHTML;
        dropdown__list.classList.remove('dropdown__list_active')
    })
}
