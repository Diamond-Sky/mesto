//Импорты компонент JS
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupConfirm from '../scripts/components/PopupConfirm.js';
import { userData, popupConfirmElement, popupAvatarElement, getFormAvatar, popupAdd, popupEdit, lastName, profileData, someObject, popupImageContainer, getFormEdit, getFormAdd, firstName } from '../scripts/components/Constants.js';

//Импорт стилей в JS
import './index.css'

//Подключение API
const api = new Api(userData);

Promise.all([api.getUserInfo(), api.getCardsInfo()])
  .then(([ userData, cards ]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardsList.renderItems(cards, userData._id);
  })
  .catch(api.showErrorMessage);

//Экземпляр секшн для отрисовки карточек
const cardsList = new Section({
  renderer: (item, myId) => {
    cardsList.addItem(createCard(item, myId));
  },
  containerSelector: '.elements'
});

//Объявление экземпляра класса подтверждения удаления карточки
const popupConfirm = new PopupConfirm({popupElement: popupConfirmElement, handleFormSubmit: (cardId, cardDelete) => {
  api.deleteCard(cardId)
  .then(() => {
    cardDelete();
    popupConfirm.close();
  })
  .catch(api.showErrorMessage);
}});
popupConfirm.setEventListeners();

//Создание элемента карточки
function createCard(item, myId) {
  const card = new Card({item, myId,
    handleCardClick: () => {
      debugger;
      popupWithImage.open(item)
    },
    handleCardDeleteClick: (cardId, cardDelete) => {
      popupConfirm.open(cardId, cardDelete);
    },
    handleLikeClick: (idCard, likeStatus) => {
      if(likeStatus) {
        api.deleteLike(idCard)
        .then(data => {
          console.log(data.likes);
          card.likeActive(data.likes);
        })
        .catch(api.showErrorMessage);
      } else {
        api.setLike(idCard)
        .then(data => {
          card.likeActive(data.likes);
      })
        .catch(api.showErrorMessage);
      }
    }
  }, '#card-template');
  const cardElement = card.generateCard();
  return cardElement;
}

//Объявление экземпляра класса формы обновления аватара
const popupAvatarUpload = new PopupWithForm({popupElement: popupAvatarElement, handleFormAddSubmit: (data) => {
  popupAvatarUpload.renderLoading(true);
  api.setAvatar(data)
  .then(data => {
    userInfo.setUserAvatar(data);
    popupAvatarUpload.close();
  })
  .catch(api.showErrorMessage)
  .finally(() => {
    popupAvatarUpload.renderLoading(false);
  })
}})
popupAvatarUpload.setEventListeners();

//Объявление экземпляра класс валидации формы редактирования профиля
const formEditValidator = new FormValidator(someObject, getFormEdit);
formEditValidator.enableValidation();

//Объявление экземпляра класса валидации формы добавления карточки
const formAddValidator = new FormValidator(someObject, getFormAdd);
formAddValidator.enableValidation();

//Объявление экземпляра класса валидации формы обновления аватара
const formAvatarValidator = new FormValidator(someObject, getFormAvatar);
formAvatarValidator.enableValidation();

document.querySelector('.profile__avatar').addEventListener('click', () => {
  formAvatarValidator.clearInputError();
  formAvatarValidator.toggleButtonState();
  popupAvatarUpload.open();
})

document.querySelector('.profile__add-button').addEventListener('click', () => {
  formAddValidator.clearInputError();
  formAddValidator.toggleButtonState();
  popupAddCard.open();
})

document.querySelector('.profile__edit-button').addEventListener('click', () => {
  const profileInputValue  = userInfo.getUserInfo();
  firstName.value = profileInputValue.firstname;
  lastName.value = profileInputValue.lastname;
  formEditValidator.clearInputError();
  formEditValidator.toggleButtonState();
  popupEditProfile.open();
})

//Объявление экземпляра класса уравления информацией о пользователе на странице
const userInfo = new UserInfo(profileData);

//Объявление экземпляра класса для попапа редактирования профиля
const popupEditProfile = new PopupWithForm({popupElement: popupEdit, handleFormAddSubmit: (data) => {
  popupEditProfile.renderLoading(true);
  api.setUserInfo(data)
  .then(data => {
    userInfo.setUserInfo(data);
    popupEditProfile.close();
  })
  .catch(api.showErrorMessage)
  .finally(() => popupEditProfile.renderLoading(false));
}})
popupEditProfile.setEventListeners();

//Объявление экземпляра класса popupWithImage для попапа с картинкой
const popupWithImage = new PopupWithImage(popupImageContainer);
popupWithImage.setEventListeners();

//Объявление экземпляра класса popupWithForm для попапа добавления карточки
const popupAddCard = new PopupWithForm({popupElement: popupAdd, handleFormAddSubmit: (data) => {
  popupAddCard.renderLoading(true);
  api.addCard(data)
  .then(data => {
    debugger;
    cardsList.addItemUpList(createCard(data, data.owner._id));
    popupAddCard.close();
  })
  .catch(api.showErrorMessage)
  .finally(() => popupAddCard.renderLoading(false));
}});
popupAddCard.setEventListeners();

const formArray = Array.from(document.querySelectorAll(someObject.formSelector));
formArray.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
})