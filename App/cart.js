import { CartObj } from "./object/cartObj.js";

let Localcart = localStorage.getItem("Cart");
let cart = Localcart ? JSON.parse(Localcart) : [];


const iProducts = document.querySelector(".info-products");
const iTotal = document.querySelector(".info-total");

function updateCartData() {
    let subtotal = 0;
    cart.forEach(element => {
        subtotal += element.price;
    });

    iTotal.textContent = `Subtotal: $${subtotal}`;
    iProducts.textContent = `Productos: ${cart.length}`;
}


function renderCard(obj) {
    const mainCard = document.querySelector("main");
    if (mainCard) {
        //mainCard.querySelectorAll("render-card").forEach(card => card.remove());
    
  
    obj.forEach((e) => {
      const element = document.createElement("cart-card");
      element.renderCart(e.title, e.price, e.image, e.rating.rate, e.rating.count, e.description,e.id);
      document.querySelector("main").appendChild(element);
    })
    }
    
}

renderCard(cart);


updateCartData();
