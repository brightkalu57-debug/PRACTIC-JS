const cart = [];
document.querySelectorAll('.js-main-addcartbtn')
.forEach((button) => {
    button.addEventListener(`click`, () =>  
    { 
        const productName = button.dataset.productName;
        cart.push({
        productName: productName, 
        quantity: 1 
        });

        let quantitys = 0;
        cart.forEach((Tan) => {
        quantitys += Tan.quantity;
        })
        console.log(cart);
        console.log(quantitys);

        document.querySelector('.js-header-column4-p2')
        .innerHTML = quantitys;
    });
});
