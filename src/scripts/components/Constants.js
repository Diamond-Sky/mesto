export { userData, popupConfirmElement, popupAvatarElement, getFormAvatar, popupAdd, popupEdit, lastName, profileData, someObject, popupImageContainer, getFormEdit, getFormAdd, firstName }

const someObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupConfirmElement = document.querySelector('.popup_confirm');
const popupImageContainer = document.querySelector('.popup_image');
const popupAvatarElement = document.querySelector('.popup_avatarUpload');
const getFormAvatar = document.querySelector('.popup__container_avatarUpload');
const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
const firstName = popupEdit.querySelector('.popup__input_firstname');
const lastName = popupEdit.querySelector('.popup__input_lastname');
const profileData = { profileName: 'profile__title', profileCaption: 'profile__subtitle', profileAvatar: 'profile__avatar' };

const userData = {
  serverUrl: 'https://mesto.nomoreparties.co/v1',
  cohortId: 'cohort-23',
  authorization: 'a7301ae1-92d4-47a8-8d29-3afe57424e32'
}