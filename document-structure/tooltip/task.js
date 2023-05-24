let has_tooltip = document.querySelectorAll('.has-tooltip');
console.log(has_tooltip)
let tooltip
for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', function () {
        let hints = has_tooltip[i].title;
        has_tooltip[i].insertAdjacentHTML('afterend', `<div class="tooltip">${hints}</div>`);
        tooltip = has_tooltip[i].nextElementSibling
        console.log(tooltip)
        tooltip.classList.add('tooltip_active')
    })
}
