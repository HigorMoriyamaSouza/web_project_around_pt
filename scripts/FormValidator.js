/*
* HANDLES FORM`s INPUTS ERRORS
*/

class FormValidator {
    constructor(form) {
        this._form = form
    }

    _showInputError(popupInput, errorMessage) {
    const errorElement = document.querySelector(`.${popupInput.name}-input-error`);
    popupInput.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
    }

    _hideInputError(popupInput) {
        const errorElement = document.querySelector(`.${popupInput.name}-input-error`);
        popupInput.classList.remove("popup__input_type_error");
        errorElement.textContent = "";
        errorElement.classList.remove("popup__input-error_active")
    }

    resetFormFieldsValidation(input) {
        this._hideInputError(input);
    }

    setEventListener(formInputs, formButton) {
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
        const formInputs = this._form.querySelectorAll(".popup__input");
        const formButton = this._form.querySelector(".popup__button");

        this.setEventListener(formInputs, formButton);
    }
}

export default FormValidator;