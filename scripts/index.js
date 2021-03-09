//upload cards

let initialCards = [
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

//Create cards from array

function createCard(item) {
        
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardElements = document.querySelector('.elements');

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__name').textContent = item.name;
  cardElements.append(cardElement);
}

//feat: add likeButton Active

function addLikeActive() {
  let likeButton = document.querySelectorAll('.card .card__like');
  for (let i = 0; i<likeButton.length; i++) {
    likeButton[i].addEventListener('click', () => {
      likeButton[i].classList.toggle('card__like_active');
    })
}}

// Delete DOM card elements

function cardsCollectionRemove() {
  let cardsCollection = document.querySelectorAll('.card');
  cardsCollection.forEach((item) => {
    item.remove();
  })
}

// add function card delete

function cardDelete() {
  let deleteButtons = document.querySelectorAll('.card .card__delete');
  for(let i = 0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      cardsCollectionRemove();
      initialCards.splice(i,1);
      createCards();
    });
  }
}

// add function popup open/close

/* function togglePopup(elem) {
  elem.classList.toggle('popup_opened');
}; */

// add createCards function

function createCards(){
  initialCards.forEach((cardItem) => {
    createCard(cardItem);
  });
  cardDelete();
  addLikeActive();
  openPopupImage();
}

createCards();








const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

let popupOverlay = document.querySelector('.popup');
const popupCloseEdit = document.querySelector('.popup__close_edit');
const popupCloseAdd = document.querySelector('.popup__close_add');
const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
let firstName = popupOverlay.querySelector('.popup__input_firstname');
let lastName = popupOverlay.querySelector('.popup__input_lastname');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


const copyInputValue = () => {
    firstName.value = profileTitle.textContent;
    lastName.value = profileSubtitle.textContent;
    popupEdit.classList.add('popup_opened');
}

const handleFormEditSubmit = (event) => {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = lastName.value;
    popupEdit.classList.remove('popup_opened');
}

function UnshiftCardItem(name, link) {
  this.name = name;
  this.link = link;
}

//add card from form submit

const cardName = getFormAdd.querySelector('.popup__container_add .popup__input_firstname');
const linkImage = getFormAdd.querySelector('.popup__container_add .popup__input_lastname');

const handleFormAddSubmit = (event) => {
  event.preventDefault();
  
  let unshiftCardItem = new UnshiftCardItem(cardName.value,linkImage.value);
  cardName.value = '';
  linkImage.value = '';
  initialCards.unshift(unshiftCardItem);
  cardsCollectionRemove();
  createCards();
  popupAdd.classList.remove('popup_opened');
}

// open/close popup

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popup_opened');
});

editButton.addEventListener('click', copyInputValue);

popupCloseEdit.addEventListener('click', () => {
  popupEdit.classList.remove('popup_opened');
});

popupCloseAdd.addEventListener('click', () => {
  popupAdd.classList.remove('popup_opened');
  cardName.value = '';
  linkImage.value = '';
});

popupEdit.addEventListener('click', (event) => {
    if(event.target === event.currentTarget) {
      popupEdit.classList.remove('popup_opened');
    }
});

popupAdd.addEventListener('click', (event) => {
  if(event.target === event.currentTarget) {
    popupAdd.classList.remove('popup_opened');
    cardName.value = '';
    linkImage.value = '';
  }
});

// open/close popup image
const imageCaption = document.querySelector('.imageCaption');
const popupPicture = document.querySelector('.popupImage');
const popupImage = document.querySelector('.popup_image');

function openPopupImage(){
  let popupImages = document.querySelectorAll('.card__image');
  for(let i = 0; i<popupImages.length; i++) {
    popupImages[i].addEventListener('click',()=>{
      popupPicture.src = popupImages[i].src;
      popupPicture.alt = popupImages[i].alt;
      popupPicture.title = popupImages[i].alt;
      imageCaption.textContent = popupImages[i].alt;
      popupImage.classList.add('popup_opened');
    })
  }
}


document.querySelector('.popup__close_image').addEventListener('click',()=>{
  popupImage.classList.remove('popup_opened');
})
popupImage.addEventListener('click',(event)=>{
  if(event.target === event.currentTarget) {
    popupImage.classList.remove('popup_opened');
  }
})

getFormEdit.addEventListener('submit', handleFormEditSubmit);
getFormAdd.addEventListener('submit', handleFormAddSubmit);







