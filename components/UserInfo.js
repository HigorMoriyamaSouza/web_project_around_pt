/*
 * HANDLES USER INFORMATIONS
*/
import { 
    profileTitle,
    profileDescription
} from "../utils/constants.js";

export default class UserInfo {
    constructor({ userName_elementSelector, userTitle_elementSelector }) {
        this._userName_elementSelector = userName_elementSelector;
        this._userTitle_elementSelector = userTitle_elementSelector;

        this._userNameInput = document.querySelector(this._userName_elementSelector);
        this._userTitleInput = document.querySelector(this._userTitle_elementSelector);
    }

    getUserInfo() {
        return { 
            "userName": profileTitle.textContent, 
            "userTitle": profileDescription.textContent
        }
    }

    setUserInfo() {
        profileTitle.textContent = this._userNameInput.value;
        profileDescription.textContent = this._userTitleInput.value;
    }

    fillUserProfileForm() {
        const user = this.getUserInfo();
        this._userNameInput.value = user.userName;
        this._userTitleInput.value = user.userTitle;
    }
}