//upload cards

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

//Create card from array

const cardTemplate = document.querySelector('#card-template').content;
const cardElements = document.querySelector('.elements');

function createCard(item) {
 
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.card__name');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like');
  const deleteButton = cardElement.querySelector('.card__delete');
  
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardName.textContent = item.name;
  
  cardImage.addEventListener('click', openPopupImage);
  likeButton.addEventListener('click', addLikeActive);
  deleteButton.addEventListener('click', cardDelete);
  return cardElement;
  
}

// render card from array

function renderCard(card, container) {
  container.prepend(card);
}

//feat: add likeButton Active

function addLikeActive(event) {
  event.target.classList.toggle('card__like_active');
}

// add function card delete

function cardDelete(event) {
  const currentCard = event.target.closest('.card');
  currentCard.remove();
} 

// add function popup open/close

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 

// add createCards function

function createCards(){
  initialCards.forEach((cardItem) => {
    const nodeCard = createCard(cardItem);
    renderCard(nodeCard, cardElements);
  });
} 

createCards();






const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupCloseEdit = document.querySelector('.popup__close_edit');
const popupCloseAdd = document.querySelector('.popup__close_add');
const getFormEdit = document.querySelector('.popup__container_edit');
const getFormAdd = document.querySelector('.popup__container_add');
const firstName = popupEdit.querySelector('.popup__input_firstname');
const lastName = popupEdit.querySelector('.popup__input_lastname');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


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

function UnshiftCardItem(name, link) {
  this.name = name;
  this.link = link;
}

//add card from form submit
const cardName = getFormAdd.querySelector('.popup__input_name');
const linkImage = getFormAdd.querySelector('.popup__input_link');

const handleFormAddSubmit = (event) => {
  event.preventDefault();
  const unshiftCardItem = new UnshiftCardItem(cardName.value,linkImage.value);
  getFormAdd.reset();
  renderCard(createCard(unshiftCardItem), cardElements);
  closePopup(popupAdd);
}

// open/close popup
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

editButton.addEventListener('click', copyInputValue);

popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});



const closePopupEscape = () => {
  document.addEventListener('keydown',(evt) => {
    if(evt.key === 'Escape'){
      
      closePopup(popupImage);
      closePopup(popupEdit);
      closePopup(popupAdd);
      getFormAdd.reset();
    }
  })
}

popupCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
  getFormAdd.reset();
});

popupEdit.addEventListener('mousedown', (event) => {
    if(event.target === event.currentTarget) {
      closePopup(popupEdit);
    }
});

popupAdd.addEventListener('mousedown', (event) => {
  if(event.target === event.currentTarget) {
    closePopup(popupAdd);
    getFormAdd.reset();
  }
});

// open/close popup image
const imageCaption = document.querySelector('.imageCaption');
const popupPicture = document.querySelector('.popupImage');
const popupImage = document.querySelector('.popup_image');

function openPopupImage(event){
  const imageForPopup = event.target;
  popupPicture.src = imageForPopup.src;
  popupPicture.alt = imageForPopup.alt;
  popupPicture.title = imageForPopup.alt;
  imageCaption.textContent = imageForPopup.alt;
  openPopup(popupImage);
}


document.querySelector('.popup__close_image').addEventListener('click',()=>{
  closePopup(popupImage);
})
popupImage.addEventListener('mousedown',(event)=>{
  if(event.target === event.currentTarget) {
    closePopup(popupImage);
  }
})

closePopupEscape();
getFormEdit.addEventListener('submit', handleFormEditSubmit);
getFormAdd.addEventListener('submit', handleFormAddSubmit);







