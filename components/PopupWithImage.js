import { imagePopupImgElement, imagePopupCaption, imagePopupImgElement } from "../scripts/utils.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, imgLink, imgTitle) {
        super(popupSelector);
        this._imgLink = imgLink;
        this._imgTitle = imgTitle;
    }

    open() {
        imagePopupImgElement.alt = this._title;
        imagePopupCaption.textContent = this._title;
        imagePopupImgElement.src = this._link;
            
        super.open();
    }
}