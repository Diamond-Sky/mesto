
//feat: Popup open/close on click
let popupOpen = document.querySelector('.profile__edit-button');
let popupOverlay = document.querySelector('.popup');
let popupClose = popupOverlay.querySelector('.popup__close');

let togglePopup = () => {
    popupOverlay.classList.toggle('popup_opened');
}

popupOpen.addEventListener('click', togglePopup);

popupClose.addEventListener('click', togglePopup);

popupOverlay.addEventListener('click', (Event) => {
    if(Event.target === Event.currentTarget) {
        togglePopup();
    }
});

//feat: Edit profile input
let getForm = popupOverlay.querySelector('.popup__container');
let firstName = popupOverlay.querySelector('.popup__firstname');
let lastName = popupOverlay.querySelector('.popup__lastname');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

firstName.value = profileTitle.textContent;
lastName.value = profileSubtitle.textContent;

getForm.addEventListener('submit', (Event) => {
    Event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = lastName.value;
    togglePopup();
});


/*
//feat: likeButton Active
let likeButton = document.querySelectorAll('.elements .elements__like');

for (let i = 0; i<likeButton.length; i++) {
likeButton[i].addEventListener('click', () => {
    likeButton[i].classList.toggle('elements__like_active');
})
}
*/
    