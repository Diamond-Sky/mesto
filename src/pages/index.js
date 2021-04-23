//Импорты компонент JS
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupEdit from '../scripts/components/PopupEdit.js';
import {cardElements, addButton, editButton, popupAdd, popupEdit, popup_image, profileData, someObject, initialCards} from '../scripts/components/Constants.js';

//Импорт стилей в JS
import './index.css'

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

//Реализация открытия попапа добавления карточки при клике на кнопку "Добавить карточку"
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

//Реализация открытия попапа с информацие о пользователе при клике на кнопу "Редактировать профиль"
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

// Реализуем живую валидацию полей форм
const formArray = Array.from(document.querySelectorAll(someObject.formSelector));
formArray.forEach((formElement) => {
  const validator = new FormValidator(someObject, formElement);
  validator.enableValidation();
});

/* const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
const firstName = popupEdit.querySelector('.popup__input_firstname');
const lastName = popupEdit.querySelector('.popup__input_lastname');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle'); */


