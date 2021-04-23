
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from './UserInfo.js';
import PopupEdit from './PopupEdit.js'

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
const cardElements = document.querySelector('.elements');

//Отрисовка карточек из исходного массива
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item, handleCardClick: () => {
        const popupWithImage = new PopupWithImage(item, popup_image);
        popupWithImage.open()
      }
    }, '#card-template');

    const cardElement = card.generateCard();

    cardsList.addItem(cardElement);
  },
},
  cardElements
);
cardsList.renderItems();

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
const firstName = popupEdit.querySelector('.popup__input_firstname');
const lastName = popupEdit.querySelector('.popup__input_lastname');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popup_image = document.querySelector('.popup_image');
const profileData = { profileName: 'profile__title', profileCaption: 'profile__subtitle' };


addButton.addEventListener('click', () => {
  const popupViewAdd = new PopupWithForm({
    data: popupAdd, handleFormAddSubmit: (event) => {
      event.preventDefault();
      const inputValues = popupViewAdd._getInputValues();
      const oneCard = new Section({
        items: inputValues,
        renderer: (item) => {
          const card = new Card({
            data: item,
            handleCardClick: () => {
              const popupWithImage = new PopupWithImage(item, popup_image);
              popupWithImage.open();
            }
          },
            '#card-template'
          );
          const cardElement = card.generateCard();
          oneCard.addItemToUpList(cardElement);
        },
      },
        cardElements
      );
      oneCard.renderItems();
      popupViewAdd.close();
    }
  });
  popupViewAdd.open();
  const validator = new FormValidator(someObject, popupAdd);
  validator.enableValidation();
});

editButton.addEventListener('click', () => {
  const userInfo = new UserInfo(profileData);
  const validator = new FormValidator(someObject, popupAdd);

  const userPopup = new PopupEdit({
    data: popupEdit, handleFormAddSubmit: (event) => {

      event.preventDefault();
      const { firstname, lastname } = userPopup._getInputValues();
      userInfo.setUserInfo(firstname, lastname);
      userPopup.close();

    }
  });
  validator.enableValidation();
  const userData = userInfo.getUserInfo();
  userPopup.open(userData);
});

const someObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
// Вешаем валидацию форм
const formArray = Array.from(document.querySelectorAll(someObject.formSelector));
formArray.forEach((formElement) => {
  const validator = new FormValidator(someObject, formElement);
  validator.enableValidation();
});




