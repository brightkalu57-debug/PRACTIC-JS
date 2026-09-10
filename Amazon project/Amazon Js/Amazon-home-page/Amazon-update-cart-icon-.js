import {cart} from "../Amazon data/Amazon-cart.js";
export function updateCartHtml (){
    let quantitys = 0;
    cart.forEach((Tan) => {
        quantitys += Tan.quantity;
    })


    document.querySelector('.js-header-column4-p2')
    .innerHTML = quantitys;
}