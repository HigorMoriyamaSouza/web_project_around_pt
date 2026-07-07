/*
 * HANDLES CARDS CREATION
*/
import PopupWithImage from "./PopupWithImage.js";
import { 
    imagePopupImgElement,
    imagePopupCaption,
    api
} from "../utils/constants.js";
import Popup from "./Popup.js";

export default class Card {
    constructor(card, settings) {
        this._id = card._id || null;
        this._title = card.name;
        this._link = card.link;
        this._isLiked = card.isLiked;
        this._settings = settings;

        this._popupImage = new PopupWithImage(this._settings.cardImagePopup, () => {
            imagePopupImgElement.alt = this._title;
            imagePopupCaption.textContent = this._title;
            imagePopupImgElement.src = this._link;
        });

        this._popupDeleteCard = new Popup("#delete-card-popup");
    }

    /*
     * HANDLES CARDS GENERATION LOGIC
    */
    _getTemplate() {
        const cardElement = document
            .querySelector(this._settings.cardTemplate)
            .content
            .querySelector(this._settings.templateCardElement)
            .cloneNode(true);

        return cardElement;
    }
    
    _cardLikeOrDislikeVisualEffectAtLoad(cardLikeButton) {
        console.log(this._isLiked);
        if (this._isLiked) {
            cardLikeButton.classList.add(this._settings.cardLikeButtonActive);
        } else {
            cardLikeButton.classList.remove(this._settings.cardLikeButtonActive);
        }
    }

    _eventListenersHandler(cardElement, cardImage) {
        const cardDeleteButton = cardElement.querySelector(this._settings.cardDeleteButton);
        cardDeleteButton.addEventListener("click", () => {
            this._popupDeleteCard.open();

            const cardConfirmDeletitionPopupButton = document.querySelector(".popup__button_type_confirm-delete");
            cardConfirmDeletitionPopupButton.addEventListener("click", async () => {
                try{
                    const response = await api.deleteCard(this._id);
                    console.log("Transaction succeded: ", response);
                } catch (error) {
                    console.log("Error while deleting card: ", error);
                }

                cardElement.remove();
                this._popupDeleteCard.close();
            });
        });
        
    
        const cardLikeButton = cardElement.querySelector(this._settings.cardLikeButton);
        cardLikeButton.addEventListener("click", async (event) => {
            if (this._isLiked) {
                try{
                    const response = await api.dislikeCard(this._id);
                    console.log("Transaction succeded: ", response);
                } catch (error) {
                    console.log("Error while dsliking card: ", error);
                }
                this._isLiked = false;
            } else {
                try{
                    const response = await api.likeCard(this._id);
                    console.log("Transaction succeded: ", response);
                } catch (error) {
                    console.log("Error while dsliking card: ", error);
                }
                this._isLiked = true;
            }

            this._cardLikeOrDislikeVisualEffectAtLoad(cardLikeButton);
        });

        cardImage.addEventListener("click", () => { this._popupImage.open() });
    }

    generateCard() {
        const cardElement = this._getTemplate();
        const cardTitle = cardElement.querySelector(this._settings.cardTitle);
        const cardImage = cardElement.querySelector(this._settings.cardImg);
        const cardLikeButton = cardElement.querySelector(this._settings.cardLikeButton);
        
        cardImage.src = this._link;
        cardImage.alt = this._title;
        cardTitle.textContent = this._title;

        this._cardLikeOrDislikeVisualEffectAtLoad(cardLikeButton);
        this._eventListenersHandler(cardElement, cardImage);
        
        return cardElement;
    }


    /*
     * HANDLES CARD DATA 
    */
    // async getCards() {
    //     try{
    //         const response = await api.getCards();
    //         console.log("Transaction succeded: ", response);
    //     } catch (error) {
    //         console.log("Error while loading cards: ", error);
    //     }
    // }
    
    // async newCard() {
    //     try{
    //         const response = await api.newCard(this._title, this._link);
    //         console.log("Transaction succeded: ", response);
    //     } catch (error) {
    //         console.log("Error while saving card: ", error);
    //     }
    // }
}
