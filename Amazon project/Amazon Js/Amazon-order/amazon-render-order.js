import { product } from "../Amazon data/Amazon-product.js";
import {cart} from "../Amazon data/Amazon-cart.js";
import {formatcurrency } from "../Amazon-utils/Amazon-format-money.js";
import {priceSummary} from "../Amazon-checkout/Amazon-price-summary.js";
import {priceSummaryVariables} from "../Amazon-checkout/Amazon-price-summary.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliverysInfo} from "../Amazon-checkout/delivery-options.js";
import {updateCartHtml} from "../Amazon-home-page/Amazon-update-cart-icon-.js";


export let orders = JSON.parse(localStorage.getItem("orders")) || [];
let containedOrderitems = '' ;
const formatOrdersDate = dayjs().format('MMMM D');;


export function placeOrder (){
    const orderbttn =  document.querySelector('.js-checkoutPlaceorder-container-button');
    let orderPriceTotal;
    priceSummaryVariables();

    
    if (orderbttn) {
        orderbttn.addEventListener(`click`, () => {
            const orderItems = [];

            cart.forEach( cartItems => {
                product.forEach( products => { 
                    if (cartItems.productId === products.id ) {
                        
                        const delivery = deliverysInfo(cartItems);
                        orderPriceTotal = priceSummary(cartItems, products) ;
                        orderItems.push ({
                            Name: products.name,
                            productId: products.id,
                            quantity: cartItems.quantity,
                            price: products.pricecents,
                            img: products.img,
                            deliveryOptionId: cartItems.deliveryOptionId,
                            deliverysDate: dayjs(delivery.deliveryDate, 'dddd, MMMM D').toISOString()

                        })

                    }
                })
            });


            const orderID =  crypto.randomUUID();
            orders.unshift({
                ID: orderID,
                priceTotal: orderPriceTotal.orderTotal,
                orderDate: dayjs().toISOString(),
                Items: orderItems
            })
            localStorage.setItem("orders", JSON.stringify(orders))
            localStorage.removeItem("cart")

            
        });
    }; 

    
    
}

export function formatDate(toISOString){
   return dayjs(toISOString).format('MMMM D');
}


function generateOrderHtml (){
    const html = document.querySelector(`.js-all-ordered-product-container`);
    orders.forEach((order)=> {
        let itemsHtml ='';
        order.Items.forEach((Item)=>{
            function deliveryStatus (){
                if (Item.deliverysDate === order.ordersDate){
                    return 'Delivered on'
                }else{
                    return 'Arriving on'
                };
            };
            
            itemsHtml += 
            `<div class="Order-container-body-grid">
                <div class="Order-container-body-grid-imgdiv">
                <img
                    class="Order-container-body-grid-imgdiv-img"
                    src="${Item.img}"
                />
                </div>
                <div class="Order-container-body-grid-proudctdetails">  
                <p class="Order-container-body-grid-proudctdetails-name">
                ${Item.Name}
                </p>
                <p class="Order-container-body-grid-proudctdetails-deliverydate 
                js-Order-container-body-grid-proudctdetails-deliverydate">
                    ${deliveryStatus()}: ${formatDate(Item.deliverysDate)}
                </p>
                <p class="Order-container-body-grid-proudctdetails-quantity">
                    Quantity: ${Item.quantity}
                </p>
                <button
                    class="Order-container-body-grid-proudctdetails-buy_again_btn 
                    js-Order-container-body-grid-proudctdetails-buy_again_btn" 
                    data-product-id="${Item.productId}"
                >
                    <img src="../Amazon images/buy-again-bttn-icon.png" />
                    Buy it again
                </button>
                </div>
                <div class="Order-container-body-grid-trackpackage_btn_div">
                    <a href="../Amazon html/Trackingproduct.html?orderId=${order.ID}&productId=${Item.productId}">
                        <button class="Order-container-body-grid-trackpackage_btn">
                            Track Package
                        </button>
                    </a>
                </div>
            </div>`
        })
        
        containedOrderitems += 
        `<div class="Order-container">
            <div class="Order-container-header">
            <div class="Order-container-header-leftside">
                <div class="Order-container-header-leftside-div1">
                    <p class="Order-container-header-leftside-div1-p1">
                        Order Placed:
                    </p>
                    <p class="Order-container-header-leftside-div1-p2">${formatDate(order.orderDate)}</p>
                </div>
                <div class="Order-container-header-leftside-div2">
                    <p class="Order-container-header-leftside-div2-p1">Total:</p>
                    <p class="Order-container-header-leftside-div2-p2">$${formatcurrency (order.priceTotal)}</p>
                </div>
            </div>
            <div class="Order-container-header-rightside">
                <p class="Order-container-header-rightside-p1">Order ID:</p>
                <p class="Order-container-header-rightside-p2">
                ${order.ID}
                </p>
            </div>
            </div>
            ${itemsHtml}
        </div>`;
    }) 
    if (html) {
        html.innerHTML = containedOrderitems
    };
};
generateOrderHtml ();

function buyItAgain () {
    
    const addToCartBtn = document.querySelectorAll('.js-Order-container-body-grid-proudctdetails-buy_again_btn')
    console.log('orderbttn')
    addToCartBtn.forEach((button) => {
    button.addEventListener(`click`, () =>  
    {
        
        console.log('orderbttn')
        const productId = button.dataset.productId;
        let matchingitems ;
        cart.forEach(items => {
            if (items.productId === Number(productId)) {
                matchingitems = items;
            }
        });
        
        const  select = document.querySelectorAll('.js-main-dropdownmenu-div');
        if(matchingitems) {
            matchingitems.quantity += 1
        }else {
            cart.unshift ({
            productId: Number(productId),
            quantity: 1,
            deliveryOptionId: 1
            });
        };

        updateCartHtml ();
        localStorage.setItem("cart", JSON.stringify(cart));

    });
});
};
buyItAgain();




