const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link:  "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const editPopupForm = editPopup.querySelector("#edit-profile-form");
const editPopupFormNameInput = editPopupForm.querySelector(".popup__input_type_name");
const editPopupFormDescriptionInput = editPopupForm.querySelector(".popup__input_type_description");
const cardsTemplate = document.querySelector("#cards-template").content.querySelector(".card");
const cardContainer = document.querySelector(".cards__list");
const newCardButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardPopupForm = newCardPopup.querySelector("#new-card-form")
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");
const newCardTitle = newCardPopup.querySelector(".popup__input_type_card-name");
const newCardLink = newCardPopup.querySelector(".popup__input_type_url");
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
const imagePopupImgElement = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

/*
 * HANDLES POPUPS OPEN/CLOSE 
*/
function modalCloseOnClick(modal) {
    const modalOverlay = document.getElementById(`${modal.id}`);
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            closeModal(modal);
        }
    });
}

const openModal = (modal) => {
    modal.classList.add("popup_is-opened");
    modalCloseOnClick(modal);
}

const closeModal = (modal) => modal.classList.remove("popup_is-opened");

imagePopupCloseButton.addEventListener("click", () => closeModal(imagePopup));

/*
 * FORMs - ERROR HANDLING 
*/
// This code has been commented for future implementations of my own.
// const toggleFormButtonState = (formInputs, formButton) => {
//     const formHasInvalidField = Array.from(formInputs).every(input => input.validity.valid);
//     formButton.disabled = !formHasInvalidField;
// }; 

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
            // This code has been commented for future implementations of my own.
            // toggleFormButtonState(formInputs, form.querySelector(".popup__button"));
        });
    });
}

/*
 * HANDLES CARDS CREATION
*/
function getCardElement (name, link) {
    const cardElement = cardsTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", () => cardElement.remove());

    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener("click", (event) => {
        event.target.classList.toggle("card__like-button_is-active");
    });

    cardImage.addEventListener("click", () => {
        imagePopupImgElement.alt = name;
        imagePopupCaption.textContent = name;
        imagePopupImgElement.src = link;

        openModal(imagePopup);
    });
    
    return cardElement;
}

const renderCard = (name, link, cardContainer, isNewCard) => {
    const card = getCardElement(name, link);
    (isNewCard) ? cardContainer.prepend(card) : cardContainer.append(card);  
}

initialCards.forEach(card => renderCard(card.name, card.link, cardContainer, isNewCard = false));

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
    renderCard(newCardTitle.value, newCardLink.value, cardContainer, isNewCard = true);
    closeModal(newCardPopup);
}

newCardButton.addEventListener("click", () => {
    formInputErrorHandler(newCardPopupForm);
    openModal(newCardPopup);
});
newCardPopupCloseButton.addEventListener("click", () => closeModal(newCardPopup));
newCardPopup.addEventListener("submit", handleCardFormSubmit);
