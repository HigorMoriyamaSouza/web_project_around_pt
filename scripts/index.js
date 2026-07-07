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

    newCardFormComponent.renderLoading(true);
    
    try{
        const response = await api.newCard(newCardTitle.value, newCardLink.value);
        cardRender([response], true);
    } catch (error) {
        console.log("Error while saving card: ", error);
    } finally {
        newCardFormComponent.renderLoading(false);
    }
    
    newCardFormComponent.close();
});
newCardFormComponent.setEventListeners();
newCardButton.addEventListener("click", () => newCardFormComponent.open());

/*
 * HANDLES USER DATA 
*/
const userInfo = new UserInfo({
    userName_elementSelector: ".popup__input_type_name", 
    userTitle_elementSelector: ".popup__input_type_description"
});

const profileEditFormComponent = new PopupWithForm("#edit-popup", async (event) => {
    event.preventDefault();
    profileEditFormComponent.renderLoading(true);

    try {
        await userInfo.setUserInfo();
        profileEditFormComponent.close();
    } catch (error) {
        console.log("Error while updating profile: ", error);
    } finally {
        profileEditFormComponent.renderLoading(false);
    }
});
profileEditFormComponent.setEventListeners();
profileEditButton.addEventListener("click", () => {
    userInfo.fillUserProfileForm();
    profileEditFormComponent.open();
});

const profileEditAvatarFormComponent = new PopupWithForm("#edit-avatar-popup", async (event) => {
    event.preventDefault();
    profileEditAvatarFormComponent.renderLoading(true);

    try {
        await userInfo.setUserAvatar();
        profileEditAvatarFormComponent.close();
    } catch (error) {
        console.log("Error while updating avatar: ", error);
    } finally {
        profileEditAvatarFormComponent.renderLoading(false);
    }
});
profileEditAvatarFormComponent.setEventListeners();
profileImageContainer.addEventListener("click", () => profileEditAvatarFormComponent.open());

userInfo.fillUserPage();