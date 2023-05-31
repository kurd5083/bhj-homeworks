let hasTooltip = document.querySelectorAll('.has-tooltip');
console.log(hasTooltip)

for(let j = 0; j < hasTooltip.length; j++){
    let hints  = hasTooltip[j].title;
    hasTooltip[j].insertAdjacentHTML('afterend', `<div class="tooltip">${hints}</div>`);
}

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', function () {
        const {top, left} = hasTooltip[i].getBoundingClientRect()     
        let tooltip = document.querySelectorAll('.tooltip')
        console.log(tooltip)
        for(let j = 0; j < hasTooltip.length; j++){
            let check = hasTooltip[j].nextElementSibling
            console.log(check)
            if(check !== null){
                console.log(check.classList.contains('tooltip_active'))
                if(check.classList.contains('tooltip_active')){
                    check.classList.remove('tooltip_active')
                    if(i == j){
                        return
                    }
                } 
            }
        }

        tooltip[i].classList.add('tooltip_active');
        tooltip[i].style.left = `${left}px`
        tooltip[i].style.top = `${top + 20}px`
    })
}
