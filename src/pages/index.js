//Импорты компонент JS
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { addButton, editButton, popupAdd, popupEdit, lastName, profileData, someObject, initialCards, popupImageContainer, getFormEdit, getFormAdd, firstName } from '../scripts/components/Constants.js';

//Импорт стилей в JS
import './index.css'

//Объявление экземпляра класс валидации формы редактирования профиля
const formEditValidator = new FormValidator(someObject, getFormEdit);
formEditValidator.enableValidation();

//Объявление экземпляра класса валидации формы добавления карточки
const formAddValidator = new FormValidator(someObject, getFormAdd);
formAddValidator.enableValidation();

//Объявление экземпляра класса уравления информацие о пользователе на странице
const userInfo = new UserInfo(profileData);

//Объявление экземпляра класса popupWithForm для попапа добавления карточки
const popupAddCard = new PopupWithForm({popupElement: popupAdd, handleFormAddSubmit: () => {
  debugger;
  const item = popupAddCard._getInputValues();
  const newCard = new Card({item, handleCardClick: () => {
    popupWithImage.open(item);}}, '#card-template');
    cardsList.addItemUpList(newCard.generateCard());
  popupAddCard.close();
}});
popupAddCard.setEventListeners();

//Объявление экземпляра класса для попапа редактирования профиля
const popupEditProfile = new PopupWithForm({popupElement: popupEdit, handleFormAddSubmit: () => {
  userInfo.setUserInfo(firstName, lastName);
  popupEditProfile.close();
}})
popupEditProfile.setEventListeners();

//Объявление экземпляра класса popupWithImage для попапа с картинкой
const popupWithImage = new PopupWithImage(popupImageContainer);
popupWithImage.setEventListeners();

//Отрисовка карточек из исходного массива
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({item, handleCardClick: () => {
      popupWithImage.open(item);
    }}, '#card-template');
    cardsList.addItem(card.generateCard());
  },
},
  '.elements'
);
cardsList.renderItems();

//Клик по кнопке открытия формы добавления карточки
addButton.addEventListener('click', () => {
  popupAddCard.open();
});


//Клик по кнопке открытия формы редактирования профиля
editButton.addEventListener('click', () => {
  
  const userData = userInfo.getUserInfo();
  firstName.value = userData.firstname;
  lastName.value = userData.lastname;
  popupEditProfile.open();
});

const formArray = Array.from(document.querySelectorAll(someObject.formSelector));
formArray.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
})
