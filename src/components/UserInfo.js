/*
 * HANDLES USER INFORMATIONS
 */
import { 
    profileTitle,
    profileDescription,
    api,
    profileImage
} from "../utils/constants.js";

export default class UserInfo {
    constructor({ userName_elementSelector, userTitle_elementSelector }) {
        this._userName_elementSelector = userName_elementSelector;
        this._userTitle_elementSelector = userTitle_elementSelector;

        this._userNameInput = document.querySelector(this._userName_elementSelector);
        this._userTitleInput = document.querySelector(this._userTitle_elementSelector);
        this._userAvatarInput = document.querySelector(".popup__input-avatar");
    }

    getUserInfo() {
        return api.getUserInfo();
    }

    async setUserInfo() {
        try{
            const response = await api.setUserInfo(this._userNameInput.value, this._userTitleInput.value);
            profileTitle.textContent = response.name;
            profileDescription.textContent = response.about;
        } catch (error) {
            console.log("Error while updating user profile: ", error);
        }
    }

    async setUserAvatar() {
        try{
            const response = await api.setUserAvatar(this._userAvatarInput.value);
            profileImage.src = response.avatar;
        } catch (error) {
            console.log("Error while updating user avatar: ", error);
        }
    }

    async fillUserProfileForm() {
        try{
            const user = await this.getUserInfo();
            this._userNameInput.value = user.name;
            this._userTitleInput.value = user.about;
        } catch (error) {
            console.log("Error while filling user profile form: ", error);
        }
    }
    
    async fillUserPage() {
        try{ 
            const user = await this.getUserInfo();
            profileTitle.textContent = user.name;
            profileDescription.textContent = user.about;
            profileImage.src = user.avatar;
        } catch (error) {
            console.log("Error while filling user page: ", error);
        }
    }
}