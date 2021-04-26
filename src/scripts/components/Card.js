export default class Card {
    constructor({item, handleCardClick}, templateSelector) {
        const {name, link} = item;
        this._text = name;
        this._image = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        this._element.querySelector('.card__image').addEventListener('click', this._handleCardClick);
        this._element.querySelector('.card__like').addEventListener('click', this._addLikeActive.bind(this));
        this._element.querySelector('.card__delete').addEventListener('click', this._cardDelete.bind(this));
    }

    _addLikeActive(event) {
        event.target.classList.toggle('card__like_active');
    }

    _cardDelete(event) {
        event.target.closest('.card').remove();
    }
}