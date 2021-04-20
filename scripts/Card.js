import {openPopup} from '../scripts/index.js';

export default class Card {
    constructor(cardItem, templateSelector) {
        const {name, link} = cardItem;
        this._text = name;
        this._image = link;
        this._templateSelector = templateSelector;
        
    }
    _getTemplate() {
        const cardElement = document.querySelector(`${this._templateSelector}`).content.cloneNode(true);
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__name').textContent = this._text;
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._text;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener('click', this._openPopupImage.bind(this));
        this._element.querySelector('.card__like').addEventListener('click', this._addLikeActive.bind(this));
        this._element.querySelector('.card__delete').addEventListener('click', this._cardDelete.bind(this));
    }

    _addLikeActive(event) {
        event.target.classList.toggle('card__like_active');
    }

    _cardDelete(event) {
        event.target.closest('.card').remove();
    }
    
    _openPopupImage(event){
        const imageCaption = document.querySelector('.imageCaption');
        const popupPicture = document.querySelector('.popupImage');
        const popupImage = document.querySelector('.popup_image');
        const imageForPopup = event.target;
        popupPicture.src = imageForPopup.src;
        popupPicture.alt = imageForPopup.alt;
        popupPicture.title = imageForPopup.alt;
        imageCaption.textContent = imageForPopup.alt;
        openPopup(popupImage);
      }
      
}