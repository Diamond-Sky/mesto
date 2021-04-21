
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
//import PopupWithForm from '../scripts/PopupWithForm';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import Popup from './Popup.js';
//import PopupWithImage from './PopupWithImage.js';
//import UserInfo from '../scripts/UserInfo';

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
// add function popup open/close

//export {openPopup};
/* function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape); 
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
} */

//Отрисовка карточек из исходного массива
const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({data: item, handleCardClick: () => {
      const popupWithImage = new PopupWithImage(popup_image);
      popupWithImage.open();}
    } , '#card-template');
    
    const cardElement = card.generateCard();

    cardsList.addItem(cardElement);
    },
  },
  cardElements
);
cardsList.renderItems();

/* initialCards.forEach((cardItem) => {
    const nodeCard = new Card(cardItem, '#card-template');
    const cardElement = nodeCard.generateCard();
    renderCard(cardElement, cardElements);
  });

// render card from array

function renderCard(card, container) {
  container.prepend(card);
} */

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


const copyInputValue = () => {
    firstName.value = profileTitle.textContent;
    lastName.value = profileSubtitle.textContent;
    openPopup(popupEdit);
}

const handleFormEditSubmit = (event) => {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = lastName.value;
    closePopup(popupEdit);
}

//add card from form submit

const createCardObject = () => {
  const cardName = getFormAdd.querySelector('.popup__input_name');
  const linkImage = getFormAdd.querySelector('.popup__input_link');
  
  
  return [{name: cardName.value, link: linkImage.value}]
}

//Отрисовка одной карточки в верху секции
const handleFormAddSubmit = (event) => {
  event.preventDefault();
  const oneCard = new Section ({
    items: createCardObject(),
    renderer: (item) => {
      const card = new Card({item, handleCardClick: () => {
        const popupWithImage = new PopupWithImage(popup_image);
        popupWithImage.open();}
      } , '#card-template');
      
      const cardElement = card.generateCard();
  
      oneCard.addItemToUpList(cardElement);
      },
    },
    cardElements
  );
  oneCard.renderItems();
  /* const unshiftCardItem = new Card(createCardObject(), '#card-template');
  renderCard(unshiftCardItem.generateCard(), cardElements); */
  //closePopup(popupAdd);
}

// open/close popup

const popups = document.querySelectorAll('.popup')

/* popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
}) */

addButton.addEventListener('click', () => {
  const popupViewAdd = new Popup(popupAdd);
  popupViewAdd.open();
  /* openPopup(popupAdd);
  getFormAdd.reset(); */
});

editButton.addEventListener('click', copyInputValue);

getFormEdit.addEventListener('submit', handleFormEditSubmit);
getFormAdd.addEventListener('submit', handleFormAddSubmit);

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
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  const validator = new FormValidator(someObject, formElement);
    validator.enableValidation();
});




