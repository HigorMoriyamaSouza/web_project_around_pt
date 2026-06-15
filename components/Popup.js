export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }

    _handleEscClose() {
        document.addEventListener("keydown", (event) => {
            if (this._popupSelector.key === "Escape") {
                closeModal(this._popupSelector);
            }
        });
    }

    setEventListeners() {
        //HANDLES NORMAL CLOSE
        const popupCloseButton = this._popupSelector.querySelector(".popup__close");
        popupCloseButton.addEventListener("click", () => this.close());
        
        //HANDLES OVERLAY CLICK CLOSE
        const modalOverlay = document.getElementById(`${this._popupSelector.id}`);
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) {
                closeModal(this._popupSelector);
            }
        });

        //HANDLES ESC PRESS CLOSE
        this._handleEscClose();
    }
    
    open() {
        this._popupSelector.classList.add("popup_is-opened");
        this.setEventListeners();
    }
    
    close() {
        this._popupSelector.classList.remove("popup_is-opened");
    
        // const formElement = this._popupSelector.querySelector(".popup__form");
    
        // if (formElement) {
        //     editProfileFormValidatorInstance.resetFormValidation();
        //     newCardFormValidatorInstance.resetFormValidation();
        // }
    }
}