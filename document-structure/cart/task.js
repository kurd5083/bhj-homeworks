let product__quantity_value = document.querySelectorAll('.product__quantity-value');
let product__quantity_control_inc = document.querySelectorAll('.product__quantity-control_inc');
let product__quantity_control_dec = document.querySelectorAll('.product__quantity-control_dec');

for (let i = 0; i < product__quantity_value.length; i++) {
    product__quantity_control_inc[i].addEventListener('click', function () {
        product__quantity_value[i].innerHTML++;
    })
    product__quantity_control_dec[i].addEventListener('click', function () {
        product__quantity_value[i].innerHTML--;
    })
}
let product__add = document.querySelectorAll('.product__add');
let cart__products = document.querySelector('.cart__products');
let product__image = document.querySelectorAll('.product__image');
let product = document.querySelectorAll('.product');

for (let i = 0; i < product__add.length; i++) {
    product__add[i].addEventListener('click', function () {
        let data_id = product[i].getAttribute('data-id');
        if (cart__products.innerHTML !== '') {
            let cart__product = document.querySelectorAll('.cart__product');
            for (let j = 0; j < cart__product.length; j++) {
                if (cart__product[j].getAttribute('data-id') == data_id) {
                    let cart__product_count = document.querySelectorAll('.cart__product-count');
                    cart__product_count[j].innerHTML = Number(cart__product_count[j].innerHTML) + Number(product__quantity_value[i].innerHTML);
                    return
                }
            }
        }
        cart__products.innerHTML += `
        <div class="cart__product" data-id="${data_id}">
            <img class="cart__product-image" src="${product__image[i].src}">
            <div class="cart__product-count">${product__quantity_value[i].innerHTML}</div>
        </div>`

    })
}