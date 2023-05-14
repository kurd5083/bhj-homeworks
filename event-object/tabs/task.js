let tab = document.querySelectorAll('.tab');
let tab__content = document.querySelectorAll('.tab__content');
for(let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', function(){
        for(let j = 0; j < tab.length; j++){
            if(tab[j].classList.contains('tab_active')){
                tab[j].classList.remove('tab_active')
            }
            if(tab__content[j].classList.contains('tab__content_active')){
                tab__content[j].classList.remove('tab__content_active')
            }
        }
        tab[i].classList.add('tab_active')
        tab__content[i].classList.add('tab__content_active')
    })
}

