let editor = document.getElementById('editor');
let proposal = localStorage.getItem('proposal');  
editor.innerHTML = proposal;

document.addEventListener('keyup', function (event) {
    if (editor === document.activeElement) {
        proposal = editor.value;
        console.log(proposal);
        localStorage.setItem('proposal', proposal);
    }
})



