let status__wins = document.querySelector('.status__wins');
let status__loss = document.querySelector('.status__loss')

const words = [
  'bob',
  'awesome',
  'netology',
  'hello',
  'kitty',
  'rock',
  'youtube',
  'popcorn',
  'cinema',
  'love',
  'javascript'
]

let word = document.querySelector('.word');
let key;
let random;
let symbol;

function renderSimbol() {
  random = Math.floor(Math.random() * 11)
  word.innerHTML = '';
  for (let i = 0; i < words[random].length; i++) {
    word.innerHTML += `<span class="symbol">${words[random][i]}</span>`
  }
  symbol = document.querySelectorAll('.symbol')
}

renderSimbol()

let i = 0;
let err = 0
let correct = 0

document.addEventListener('keyup', function (event) {
  key = event.key
  console.log(words[random])
  if (key == words[random][i]) {
    symbol[i].classList.add('symbol_correct')
    i++;

  } else {
    symbol[i].classList.add('word_incorrect');
    err++;
    status__loss.innerHTML = err;
    i = 0;
    renderSimbol()
  }

  if (i == words[random].length) {
    i = 0;
    correct++;
    status__wins.innerHTML = correct;
    renderSimbol()
  }

  if (correct == 10) {
    setTimeout(()=> {
      alert(`Вы победили!!`);
      location.reload();
    }, 100)
  } else if(err == 3){
    setTimeout(()=> {
      alert(`Вы проиграли`);
      location.reload();
    }, 100)
  }
})
