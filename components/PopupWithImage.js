/*
 * HANDLES POPUPS WITH IMAGE CREATION
 * FATHER CLASS: Popup.js
 */
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector, handleCardClick) {
        super(popupSelector);
        this._handleCardClick = handleCardClick;
    }

    open() { 
        this._handleCardClick(); 
        super.open();
    }
}