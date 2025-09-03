import { dataFrom } from "../api.js";
import { parseEvent } from "../helper.js";
import { setMessage, updateCartUI } from "../app.js";
const geo = await dataFrom(parseEvent);

export class CartObj extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.onCart = false;
    }

    connectCallback() {
        const obj = this.getObject(this.id, geo);

    }

    renderCart(title, price, img, rate, rateCount, dec, id) {
        this.id = id;
        this.shadowRoot.innerHTML = `
            <style>
                .itemCard {
                position: relative;
                animation: load 0.8s ease 0s 1;
                border-radius: 10px;
                width: 70%;
                height: 200px;
                font-family: var(--bodyFont);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                transition: all 0.5s ease;
                box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.199);
                }

                .itemCard:hover {
                box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.199);
                }

                .left-content {
                display: flex;
                justify-content: center;
                align-items: center;
                }

                .content_container {
                max-width: 300px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                }

                .titleCard {
                text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.295);
                margin-top: 10px;
                margin-bottom: 0px;
                font-size: 1rem;
                width: 220px;
                height: 60px;
                overflow: hidden;
                text-align: start;
                }

                .titleCard:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }

                .imgCard {
                min-width: 100px;
                max-width: 300px;
                height: 160px;
                padding: 40px;
                }

                .cardPrice {
                font-size: 1.5rem;
                align-self: flex-start;
                font-weight: bold;
                text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.185);
                margin-bottom: 0;
                margin-top: 0;
                }

                .decCard {
                    min-width: 200px;
                    height: 60px;
                    font-size: 0.9rem;
                    color: #252525;
                    margin-top: 5px;
                    margin-bottom: 0px;
                }

                .cardRate {
                    margin: 0;
                    font-size: 1rem;
                }

                .cardRateCount {
                    margin: 0;
                    font-weight: bold;
                }

                .rate-container {
                    right: 40px;
                    top: 0;
                    position: absolute;
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .rate-container div {
                display: flex;
                gap: 5px;
                align-items: center;
                }

                .cardButton {
                background-color: #252525;
                padding: 10px 0px;
                width: 55px;
                height: 60px;
                text-align: center;
                color: white;
                border-radius: 10px;
                transition: all 0.3s ease;
                margin-top: 30px;
                background-image: url("../src/delete-img.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 65%;
                margin-right: 30px;
                }

                .cardButton:hover {
                background-color: rgb(207, 67, 67);
                cursor: pointer;
                transform: scale(103%);
                }
            </style>
        

            <div class="itemCard">
            
            <div class="left-content">
                <img src="${img}" alt="Imagen" class="imgCard"/>
                <div class="content-container">
                    <p class="titleCard">${title}</p>
                    <p class="cardPrice">${price}</p>
                    <p class="decCard">${dec}</p>
                </div>
            </div>
            
            <div class="rate-container">
                <div>
                    <img src="../src/star.svg" alt="Icon" />
                    <p class="cardRate">${rate}</p>
                </div>

                <p class="cardRateCount">( ${rateCount})</p>
            </div>
            <div class="cardButton"></div>
            
        </div>

        `;
    }

    getObject(id, geo) {
        return geo.find(e => e.id == id);
    }

}

customElements.define("cart-card", CartObj);