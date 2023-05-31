const isInterest = document.querySelectorAll('.interest')
const inputs = document.querySelectorAll('.interest__check')

function isCheckbox (element) {
  return (
    element instanceof HTMLInputElement &&
    element.getAttribute('type') == 'checkbox'
  )
}

let elem = Array.from(inputs)
let result = false
for (let elem = 0; elem < inputs.length; elem++) {
  if (isCheckbox(inputs[elem])) {
    if (inputs[elem].classList.contains('interest__check')) {
      if (inputs[elem].nextSibling.textContent.trim() == 'Еда') {
        const food = inputs[elem]
        const food1 = inputs[elem + 1]
        const food2 = inputs[elem + 2]

        food.addEventListener('change', function (e) {
          if (e.target.checked) {
            food1.checked = true
            food2.checked = true
          } else {
            food1.checked = false
            food2.checked = false
          }
        })
        const animal = inputs[elem + 3]
        const cat = inputs[elem + 4]
        const dog = inputs[elem + 5]

        animal.addEventListener('change', function (e) {
          if (e.target.checked) {
            cat.checked = true
            dog.checked = true
          } else {
            cat.checked = false
            dog.checked = false
          }
        })
      }
    }
  }
}