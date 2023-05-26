let xhr = new XMLHttpRequest();
let pollTitle = document.querySelector('.poll__title')
let pollAnswers = document.querySelector('.poll__answers')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.onload = () => {
    let a = JSON.parse(xhr.response)
    console.log(a)
    pollTitle.innerHTML = `${a.data.title}`
    for (let key in a.data.answers) {
        console.log(a.data.answers[key])
        pollAnswers.innerHTML += `
        <button class="poll__answer">
        ${a.data.answers[key]}
        </button>
        `
    }
    let btn = document.querySelectorAll('.poll__answer');
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', function(){
            alert('Спасибо, ваш голос засчитан!')
        })
    }
}

xhr.send()

