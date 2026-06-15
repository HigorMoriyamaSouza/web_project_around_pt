export default class UserInfo {
    constructor({ userName, userTitle }) {
        this._userName = userName;
        this._userTitle = userTitle;
    }

    getUserInfo() {
        return { 
            "userName": this._userName, 
            "userTitle": this._userTitle
        }
    }

    setUserInfo({ newUserName, newUserTitle }) {
        this._userName = newUserName;
        this._userTitle = newUserTitle;
    }
}