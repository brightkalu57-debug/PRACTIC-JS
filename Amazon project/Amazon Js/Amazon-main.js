import { product } from "./Amazon-product.js";
import { addcartbtn } from "./Amazon-add to cart button.js";
let html = '';
  product.forEach(mainhtml => {
    html += `<div class="main-div">
    <div class="main-div-img">
      <img
        src="${mainhtml.img}"
      />
    </div>
    <div class="main-div-discription">
      ${mainhtml.name}
    </div>
    <div class="main-rating-div">
      <img
        class="main-rating-img-div"
        src="../Amazon images/rating-${mainhtml.ratingstars}.Amazon.png"
      />
      <p class="main-rating-p1-div">${mainhtml.ratingno}</p>
    </div>
    <p class="main-p1-div">$${(mainhtml.pricecents/100).toFixed(2)}</p>
    <select
      id="quantity"
      name="quantity"
      class="main-dropdownmenu-div"
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
    </select>
    <button class="main-addcartbtn-div js-main-addcartbtn" data-product-id="${mainhtml.id}">Add to Cart</button>
  </div>`                                                 
  document.querySelector('.js-maincontainer').innerHTML = html;
})
;
addcartbtn();