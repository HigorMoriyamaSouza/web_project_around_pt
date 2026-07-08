/*
 * STORES APPLICATION'S CONSTANTS
 * USED BY: 
    ../scripts/index.js  
    ../components/Card.js
    ../components/PopupWithForms.js
    ../components/UserInfo.js
*/
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

export const formValidatorSetup = {
    fieldsClass: ".popup__input", 
    formButtonClass: ".popup__button",
    errorClasses: {
        inputError: "-input-error", 
        typeError: "popup__input_type_error", 
        errorActive: "popup__input-error_active"
    }
};
export const cardClassSetup = {
    "cardTemplate" : "#cards-template",
    "templateCardElement" : ".card",
    "cardDeleteButton" : ".card__delete-button",
    "cardLikeButton" : ".card__like-button",
    "cardLikeButtonActive" : "card__like-button_is-active",
    "cardTitle" : ".card__title",
    "cardImg" : ".card__image",
    "cardImagePopup" : "#image-popup"
}
export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const profileImageContainer = document.querySelector(".profile__image-container");
export const profileImage = document.querySelector(".profile__image");
export const editPopup = document.querySelector("#edit-popup");
export const editPopupCloseButton = editPopup.querySelector(".popup__close");
export const editPopupForm = editPopup.querySelector("#edit-profile-form");
export const editPopupFormNameInput = editPopupForm.querySelector(".popup__input_type_name");
export const editPopupFormDescriptionInput = editPopupForm.querySelector(".popup__input_type_description");
export const cardsTemplate = document.querySelector("#cards-template").content.querySelector(".card");
export const cardContainer = document.querySelector(".cards__list");
export const newCardButton = document.querySelector(".profile__add-button");
export const newCardPopup = document.querySelector("#new-card-popup");
export const newCardPopupForm = newCardPopup.querySelector("#new-card-form")
export const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");
export const newCardTitle = newCardPopup.querySelector(".popup__input_type_card-name");
export const newCardLink = newCardPopup.querySelector(".popup__input_type_url");
export const imagePopup = document.querySelector("#image-popup");
export const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
export const imagePopupImgElement = imagePopup.querySelector(".popup__image");
export const imagePopupCaption = imagePopup.querySelector(".popup__caption");

/*
 * STORES CARD RENDERING FUNCTION AND SECTION/CARD INSTANCES.
 */
export const cardRender = (cards, isNewItem) => {
    const cardList = new Section({
        items: cards,
        renderer:  (card) => {
            const cardInstance = new Card (card, cardClassSetup);
            const cardElement = cardInstance.generateCard();
            
            cardList.addItem(cardElement, isNewItem);
        }
    }, ".cards__list");
    cardList.renderer();
}   

/*
 * STORES API INSTANCE AND PASSES IT'S CONFIGURATIONS. 
 */
export const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "b7d7e2ae-30db-4953-94d1-6a394992fa77",
    "Content-Type": "application/json"
  }
});