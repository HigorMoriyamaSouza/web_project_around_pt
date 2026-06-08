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
import FormValidator from "./FormValidator.js";

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
    /* HANDLES FORM`s INPUTS ERRORS*/
    const formValidatorInstance = new FormValidator(editPopupForm);
    formValidatorInstance.formInputErrorHandler();
    
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
    /* HANDLES FORM`s INPUTS ERRORS*/
    const formValidatorInstance = new FormValidator(newCardPopupForm);
    formValidatorInstance.formInputErrorHandler();

    openModal(newCardPopup);
});
newCardPopupCloseButton.addEventListener("click", () => closeModal(newCardPopup));
newCardPopup.addEventListener("submit", handleCardFormSubmit);
