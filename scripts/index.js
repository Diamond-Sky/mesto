let popupOpen = document.querySelector('.profile__edit-button');
let popupOverlay = document.querySelector('.popup');
let popupClose = popupOverlay.querySelector('.popup__close');
let getForm = popupOverlay.querySelector('.popup__container');
let firstName = popupOverlay.querySelector('.popup__input_firstname');
let lastName = popupOverlay.querySelector('.popup__input_lastname');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


let togglePopup = () => {
    popupOverlay.classList.toggle('popup_opened');
}

let copyInputValue = () => {
    firstName.value = profileTitle.textContent;
    lastName.value = profileSubtitle.textContent;
    togglePopup();
}

let handleFormSubmit = (event) => {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = lastName.value;
    togglePopup();
}

popupOpen.addEventListener('click', copyInputValue);

popupClose.addEventListener('click', togglePopup);

popupOverlay.addEventListener('click', (event) => {
    if(event.target === event.currentTarget) {
        togglePopup();
    }
});

getForm.addEventListener('submit', handleFormSubmit);


/*
//feat: likeButton Active
let likeButton = document.querySelectorAll('.elements .elements__like');

for (let i = 0; i<likeButton.length; i++) {
likeButton[i].addEventListener('click', () => {
    likeButton[i].classList.toggle('elements__like_active');
})
}
*/
    