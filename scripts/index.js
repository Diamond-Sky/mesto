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


    