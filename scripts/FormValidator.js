/*
* HANDLES FORM`s INPUTS ERRORS
*/

class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
  
        this._formInputs = form.querySelectorAll(this._settings.fieldsClass);
        this._formButton = form.querySelector(this._settings.formButtonClass);
    }

    _showInputError(popupInput, errorMessage) {
        const errorElement = document.querySelector(`.${popupInput.name}${this._settings.errorClasses.inputError}`);
        popupInput.classList.add(this._settings.errorClasses.typeError);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClasses.errorActive);
    }

    _hideInputError(popupInput) {
        const errorElement = document.querySelector(`.${popupInput.name}${this._settings.errorClasses.inputError}`);
        popupInput.classList.remove(this._settings.errorClasses.typeError);
        errorElement.textContent = "";
        errorElement.classList.remove(this._settings.errorClasses.errorActive);
    }

    resetFormValidation() {
        this._form.reset();
        this._formInputs.forEach(input => this._hideInputError(input));
        this._formButton.disabled = false;
    }

    _setEventListener(formInputs, formButton) {
        formInputs.forEach(input => {
            input.addEventListener("input", () => {
                if (!input.validity.valid) {
                    formButton.disabled = true;
                    this._showInputError(input, input.validationMessage);
                } else {
                    formButton.disabled = false;
                    this._hideInputError(input);
                }
            });
        });
    }

    formInputErrorHandler() {
        this._setEventListener(this._formInputs, this._formButton);
    }
}

export default FormValidator;