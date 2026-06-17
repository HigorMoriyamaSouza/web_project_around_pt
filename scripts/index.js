import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    initialCards,
    profileEditButton,
    newCardButton,
    newCardTitle,
    newCardLink,
    cardClassSetup
} from "../utils/constants.js";

/*
 * HANDLES EXISTENT CARDS CREATION
*/
const existentCardList = new Section({
    items: initialCards,
    renderer:  (card) => {
        const cardInstance = new Card ({ title: card.name, link: card.link }, cardClassSetup);
        const cardElement = cardInstance.generateCard();

        existentCardList.addItem(cardElement, false);
    }
}, ".cards__list");

existentCardList.renderer();

/*
 * HANDLES PROFILE EDITION 
*/
const userInfo = new UserInfo({
    userName_elementSelector: ".popup__input_type_name", 
    userTitle_elementSelector: ".popup__input_type_description"
});

const profileEditFormComponent = new PopupWithForm("#edit-popup", (event) => {
    event.preventDefault();
    userInfo.setUserInfo();
    profileEditFormComponent.close();
});

profileEditButton.addEventListener("click", () => {
    userInfo.fillUserProfileForm();
    profileEditFormComponent.open();
});

/*
 * HANDLES NEW CARDS ADDITION
*/
const newCardFormComponent = new PopupWithForm("#new-card-popup", (event) => {
    event.preventDefault();

    const newCard = new Section({
        items: [{ name: newCardTitle.value, link: newCardLink.value }],
        renderer: (card) => {
            const cardInstance = new Card({ title: card.name, link: card.link }, cardClassSetup);
            const cardElement = cardInstance.generateCard();

            newCard.addItem(cardElement, true);
        }
    }, ".cards__list");

    newCard.renderer();

    newCardFormComponent.close();
});

newCardButton.addEventListener("click", () => newCardFormComponent.open());