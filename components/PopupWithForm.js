export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;

        this._popupForm = super._popupSelector.querySelector(".popup__form");
    }

    _getInputValues() {
       const formInputs = this._popupForm.querySelectorAll(".popup__input");

       //Restante da logica
    }

    setEventListeners() {
        this._popupForm.addEventListener("submit", this._submitForm);

        /*
         * HANDLES:
         * - NORMAL CLOSE;
         * - OVERLAY CLICK CLOSE;
         * - ESC PRESS CLOSE.
        */
        super.setEventListeners();
    }

    close() {
        this._popupForm.resetFormValidation(); //Criar Instancia de FormValid
        super.close();
    }
}