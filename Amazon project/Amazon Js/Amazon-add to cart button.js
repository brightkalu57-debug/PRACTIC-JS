import {cart} from "./Amazon-cart.js";
localStorage.clear();
function updateCarthtml (){
    let quantitys = 0;
        cart.forEach((Tan) => {
        quantitys += Tan.quantity;
        })
        console.log(cart);

        document.querySelector('.js-header-column4-p2')
        .innerHTML = quantitys;
}

export function addcartbtn () {
    document.querySelectorAll('.js-main-addcartbtn')
.forEach((button) => {
    button.addEventListener(`click`, () =>  
    { 

        const productId = button.dataset.productId;

        updateCarthtml ();
        let matchingitems ;
        cart.forEach(items => {
            if (items.productId === Number(productId)) {
                matchingitems = items
            }
        });

        if(matchingitems) {
            matchingitems.quantity +=1
        } else {
            cart.push({
            productId: Number(productId),
            quantity: 1 
            });
        };
        
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(matchingitems.quantity);

    });
});
};


updateCarthtml ();

