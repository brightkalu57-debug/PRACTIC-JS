import {cart} from "./Amazon-cart.js";
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
        let matchingitems ;
        cart.forEach(items => {
            if (items.productId === Number(productId)) {
                matchingitems = items
                console.log(matchingitems);
            }
        });
        
        const  select = document.querySelectorAll('.js-main-dropdownmenu-div');
        select.forEach((selects)=>{
                if(Number(button.dataset.productId) === Number(selects.dataset.productId)){
                    if(matchingitems) {
                        matchingitems.quantity += Number(selects.value)
                    } else {
                        cart.push({
                        productId: Number(productId),
                        quantity: Number(selects.value),
                        Shippingpprice: 0
                        });
                    };
                }
        })

        
        

        updateCarthtml ();
        localStorage.setItem("cart", JSON.stringify(cart));


    });
});
};

addcartbtn ();

updateCarthtml (); 

