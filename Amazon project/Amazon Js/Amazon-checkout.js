import { product } from "./Amazon-product.js";
import {cart} from "./Amazon-cart.js";
product.forEach(mainhtml => {});
let addedproduct = '';
product.forEach(productitems => {
  cart.forEach(cartitems => {
    if (cartitems.productId === productitems.id ) {
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
                    Quantity: ${cartitems.quantity} <span>Update</span><span> Delete</span>
                  </p>
                </div>
              </div>
              <div class="checkout-product-container-row2-column2">
                <p class="checkout-product-container-row2-column1-p1">
                  Choose a delivery option:
                </p>
                <label class="checkout-product-container-row2-column2-label1">
                  <input
                    type="radio"
                    name="${cartitems.productId}"
                  />
                  <p class="checkout-product-container-row2-column2-label-p">
                    Friday, July 31<span> FREE Shipping</span>
                  </p>
                </label>
                <label class="checkout-product-container-row2-column2-label2">
                  <input
                    type="radio"
                    name="${cartitems.productId}"
                  />
                  <p class="checkout-product-container-row2-column2-label-p">
                    Monday, July 27 <span>$4.99 - Shipping</span>
                  </p>
                </label>
                <label class="checkout-product-container-row2-column2-label3">
                  <input
                    type="radio"
                    name="${cartitems.productId}"
                  />
                  <p class="checkout-product-container-row2-column2-label-p">
                    Thursday, July 23<span> $9.99 - Shipping</span>
                  </p>
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
        <p>Items (1):</p>
        <p>$10.90</p>
      </div>
      <div class="checkoutPlaceorder-container-div2">
        <p>Shipping & handling:</p>
        <p>$9.99</p>
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
  })
})


