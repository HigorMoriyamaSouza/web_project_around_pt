import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
    initialCards,
    profileEditButton,
    newCardButton,
    newCardTitle,
    newCardLink,
    cardClassSetup,
    cardRender
} from "../utils/constants.js";

/*
 * HANDLES EXISTENT CARDS CREATION
*/
cardRender(initialCards, false);

/* 
 * HANDLES NEW CARDS ADDITION 
*/
const newCardFormComponent = new PopupWithForm("#new-card-popup", (event) => {
    event.preventDefault();
    cardRender([{ name: newCardTitle.value, link: newCardLink.value }], true);
    newCardFormComponent.close();
});
newCardButton.addEventListener("click", () => newCardFormComponent.open());

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