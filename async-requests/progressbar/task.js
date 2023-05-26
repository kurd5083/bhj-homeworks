const progress = document.getElementById( 'progress' );
let uploaded = document.getElementById('uploaded')
document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function(event) {
        uploaded.innerHTML = 'Загружено ' + event.loaded + ' из ' + event.total;
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }
    xhr.onload = () => {
        console.log(xhr.status, xhr.response)
    }
    const formData = new FormData(document.forms.form)
    xhr.send(formData)
})





