import { product } from "../Amazon data/Amazon-product.js";
import { addcartbtn } from "./Amazon-add to cart button.js";
import {formatcurrency} from "../Amazon-utils/Amazon-format-money.js";

let html = '';

function renderHtml(products) {
  html += 
  `<div class="main-div">
    <div class="main-div-img">
      <img
        src="${products.img}"
      />
    </div>
    <div class="main-div-discription">
      ${products.name}
    </div>
    <div class="main-rating-div">
      <img
        class="main-rating-img-div"
        src="../Amazon images/rating-${products.ratingstars}.Amazon.png"
      />
      <p class="main-rating-p1-div">${products.ratingno}</p>
    </div>
    <p class="main-p1-div">$${formatcurrency(products.pricecents)}</p>
    <select
      data-product-id="${products.id}"
      name="quantity"
      class="main-dropdownmenu-div js-main-dropdownmenu-div"
    >
      <option
        value="1"
        selected
      >
        1
      </option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="5">4</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option> 
      <option value="10">10</option>
    </select>
    <button class="main-addcartbtn-div js-main-addcartbtn" data-product-id="${products.id}">Add to Cart</button>
  </div>`;
}


const searchInput = document.querySelector('.js-header-column2-input');

const searchButton = document.querySelector('.js-header-column2-button');

function searchProduct (){
  html = '';
  let addmatchingProduct = 0;

  product.forEach(products => {

    const inputValue = searchInput.value.toLowerCase();

    const matchingProduct = products.keywords.some((keyword)=>{
      return keyword.toLowerCase().includes(inputValue)
    });

    if(matchingProduct){
      renderHtml(products);
      addmatchingProduct++
    } ;
  
    document.querySelector('.js-maincontainer').innerHTML = html;
    addcartbtn();
  })

  if(addmatchingProduct === 0 ){
    document.querySelector('.js-maincontainer').innerHTML = 'No products matched your search.';
  } 
}

function allProductRendering (){
  product.forEach(products => {
    renderHtml(products);
    
  });
  document.querySelector('.js-maincontainer').innerHTML = html;
  addcartbtn();
}
allProductRendering ();

 
searchButton.addEventListener('click', ()=>{
  searchProduct ();
});
searchInput .addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    searchProduct ();
  }
})