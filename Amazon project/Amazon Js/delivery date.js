import { cart } from "./Amazon-cart.js";
import { checkouProduct } from "./Amazon-checkout.js";
export function Shippingpprice(){
    const Shipping = document.querySelector('.js-checkoutPlaceorder-container-div2');
    const radio = document.querySelectorAll('.js-checkout-labelradio');
    radio.forEach((radios)=>{
        radios.addEventListener('change', ()=>{
            cart.forEach((cartitems)=>{
                if (cartitems.productId === Number(radios.dataset.productId)) {
                    if (radios.dataset.productName ==='FREEShipping'){
                        cartitems.Shippingpprice = 0;
                    }else if (radios.dataset.productName ==='ThreedaysShipping'){
                        cartitems.Shippingpprice = 499;
                    }else if (radios.dataset.productName ==='onedaysShipping'){
                        cartitems.Shippingpprice = 999;
                    };
                };
                
            }) 


            localStorage.setItem('cart', JSON.stringify(cart))
            let addShippingpprice = 0;
            cart.forEach((items)=>{
                addShippingpprice += Number(items.Shippingpprice);
                Shipping.innerHTML= `$${(addShippingpprice/100).toFixed(2)}`;
            })
            checkouProduct();
            console.log(addShippingpprice/100)
        })
            
    });
    let addShippingpprice = 0;
    cart.forEach((items)=>{
        addShippingpprice += Number(items.Shippingpprice);
        Shipping.innerHTML= `$${(addShippingpprice/100).toFixed(2)}`;
    })
}

