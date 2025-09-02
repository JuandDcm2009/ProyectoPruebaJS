let data;

let LocalCart = localStorage.getItem("Cart");
let cart = LocalCart ? JSON.parse(LocalCart) : []; 

const cTitle = document.querySelector(".title");
const cImg = document.querySelector(".product-img");
const cDec= document.querySelector(".descripcion");
const cPrice = document.querySelector(".price");



export function actualizarDatos(obj) {
    console.log(obj.title);
    cTitle.textContent = obj.title;
    cImg.textContent = obj.image;
    cDec.textContent = obj.description;
    cPrice.textContent = obj.price;

}