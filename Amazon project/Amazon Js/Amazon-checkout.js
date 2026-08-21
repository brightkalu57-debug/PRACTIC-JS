import { product } from "./Amazon-product.js";
import {cart} from "./Amazon-cart.js";
import {Shippingpprice} from "./delivery date.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const add9days = dayjs().add(9, 'days')
const  FREEShipping = add9days .format('dddd, MMMM D') 
const add3days = dayjs().add(3, 'days')
const  ThreedaysShipping = add3days .format('dddd, MMMM D') 
const add1days = dayjs().add(1, 'days')
const  onedaysShipping = add1days .format('dddd, MMMM D') 
console.log(FREEShipping);
function checkout (){
  let checkouItem = 0;
      cart.forEach((item) => {
        checkouItem += item.quantity;
      })

      document.querySelector('.js-header-p1-span')
      .innerHTML = `${checkouItem} items` ;
};
function checkouProduct (){
  let addedproduct = '';
  let Itemsquantity = 0;   
  let Itemsprice = 0
product.forEach(productitems => {
  cart.forEach((cartitems) => {
      if (cartitems.productId === productitems.id ) {
        Itemsquantity += cartitems.quantity;
        Itemsprice += ((productitems.pricecents)*cartitems.quantity);
        addedproduct +=
          `<div class="checkout-product-container">
            <p class="checkout-product-container-row1-p1">
              Delivery date: Friday, July 31
            </p>
            <div class="checkout-product-container-row2">
              <div class="checkout-product-container-row2-column1">
                <div class="checkout-product-container-row2-column1-img-div">
                  <img
                    src="${productitems.img}"
                  />
                </div>
                <div class="checkout-product-container-row2-column1-column2">
                  <p class="checkout-product-container-row2-column1-column2-p1">
                    ${productitems.name}
                  </p>
                  <p class="checkout-product-container-row2-column1-column2-p2">
                    $${(productitems.pricecents /100).toFixed(2)}
                  </p>
                  <p class="checkout-product-container-row2-column1-column2-p3">
                    Quantity: 
                    <span class='js-product-Quantity' data-product-id="${productitems.id}">${cartitems.quantity}</span> 
                    <span class='lnk js-cart-Update-lnk' data-product-id="${productitems.id}">Update</span>
                    <span class='lnk js-cart-delete-lnk' 
                    data-product-id="${productitems.id}"> Delete</span>
                  </p>
                </div>
              </div>
              <div class="checkout-product-container-row2-column2">
                <p class="checkout-product-container-row2-column1-p1">
                  Choose a delivery option:
                </p>
                <label class="checkout-product-container-row2-column2-label1 js-checkout-label" 
                data-product-id="${cartitems.productId}" data-product-name ="FREEShipping">
                  <input
                    class="js-checkout-labelradio" 
                    type="radio"
                    data-product-id="${cartitems.productId}"
                    data-product-name ="FREEShipping"
                    name="${cartitems.productId}"
                    ${cartitems.Shippingpprice === 0 ? 'checked': ''}
                  />
                  <div class="checkout-product-container-row2-column2-label-p-div" >
                    <p class="checkout-product-container-row2-column2-label-p">
                      ${FREEShipping}
                    </p>
                    <p class="checkout-product-container-row2-column2-label-p2"> FREE Shipping</p>
                  </div>
                  
                </label>
                <label class="checkout-product-container-row2-column2-label2 js-checkout-label" 
                data-product-id="${cartitems.productId}"
                data-product-name ="ThreedaysShipping"
                >
                  <input
                    class="js-checkout-labelradio" 
                    type="radio"
                    data-product-id="${cartitems.productId}"
                    data-product-name ="ThreedaysShipping"
                    name="${cartitems.productId}"
                    ${cartitems.Shippingpprice === 499 ? 'checked': ''}
                  />
                  <div class="checkout-product-container-row2-column2-label-p-div" >
                  <p class="checkout-product-container-row2-column2-label-p">
                    ${ThreedaysShipping} 
                  </p>
                  <p class="checkout-product-container-row2-column2-label-p2">$4.99 - Shipping</p>
                  </div>
                  
                </label>
                <label class="checkout-product-container-row2-column2-label3 js-checkout-label" 
                data-product-id="${cartitems.productId}"
                data-product-name ="onedaysShipping"
                >
                  <input
                    class="js-checkout-labelradio" 
                    type="radio"
                    data-product-id="${cartitems.productId}"
                    data-product-name ="onedaysShipping"
                    name="${cartitems.productId}"
                    ${cartitems.Shippingpprice === 999 ? 'checked': ''}
                  />
                  <div class="checkout-product-container-row2-column2-label-p-div" >
                    <p class="checkout-product-container-row2-column2-label-p">
                      ${onedaysShipping}
                    </p>
                    <p class="checkout-product-container-row2-column2-label-p2"> $9.99 - Shipping</p>
                  </div>
                </label>
              </div>
            </div>
          </div>`
      document.querySelector('.js-Product-order-parent-div')
      .innerHTML= 
      `<div class="Products-parent-div">${addedproduct}</div>
      <div class="checkoutPlaceorder-container">
      <p class="checkoutPlaceorder-container-p1">Order Summary</p>
      <div class="checkoutPlaceorder-container-div1">
        <p>Items (${Itemsquantity}):</p>
        <p>$${(Itemsprice/100).toFixed(2)}</p>
      </div>
      <div class="checkoutPlaceorder-container-div2">
        <p>Shipping & handling:</p>
        <p class="js-checkoutPlaceorder-container-div2">$0.00</p>
      </div>
      <hr class="checkoutPlaceorder-container-hr1" />
      <div class="checkoutPlaceorder-container-div3">
        <p>Total before tax:</p>
        <p>$20.89</p>
      </div>
      <div class="checkoutPlaceorder-container-div4">
        <p>Estimated tax (10%):</p>
        <p>$2.09</p>
      </div>
      <div class="checkoutPlaceorder-container-div5">
        <p>Order total:</p>
        <p>$22.98</p>
      </div>
      <button class="checkoutPlaceorder-container-button">
        Place your order
      </button>
    </div>`
    ;
    }
    checkout ();
  })
});
Shippingpprice();
};
function emptycartmessage (){
  if (cart.length === 0) {
    document.querySelector('.js-Product-order-parent-div')
    .innerHTML= 
    `<div>
      <p class="empty-cart-message">Your cart is empty</p>
     <a href="../Amazon html/amazon.html">
     <button class="View-product-btn">View product</button>
     </a>
     </div>
     <div class="checkoutPlaceorder-container">
     <p class="checkoutPlaceorder-container-p1">Order Summary</p>
     <div class="checkoutPlaceorder-container-div1">
       <p>Items (0):</p>
       <p>$0.00</p>
     </div>
     <div class="checkoutPlaceorder-container-div2">
       <p>Shipping & handling:</p>
       <p>$0.00</p>
     </div>
     <hr class="checkoutPlaceorder-container-hr1" />
     <div class="checkoutPlaceorder-container-div3">
       <p>Total before tax:</p>
       <p>$0.00</p>
     </div>
     <div class="checkoutPlaceorder-container-div4">
       <p>Estimated tax (10%):</p>
       <p>$0.00</p>
     </div>
     <div class="checkoutPlaceorder-container-div5">
       <p>Order total:</p>
       <p>$0.00</p>
     </div>
     <div class="checkoutPlaceorder-container-button-div">
      <button class="checkoutPlaceorder-container-button">
        Place your order
      </button>
     </div>
     
   </div>
     `
  };
};
checkouProduct ();


    
function addDeleteListeners() {
  const deleteitem = document.querySelectorAll('.js-cart-delete-lnk');

  deleteitem.forEach((dlt) => {
    dlt.addEventListener('click', () => {

      cart.forEach((item, index) => {
        if (item.productId === Number(dlt.dataset.productId)) {
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          checkouProduct();
          Shippingpprice();
          addDeleteListeners();
          updatebttn ();
          checkout ();
          emptycartmessage ();
        }
      });
      console.log(cart)
    });
  });
}

function updatebttn (){
  const updatelnk = document.querySelectorAll('.js-cart-Update-lnk');
const label = document.querySelectorAll('.js-product-Quantity');
updatelnk.forEach((updatebtn)=>{
  updatebtn.addEventListener('click', () => {
      label.forEach((labels)=>{
        if(Number( updatebtn.dataset.productId) === Number( labels.dataset.productId)){
          if (updatebtn.innerHTML === `Update`){
            cart.forEach((items)=>{
              if (items.productId === Number(updatebtn.dataset.productId)){
                labels.innerHTML = 
              `<label >
                <input class="product-Quantity-label js-product-Quantity-label"
                  data-product-id="${labels.dataset.productId}"
                  type="number"
                  value="${items.quantity}"
                  min="1"
                />
              </label>`;
        
              updatebtn.innerHTML = `Save`;
              }
              
            })
           

          }else if (updatebtn.innerHTML === `Save`){
            const inputlabel = document.querySelectorAll('.js-product-Quantity-label');
            cart.forEach((items)=>{
              if (items.productId === Number(updatebtn.dataset.productId)){
                  inputlabel.forEach((inputlabels)=>{
                    if (items.productId === Number(inputlabels.dataset.productId)){
                     items.quantity = Number(inputlabels.value)
                     localStorage.setItem('cart', JSON.stringify(cart))
                     JSON.parse(localStorage.getItem(cart))
                      checkouProduct();
                      Shippingpprice();
                      addDeleteListeners();
                      updatebttn ();
                    }
                    
                  })
                  
              }
              
            })
            
            console.log(cart);
          }
          
      }


      })
      
      
    });
  })
}


checkouProduct();
Shippingpprice();
checkout();
addDeleteListeners();
updatebttn ();

emptycartmessage ();




  
 