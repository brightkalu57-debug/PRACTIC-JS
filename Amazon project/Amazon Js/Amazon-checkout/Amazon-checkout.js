import { product } from "../Amazon data/Amazon-product.js";
import {cart} from "../Amazon data/Amazon-cart.js";
import {deliverysInfo} from "./delivery-options.js";
import {addRadioEventListener} from "./delivery-options.js";
import {radiosdeliveryoption} from "./delivery-options.js";
import {formatcurrency } from "../Amazon-utils/Amazon-format-money.js";
import {priceSummary} from "./Amazon-price-summary.js"
import {priceSummaryVariables} from "./Amazon-price-summary.js"

function updateCheckoutQuantityHtml (){
  let checkoutQuantity = 0;
      cart.forEach((item) => {
        checkoutQuantity += item.quantity;
      })

      document.querySelector('.js-header-p1-span')
      .innerHTML =`${checkoutQuantity} items`;
};

export function checkouProduct (){
  priceSummaryVariables();
  let addedProduct = '';
  const radiosoption = radiosdeliveryoption();
  
  product.forEach(productItems => {
    cart.forEach((cartItems) => {
        if (cartItems.productId === productItems.id ) {
          const delivery = deliverysInfo(cartItems);
          const priceSummaries = priceSummary(productItems, cartItems);

          addedProduct +=
            `<div class="checkout-product-container">
              <p class="checkout-product-container-row1-p1 js-checkout-product-container-row1-p1 ">
              ${delivery.deliveryDate}
              </p>
              <div class="checkout-product-container-row2">
                <div class="checkout-product-container-row2-column1">
                  <div class="checkout-product-container-row2-column1-img-div">
                    <img
                      src="${productItems.img}"
                    />
                  </div>
                  <div class="checkout-product-container-row2-column1-column2">
                    <p class="checkout-product-container-row2-column1-column2-p1">
                      ${productItems.name}
                    </p>
                    <p class="checkout-product-container-row2-column1-column2-p2">
                      $${formatcurrency(productItems.pricecents)}
                    </p>
                    <p class="checkout-product-container-row2-column1-column2-p3">
                      Quantity: 
                      <span class='js-product-Quantity' data-product-id="${productItems.id}">${cartItems.quantity}</span> 
                      <span class='lnk js-cart-Update-lnk' data-product-id="${productItems.id}">Update</span>
                      <span class='lnk js-cart-delete-lnk' 
                      data-product-id="${productItems.id}"> Delete</span>
                    </p>
                  </div>
                </div>
                <div class="checkout-product-container-row2-column2">
                  <p class="checkout-product-container-row2-column1-p1">
                    Choose a delivery option:
                  </p>
                  <label class="checkout-product-container-row2-column2-label1 js-checkout-label" 
                  data-product-id="${cartItems.productId}" data-product-name ="FREEShipping">
                    <input
                      class="js-checkout-labelradio" 
                      type="radio"
                      data-product-id="${cartItems.productId}"
                      data-delivery-option-id = "1"
                      name="${cartItems.productId}"
                      ${cartItems.deliveryOptionId === 1 ? 'checked': ''}
                    />
                    <div class="checkout-product-container-row2-column2-label-p-div" >
                      <p class="checkout-product-container-row2-column2-label-p js-checkout-product-container-row2-column2-label-p">
                      ${radiosoption.radio1.deliveryDate}
                      </p>
                      <p class="checkout-product-container-row2-column2-label-p2"> FREE Shipping</p>
                    </div>
                    
                  </label>
                  <label class="checkout-product-container-row2-column2-label2 js-checkout-label" 
                  data-product-id="${cartItems.productId}"
                  data-product-name ="ThreedaysShipping"
                  >
                    <input
                      class="js-checkout-labelradio" 
                      type="radio"
                      data-product-id="${cartItems.productId}"
                      data-delivery-option-id = "2"
                      name="${cartItems.productId}"
                      ${cartItems.deliveryOptionId === 2 ? 'checked': ''}
                    />
                    <div class="checkout-product-container-row2-column2-label-p-div" >
                    <p class="checkout-product-container-row2-column2-label-p ">
                    ${radiosoption.radio2.deliveryDate}
                    </p>
                    <p class="checkout-product-container-row2-column2-label-p2">$4.99 - Shipping</p>
                    </div>
                    
                  </label>
                  <label class="checkout-product-container-row2-column2-label3 js-checkout-label" 
                  data-product-id="${cartItems.productId}"
                  data-product-name ="onedaysShipping"
                  >
                    <input
                      class="js-checkout-labelradio" 
                      type="radio"
                      data-product-id="${cartItems.productId}"
                      data-delivery-option-id = "3"
                      name="${cartItems.productId}"
                      ${cartItems.deliveryOptionId === 3 ? 'checked': ''}
                    />
                    <div class="checkout-product-container-row2-column2-label-p-div" >
                      <p class="checkout-product-container-row2-column2-label-p">
                      ${radiosoption.radio3.deliveryDate}
                      </p>
                      <p class="checkout-product-container-row2-column2-label-p2"> $9.99 - Shipping</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>`
        document.querySelector('.js-Product-order-parent-div')
        .innerHTML= 
        `<div class="Products-parent-div">${addedProduct}</div>
        <div class="checkoutPlaceorder-container">
        <p class="checkoutPlaceorder-container-p1">Order Summary</p>
        <div class="checkoutPlaceorder-container-div1">
          <p>Items (${priceSummaries.ItemsQuantity}):</p>
          <p>$${formatcurrency(priceSummaries.ItemsPrice)}</p>
        </div>
        <div class="checkoutPlaceorder-container-div2">
          <p>Shipping & handling:</p>
          <p class="js-checkoutPlaceorder-container-div2">$${formatcurrency(priceSummaries.addShippingPrices)}</p>
        </div>
        <hr class="checkoutPlaceorder-container-hr1" />
        <div class="checkoutPlaceorder-container-div3">
          <p>Total before tax:</p>
          <p>$${formatcurrency(priceSummaries.totalBeforeTax)}</p>
        </div>
        <div class="checkoutPlaceorder-container-div4">
          <p>Estimated tax (10%):</p>
          <p>$${formatcurrency(priceSummaries.estimatedTax)}</p>
        </div>
        <div class="checkoutPlaceorder-container-div5">
          <p>Order total:</p>
          <p>$${formatcurrency(priceSummaries.orderTotal)}</p>
        </div>
        <button class="checkoutPlaceorder-container-button">
          Place your order
        </button>
      </div>`
      ;
      }
      updateCheckoutQuantityHtml();
    })
  })
  addRadioEventListener();
  addDeleteListeners();
  updatebttn ();
  emptycartmessage ();
};


checkouProduct();
function emptycartmessage (){
  if (cart.length === 0) {
    document.querySelector('.js-Product-order-parent-div')
    .innerHTML= 
    `<div>
      <p class="empty-cart-message">Your cart is empty</p>
     <a href="amazon-homepage.html">
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
     `;
     
  updateCheckoutQuantityHtml();
  };
};


    
function addDeleteListeners() {
  const deleteitem = document.querySelectorAll('.js-cart-delete-lnk');

  deleteitem.forEach((dlt) => {
    dlt.addEventListener('click', () => {

      cart.forEach((item, index) => {
        if (item.productId === Number(dlt.dataset.productId)) {
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          checkouProduct();
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
            cart.forEach((items, index)=>{
              inputlabel.forEach((inputlabels)=>{
                if ((inputlabels.validity.badInput) === true ){
                  if (items.productId === Number(updatebtn.dataset.productId)){
                    alert('Not a valid quantity')
                  }
                  checkouProduct()
                  
                }else if(inputlabels.value < 0 ){
                  if (items.productId === Number(updatebtn.dataset.productId)){
                    alert('Not a valid quantity')
                  }
                }else if(Number(inputlabels.value) === 0){
                  if (items.productId === Number(updatebtn.dataset.productId)){
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    checkouProduct();
                  }
                  
                }else{
                  if (items.productId === Number(updatebtn.dataset.productId)){
                      if (items.productId === Number(inputlabels.dataset.productId)){
                        items.quantity = Number(inputlabels.value)
                       localStorage.setItem('cart', JSON.stringify(cart))
                        checkouProduct();
                      }
                    
                };
                }
                console.log((inputlabels.validity.badInput));
              })
            })
          
            console.log(cart);
          }
          
      }


      })
      
      
    });
  })
}


updateCheckoutQuantityHtml();
emptycartmessage ();




  
 