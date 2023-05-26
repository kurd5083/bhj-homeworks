let xhr = new XMLHttpRequest();
let loader = document.querySelector('.loader');
let items = document.getElementById('items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onload = () => {
    let a = JSON.parse(xhr.response)
    console.log(a.response.Valute)
    loader.classList.remove('loader_active')
    for (let key in a.response.Valute) {
        items.innerHTML += `
        <div class="item">
        <div class="item__code" >
        ${a.response.Valute[key].CharCode}
        </div>
        <div class="item__value">
        ${a.response.Valute[key].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>
        </div>
        `
    }
}

xhr.send()

