import {cart} from "../Amazon data/Amazon-cart.js";
import {updateCartHtml} from "./Amazon-update-cart-icon-.js"

export function addcartbtn (addToCartBtn) {
    
    addToCartBtn.forEach((button) => {
    button.addEventListener(`click`, () =>  
    {
        
        const productId = button.dataset.productId;
        let matchingitems ;
        cart.forEach(items => {
            if (items.productId === Number(productId)) {
                matchingitems = items;
            }
        });
        
        const  select = document.querySelectorAll('.js-main-dropdownmenu-div');
        select.forEach((selects)=>{
            if(Number(button.dataset.productId) === Number(selects.dataset.productId)){
                if(matchingitems) {
                    matchingitems.quantity += Number(selects.value)
                }else {
                    cart.unshift ({
                    productId: Number(productId),
                    quantity: Number(selects.value),
                    deliveryOptionId: 1
                    });
                };
            }
        })

        updateCartHtml ();
        localStorage.setItem("cart", JSON.stringify(cart));

        
        const addToCartMessage = (document.querySelectorAll(`.js-main-addedcartbtn-message`));
        const Message = addToCartMessage.find(Message=> Number(Message.dataset.productId) === Number(button.dataset.productId));
        Message.style.opacity = `1`;
        setTimeout(() =>{
            Message.style.opacity = `0`;
        }, 2000);
        

    });
});
};

updateCartHtml (); 

