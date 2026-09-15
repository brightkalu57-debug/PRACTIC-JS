import { cart } from "../Amazon data/Amazon-cart.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


const deliveryOption = [{
    id: 1,
    shippingPrice: 0,
    deliveryDate: dayjs().add(7, 'days')
},{
    id: 2,
    shippingPrice: 499,
    deliveryDate: dayjs().add(3, 'days')
},{
    id: 3,
    shippingPrice: 999,
    deliveryDate: dayjs().add(1, 'days')
},
]
export function formatDate(date){
    return dayjs(date).format('dddd, MMMM D');
}
export function addRadioEventListener (checkouProduct){
    
    const radio = document.querySelectorAll('.js-checkout-labelradio');

    radio.forEach((radios)=>{
        radios.addEventListener('change', ()=>{
            cart.forEach((cartitems)=>{

                if (cartitems.productId === Number(radios.dataset.productId)){

                    cartitems.deliveryOptionId = Number(radios.dataset.deliveryOptionId);
                    localStorage.setItem("cart", JSON.stringify(cart));
            
                    checkouProduct();
                }
            })

        })
    });
}

export function deliverysInfo(cartitems){
    let deliverysInfo ='';

    deliveryOption.forEach((deliveryOptions)=>{
        if (cartitems.deliveryOptionId === deliveryOptions.id){
            deliverysInfo = deliveryOptions;
            
        }
    })

    
    
    return deliverysInfo;
}

export function radiosdeliveryoption(){
    let radio1 = ''
    let radio2 = ''
    let radio3 = ''
    deliveryOption.forEach((deliveryOptions)=>{
        if (deliveryOptions.id === 1){
            radio1 = deliveryOptions;
            
        }else if (deliveryOptions.id === 2){
            radio2  = deliveryOptions;
        }else if (deliveryOptions.id === 3){
            radio3  = deliveryOptions;
        }
    })
    return {
        radio1,
        radio2,
        radio3
    }
}
