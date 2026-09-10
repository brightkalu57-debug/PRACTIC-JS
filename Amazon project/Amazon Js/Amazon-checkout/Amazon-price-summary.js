import {deliverysInfo} from "./delivery-options.js";

let ItemsQuantity;   
let ItemsPrice;
let totalBeforeTax ;
let estimatedTax ;
let addShippingPrices;
let orderTotal;

export function priceSummaryVariables (){
    ItemsQuantity = 0;   
    ItemsPrice = 0;
    totalBeforeTax = 0;
    estimatedTax = 0;
    addShippingPrices = 0;
    orderTotal = 0;
}
priceSummaryVariables ();

export function priceSummary (products, cartItems){
    
    const delivery = deliverysInfo(cartItems);
    
    ItemsQuantity += cartItems.quantity;

    ItemsPrice += (Math.round(( products.pricecents)*cartItems.quantity));

    addShippingPrices +=  delivery.shippingPrice;

    totalBeforeTax = (Math.round(addShippingPrices + ItemsPrice));

    estimatedTax = (Math.round(totalBeforeTax*(1/10)));

    orderTotal = ((ItemsPrice + addShippingPrices + estimatedTax));
    
    console.log(addShippingPrices)
    return {
        ItemsQuantity,
        ItemsPrice,
        totalBeforeTax,
        estimatedTax,
        addShippingPrices,
        orderTotal
    }
}
