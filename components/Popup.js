/*
 * HANDLES POPUPS CREATION
 * CHILDREN CLASSES: PopupWithForm.js / PopupWithImage.js
*/
export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;

        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = this._popupElement.querySelector(".popup__close");
        this._popupOverlay = document.getElementById(`${this._popupElement.id}`);
    }

    _handleEscClose() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.close();
            }
        });
    }

    setEventListeners() {
        //HANDLES NORMAL CLOSE
        this._popupCloseButton.addEventListener("click", () => this.close());
        
        //HANDLES OVERLAY CLICK CLOSE
        this._popupOverlay.addEventListener("click", (event) => {
            if (event.target === this._popupOverlay) {
                this.close();
            }
        });

        //HANDLES ESC PRESS CLOSE
        this._handleEscClose();
    }
    
    open() {
        this._popupElement.classList.add("popup_is-opened");
        this.setEventListeners();
    }
    
    close() {
        this._popupElement.classList.remove("popup_is-opened");
    }
}