/*
 * HANDLES CARDS CREATION
*/

import { 
    imagePopup,
    imagePopupImgElement,
    imagePopupCaption, 
    openModal,
} from "./utils.js";

class Card {
    constructor(card, cardSelector) {
        this._title = card.title;
        this._link = card.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".card")
            .cloneNode(true);

        return cardElement;
    }
    
    _eventListenersHandler(cardElement, cardImage) {
        const cardDeleteButton = cardElement.querySelector(".card__delete-button");
        cardDeleteButton.addEventListener("click", () => cardElement.remove());
    
        const cardLikeButton = cardElement.querySelector(".card__like-button");
        cardLikeButton.addEventListener("click", (event) => {
            event.target.classList.toggle("card__like-button_is-active");
        });

        cardImage.addEventListener("click", () => {
            imagePopupImgElement.alt = this._title;
            imagePopupCaption.textContent = this._title;
            imagePopupImgElement.src = this._link;
    
            openModal(imagePopup);
        });
    }

    generateCard() {
        const cardElement = this._getTemplate();
        const cardTitle = cardElement.querySelector(".card__title");
        const cardImage = cardElement.querySelector(".card__image");
        
        cardImage.src = this._link;
        cardImage.alt = this._title;
        cardTitle.textContent = this._title;

        this._eventListenersHandler(cardElement, cardImage);
        
        return cardElement;
    }
}

export default Card;