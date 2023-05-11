let menu_sub = document.querySelectorAll('.menu_sub');
for (let i = 0; i < menu_sub.length; i++) {
    menu_sub[i].parentElement.addEventListener('click', function () {
        for (let j = 0; j < menu_sub.length; j++) {
            console.log(menu_sub[j])
            if (menu_sub[j].classList.contains('menu_active')) {
                menu_sub[j].classList.remove('menu_active');
                menu_sub[i].classList.add('menu_active');
            } else {
                menu_sub[i].classList.add('menu_active');
            }
        }

    })
}