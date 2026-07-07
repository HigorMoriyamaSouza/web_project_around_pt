import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
    profileImageContainer,
    profileEditButton,
    newCardButton,
    newCardTitle,
    newCardLink,
    cardClassSetup,
    cardRender,
    api,
} from "../utils/constants.js";

/*
 * HANDLES EXISTENT CARDS CREATION
*/
cardRender(await api.getCards(), false);

/* 
 * HANDLES NEW CARDS ADDITION 
*/
const newCardFormComponent = new PopupWithForm("#new-card-popup", async (event) => {
    event.preventDefault();

    try{
        const response = await api.newCard(newCardTitle.value, newCardLink.value);
        console.log("Transaction succeded: ", response);
    } catch (error) {
        console.log("Error while saving card: ", error);
    }
    
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

const profileEditAvatarFormComponent = new PopupWithForm("#edit-avatar-popup", (event) => {
    event.preventDefault();
    userInfo.setUserAvatar();
    profileEditAvatarFormComponent.close();
});
profileImageContainer.addEventListener("click", () => profileEditAvatarFormComponent.open());

userInfo.fillUserPage();

console.log(await api.getCards());