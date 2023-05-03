let hole_game = document.querySelector('.hole-game');
let hole = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost')
let numDead = 0;
let numLost = 0;
for(let i = 0; i < hole.length; i++){
    hole[i].addEventListener('click', function(){
        if(hole[i].classList.contains("hole_has-mole")){
            numDead++;
            dead.innerHTML = numDead;
        } else {
            numLost++;
            lost.innerHTML = numLost;
        }
        if(dead.innerHTML == '10'){
            alert('Победа');
            location.reload();
        } else if(lost.innerHTML == '5'){
            alert('Проигрыш')
            location.reload();
        }
    })
}

