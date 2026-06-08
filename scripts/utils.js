export const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link:  "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];
export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const editPopup = document.querySelector("#edit-popup");
export const editPopupCloseButton = editPopup.querySelector(".popup__close");
export const editPopupForm = editPopup.querySelector("#edit-profile-form");
export const editPopupFormNameInput = editPopupForm.querySelector(".popup__input_type_name");
export const editPopupFormDescriptionInput = editPopupForm.querySelector(".popup__input_type_description");
export const cardsTemplate = document.querySelector("#cards-template").content.querySelector(".card");
export const cardContainer = document.querySelector(".cards__list");
export const newCardButton = document.querySelector(".profile__add-button");
export const newCardPopup = document.querySelector("#new-card-popup");
export const newCardPopupForm = newCardPopup.querySelector("#new-card-form")
export const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");
export const newCardTitle = newCardPopup.querySelector(".popup__input_type_card-name");
export const newCardLink = newCardPopup.querySelector(".popup__input_type_url");
export const imagePopup = document.querySelector("#image-popup");
export const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
export const imagePopupImgElement = imagePopup.querySelector(".popup__image");
export const imagePopupCaption = imagePopup.querySelector(".popup__caption");

/*
 * HANDLES POPUPS OPEN/CLOSE 
*/
export function modalCloseOnEsc(modal) {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal(modal);
        }
    });
}

export function modalCloseOnClick(modal) {
    const modalOverlay = document.getElementById(`${modal.id}`);
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            closeModal(modal);
        }
    });
}

 export const openModal = (modal) => {
    modal.classList.add("popup_is-opened");
    modalCloseOnEsc(modal);
    modalCloseOnClick(modal);
}


export function resetModalFormOnClose(formElement) {
    const formInputs = formElement.querySelectorAll(".popup__input");
    const formButton = formElement.querySelector(".popup__button");

    formElement.reset();
    formInputs.forEach(input => hideInputError(input));
    formButton.disabled = false;
}

export const closeModal = (modal) => {
    modal.classList.remove("popup_is-opened");

    const formElement = modal.querySelector(".popup__form");

    if (formElement) {
        resetModalFormOnClose(formElement);
    }
}

/*
 * MODAL - IMAGE POPUP 
*/
imagePopupCloseButton.addEventListener("click", () => closeModal(imagePopup));