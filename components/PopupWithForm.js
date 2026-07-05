/*
 * HANDLES POPUPS WITH FORM CREATION
 * FATHER CLASS: Popup.js
*/
import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import { formValidatorSetup } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormMethod) {
        super(popupSelector);
        this._submitFormMethod = submitFormMethod;

        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._formInputs = this._popupForm.querySelectorAll(".popup__input");

        /* HANDLES FORM VALIDATIONS */
        this._formValidator = new FormValidator(formValidatorSetup, this._popupForm);
    }

    /*
     * METHOD SUSPENDED FOR CORRECTIONS
     */
    // getInputValues() {
    //     const inputValues = this._formInputs.forEach((input) => input.value);
    //     return inputValues;
    // }

    setEventListeners() {
        this._popupForm.addEventListener("submit", this._submitFormMethod);

        /* HANDLES FORM VALIDATIONS */
        this._formValidator.formInputErrorHandler();

        /* HANDLES: NORMAL, OVERLAY CLICK AND ESC CLOSE. */
        super.setEventListeners();
    }

    close() {
        super.close();
        this._formValidator.resetFormValidation(); 
    }
}