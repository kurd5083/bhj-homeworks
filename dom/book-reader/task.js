let font_size = document.querySelectorAll('.font-size');
let book = document.querySelector('.book');
for (let i = 0; i < font_size.length; i++) {
    font_size[i].addEventListener('click', function () {
        if (book.classList.contains('book_fs-small')) {
            book.classList.remove('book_fs-small');
        }
        if (book.classList.contains('book_fs-big')) {
            book.classList.remove('book_fs-big');
        }
        for (let j = 0; j < font_size.length; j++) {
            if (font_size[j].classList.contains('font-size_active')) {
                font_size[j].classList.remove('font-size_active')
            }
        }

        if (i == 0) {
            book.classList.add('book_fs-small');
        }
        if (i == 2) {
            book.classList.add('book_fs-big');
        }

        font_size[i].classList.add('font-size_active')
    })
}