import {cart} from "../Amazon data/Amazon-cart.js";
export function updateCartHtml (){
    let quantitys = 0;
    cart.forEach((Tan) => {
        quantitys += Tan.quantity;
    });
    const cartIconElement = document.querySelector('.js-header-column4-p2');

    if (cartIconElement) {
        cartIconElement.innerHTML = quantitys;
    }
    
    
}
updateCartHtml ();