import Card from "./Card.js";
import {
    /*--CONSTANTS--*/
    initialCards,
    profileEditButton,
    profileTitle,
    profileDescription,
    editPopup,
    editPopupCloseButton,
    editPopupForm,
    editPopupFormNameInput,
    editPopupFormDescriptionInput,
    cardsTemplate,
    cardContainer,
    newCardButton,
    newCardPopup,
    newCardPopupForm,
    newCardPopupCloseButton,
    newCardTitle,
    newCardLink,
    imagePopup,
    imagePopupCloseButton,
    imagePopupImgElement,
    imagePopupCaption,

    /*--FUNCTIONS--*/
    /** HANDLES POPUPS OPEN/CLOSE  **/
    modalCloseOnEsc,
    modalCloseOnClick,
    openModal,
    resetModalFormOnClose,
    closeModal
} from "./utils.js";

/*
 * HANDLES FORM`s INPUTS ERRORS
*/
function showInputError(popupInput, errorMessage) {
   const errorElement = document.querySelector(`.${popupInput.name}-input-error`);
   popupInput.classList.add("popup__input_type_error");
   errorElement.textContent = errorMessage;
   errorElement.classList.add("popup__input-error_active");
}

function hideInputError(popupInput) {
    const errorElement = document.querySelector(`.${popupInput.name}-input-error`);
    popupInput.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_active")
}

function formInputErrorHandler(form) {
    const formInputs = form.querySelectorAll(".popup__input");
    const formButton = form.querySelector(".popup__button");

    formInputs.forEach(input => {
        input.addEventListener("input", () => {
            if (!input.validity.valid) {
                formButton.disabled = true;
                showInputError(input, input.validationMessage);
            } else {
                formButton.disabled = false;
                hideInputError(input);
            }
        });
    });
}

/*
 * HANDLES CARDS CREATION
*/
function renderCard(cardData, cardContainer, isNewCard) {
    const cardInstance = new Card(cardData, "#cards-template");
    const cardElement = cardInstance.generateCard();

    (isNewCard) 
        ? cardContainer.prepend(cardElement) 
        : cardContainer.append(cardElement);  
}

initialCards.forEach(card => renderCard({title: card.name, link: card.link}, cardContainer, false));

/*
 * MODAL - EDIT PROFILE 
*/
const fillProfileForm = () => {
    editPopupFormNameInput.value = profileTitle.textContent;
    editPopupFormDescriptionInput.value = profileDescription.textContent;
}

const handleOpenEditModal= () => {
    formInputErrorHandler(editPopupForm);
    fillProfileForm();
    openModal(editPopup);
}

function handleProfileFormSubmit(event) {
    event.preventDefault();

    profileTitle.textContent = editPopupFormNameInput.value;
    profileDescription.textContent = editPopupFormDescriptionInput.value;
    
    closeModal(editPopup);
}

profileEditButton.addEventListener("click", () => handleOpenEditModal(editPopup));
editPopupCloseButton.addEventListener("click", () => closeModal(editPopup));
editPopup.addEventListener("submit", handleProfileFormSubmit);

/*
 * MODAL - ADD NEW CARD 
*/
function handleCardFormSubmit (event) {
    event.preventDefault();
    renderCard({title: newCardTitle.value, link: newCardLink.value}, cardContainer, true);
    closeModal(newCardPopup);
}

newCardButton.addEventListener("click", () => {
    formInputErrorHandler(newCardPopupForm);
    openModal(newCardPopup);
});
newCardPopupCloseButton.addEventListener("click", () => closeModal(newCardPopup));
newCardPopup.addEventListener("submit", handleCardFormSubmit);
