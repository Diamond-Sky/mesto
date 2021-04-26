export {addButton, editButton, popupAdd, popupEdit, lastName, profileData, someObject, initialCards, popupImageContainer, getFormEdit, getFormAdd, firstName }

//Обект с данными первоначальной отрисовки карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Объект с данными для валидации
const someObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

// Обявление констант
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImageContainer = document.querySelector('.popup_image');
const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
const firstName = popupEdit.querySelector('.popup__input_firstname');
const lastName = popupEdit.querySelector('.popup__input_lastname');
const profileData = { profileName: 'profile__title', profileCaption: 'profile__subtitle' };