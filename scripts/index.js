const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link:  "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];

//Every modal close button (".popup__close") does the same thing.

const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const editPopupForm = editPopup.querySelector("#edit-profile-form");
const editPopupFormNameInput = editPopupForm.querySelector(".popup__input_type_name");
const editPopupFormDescriptionInput = editPopupForm.querySelector(".popup__input_type_description");
const cardsTemplate = document.querySelector("#cards-template");
const cardContainer = document.querySelector(".cards__list");

const newCardButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");

/*
 * CARDS
*/
function getCardElement (name = "Lugar sem nome.", link = "./images/placeholder.jpg") {
    const cardElement = cardsTemplate.content.cloneNode(true);
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    cardImage.src = link;
    cardImage.alt, cardTitle.textContent = name;
    
    return cardElement;
}

const renderCard = (name, link, cardContainer) => {
    const newCard = getCardElement(name, link);
    cardContainer.append(newCard);
}

initialCards.forEach(card => renderCard(card.name, card.link, cardContainer));

/*
 * MODAL - EDIT PROFILE 
*/
const openModal = (modal) => modal.classList.add("popup_is-opened");
const closeModal = (modal) => modal.classList.remove("popup_is-opened");

const fillProfileForm = () => {
    editPopupFormNameInput.value = profileTitle.textContent;
    editPopupFormDescriptionInput.value = profileDescription.textContent;
}

const handleOpenEditModal= () => {
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
  
    const newCardTitle = newCardPopup.querySelector(".popup__input_type_card-name").value;
    const newCardLink = newCardPopup.querySelector(".popup__input_type_url").value;
    
    renderCard(newCardTitle, newCardLink, cardContainer);

    closeModal(newCardPopup);
}

newCardButton.addEventListener("click", () => openModal(newCardPopup));
newCardPopupCloseButton.addEventListener("click", () => closeModal(newCardPopup));
newCardPopup.addEventListener("submit", handleCardFormSubmit);