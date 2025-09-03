
import { setMessage } from "./app.js";
let LocalObj = localStorage.getItem("actualObj");
let ActualObj = LocalObj ? JSON.parse(LocalObj) : {};
let onCart = false;

let LocalCart = localStorage.getItem("Cart");
let cart = LocalCart ? JSON.parse(LocalCart) : []; 
console.log(ActualObj);

const cTitle = document.querySelector(".title");
const cImg = document.querySelector(".product-img");
const cDec = document.querySelector(".descripcion");
const cPrice = document.querySelector(".price");
const cRate = document.querySelector(".rate-text");
const cRateCount = document.querySelector(".rate-count-text");
const cCategory = document.querySelector(".category-text");
const cartButton = document.querySelector(".btn1");


onCart = cart.some(e => e.id === ActualObj.id);

console.log(onCart)
if (cartButton) {
    if(onCart) {cartButton.textContent = "Remove from cart";} else {cartButton.textContent = "Add to cart"}

cartButton.addEventListener("click", () => {

    onCart = cart.some(e => e.id === ActualObj.id);

    if(!onCart) {
        cart.push(ActualObj);
        cartButton.textContent = "Remove from cart"
        onCart = true;
        setMessage("Operación", "Item añadido al carrito")
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCartUI();
    } else {
        cart.forEach((e, i) => {
            if (e.id == ActualObj.id) { cart.splice(i, 1)}
        })

        setMessage("Operación", "Item removido del carrito")
        cartButton.textContent = "Add to cart"
        onCart = false;
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCartUI();
    }
    onCart = cart.some(e => e.id === ActualObj.id);
})

}


export function actualizarDatos(obj) { 
    if (cTitle && cCategory && cDec && cImg && cPrice && cRate && cRateCount) {
        cTitle.textContent = obj.title
        cImg.src = obj.image;
        cDec.textContent = obj.description;
        cPrice.textContent = `$ ${obj.price} (USD)`;
        cRate.textContent = obj.rating.rate;
        cRateCount.textContent = `( ${obj.rating.count})`;
        cCategory.textContent = obj.category;
        updateCartUI()
    }
}

function updateCartUI() {
  let LocalCart = localStorage.getItem("Cart");
  let cart = LocalCart ? JSON.parse(LocalCart) : [];
  let cartUI = document.querySelector(".cart-count");
  cartUI.style.animation = "none";
  cartUI.offsetHeight;
  cartUI.style.animation =  "cartAnimation 0.3s ease 1";
  
  cartUI.textContent = cart.length;
}


actualizarDatos(ActualObj);