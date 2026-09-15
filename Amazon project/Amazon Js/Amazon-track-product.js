import {orders} from "./Amazon-order/amazon-render-order.js";
import {formatDate} from "./Amazon-order/amazon-render-order.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

function trackPackageHtml (){
    let html;
    const params = new URLSearchParams(window.location.search);

    const paramsOrderId = params.get('orderId');
    const paramsProductId = params.get('productId');

    const matchingOrder = orders.find(order=> order.ID === paramsOrderId);
    const matchingItem = matchingOrder.Items.find(Item => Item.productId === Number(paramsProductId));



    const orderTime = dayjs(matchingOrder.orderDate) ;
    const currentTime = dayjs();
    const deliveryTime = dayjs(matchingItem.deliverysDate);

    const totalTime = deliveryTime.diff(orderTime);
    const elaspedTime = currentTime.diff(orderTime);

    let progressBarPercentage = Math.max(5, Math.min((elaspedTime/totalTime)*100, 100) );
    console.log(progressBarPercentage);


    function deliveryStatus (){
        if (progressBarPercentage === 100){
            return 'Delivered on'
        }else{
            return 'Arriving on'
        };
    };

    html = 
    `<p class="deliverystatus">${deliveryStatus ()} ${formatDate(matchingItem.deliverysDate)}</p>
    <p class="product-name">
        ${matchingItem.Name}
    </p>
    <p class="product-Quantity">Quantity: ${matchingItem.quantity}</p>
    <div class="img-container">
        <img
        src="${matchingItem.img}"
        />
    </div>
    <div class="delivery-container">
        <div class="delivery-container-p-div">
        <p class="delivery-container-p js-delivery-container-p1">Preparing</p>
        <p class="delivery-container-p js-delivery-container-p2">Shipped</p>
        <p class="delivery-container-p js-delivery-container-p3">Delivered</p>
        </div>
        <div class="deliveryprogressbar-container js-deliveryprogressbar-container">
            <div class="deliveryprogressbar js-deliveryprogressbar"</div>
        </div>
    </div>`;
    document.querySelector('.js-Trackproduct-container').innerHTML = html;


    const progressbar = document.querySelector('.js-deliveryprogressbar');
    const pElement1 = document.querySelector('.js-delivery-container-p1');
    const pElement2 = document.querySelector('.js-delivery-container-p2');
    const pElement3 = document.querySelector('.js-delivery-container-p3');

    setTimeout(() =>{
        if(progressbar){
            progressbar.style.width = `${progressBarPercentage}%`;
        }
    }, 50);

    if(progressBarPercentage < 50){
        pElement1.style.color = `green`;
    }
    else if (progressBarPercentage >= 50 && progressBarPercentage < 100){
        pElement2.style.color = `green`;
    }else if (progressBarPercentage === 100){
        pElement3.style.color = `green`;
    }
}
trackPackageHtml ();
