/*
 * HANDLES CARDS CREATION
*/
import PopupWithImage from "./PopupWithImage.js";
import { 
    imagePopupImgElement,
    imagePopupCaption
} from "../utils/constants.js";

export default class Card {
    constructor(card, settings) {
        this._title = card.title;
        this._link = card.link;
        this._settings = settings;

        this._popupImage = new PopupWithImage(this._settings.cardImagePopup, () => {
            imagePopupImgElement.alt = this._title;
            imagePopupCaption.textContent = this._title;
            imagePopupImgElement.src = this._link;
        });
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._settings.cardTemplate)
            .content
            .querySelector(this._settings.templateCardElement)
            .cloneNode(true);

        return cardElement;
    }
    
    _eventListenersHandler(cardElement, cardImage) {
        const cardDeleteButton = cardElement.querySelector(this._settings.cardDeleteButton);
        cardDeleteButton.addEventListener("click", () => cardElement.remove());
    
        const cardLikeButton = cardElement.querySelector(this._settings.cardLikeButton);
        cardLikeButton.addEventListener("click", (event) => {
            event.target.classList.toggle(this._settings.cardLikeButtonActive);
        });

        cardImage.addEventListener("click", () => { this._popupImage.open() });
    }

    generateCard() {
        const cardElement = this._getTemplate();
        const cardTitle = cardElement.querySelector(this._settings.cardTitle);
        const cardImage = cardElement.querySelector(this._settings.cardImg);
        
        cardImage.src = this._link;
        cardImage.alt = this._title;
        cardTitle.textContent = this._title;

        this._eventListenersHandler(cardElement, cardImage);
        
        return cardElement;
    }
}