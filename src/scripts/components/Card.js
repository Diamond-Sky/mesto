import notFondImage from '../../images/404_error.jpg';

export default class Card {
    constructor({item, myId, handleCardClick, handleCardDeleteClick, handleLikeClick}, templateSelector) {
        const {name, link, owner, likes, _id} = item;
        this._item = item;
        this._likes = likes;
        this._id = owner._id;
        this._cardId = _id;
        this._text = name;
        this._image = link;
        this._likesCount = this._likes.length;
        this._myId = myId;
        this._templateSelector = templateSelector;
        this._handleLikeClick = handleLikeClick;
        this._handleCardClick = handleCardClick;
        this._handleCardDeleteClick = handleCardDeleteClick;
        this._likeStatus
        
    }
    _getTemplate() {
        const cardElement = document.querySelector(`${this._templateSelector}`).content.querySelector('.card').cloneNode(true);
        return cardElement;
    }

    likeActive = (likes) => {
        this._element.querySelector('.card__like_count').textContent = `${likes.length}`;
        if(this._searchMyLike(likes)) {
            this._likeStatus = true;
            this._element.querySelector('.card__like').classList.add('card__like_active');
        } else {
            this._likeStatus = false;
            if(this._element.querySelector('.card__like').classList.contains('card__like_active')) this._element.querySelector('.card__like').classList.remove('card__like_active');
        }
    }
    _chekImageLink() {
        this._element.querySelector('.card__image').onerror = () => {
            this._element.querySelector('.card__image').removeEventListener('click', this._handleCardClick);
            this._element.querySelector('.card__image').src = notFondImage;
            this._element.querySelector('.card__image').alt = 'Error upload image';
            this._element.querySelector('.card__name').textContent = 'Not Found 404';
            this._element.querySelector('.card__like_container').style.display = 'none';
        }
    }

    _searchMyLike(likes) {
        return likes.some(likeData => likeData._id == this._myId)
    }
    
    _deleteBtnHidden() {
        if(this._id !== this._myId) {
            this._element.querySelector('.card__delete').style.display = 'none';
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__name').textContent = this._text;
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._text;
        this._element.querySelector('.card__image').id = this._cardId;
        this._element.querySelector('.card__like_count').textContent = `${this._likesCount}`;
        this.likeActive(this._likes);
        this._deleteBtnHidden();
        this._setEventListeners();
        this._chekImageLink();
        return this._element;
    }


    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener('click', this._handleCardClick);
        this._element.querySelector('.card__like').addEventListener('click', () => this._handleLikeClick(this._cardId, this._likeStatus));
        this._element.querySelector('.card__delete').addEventListener('click', () => this._handleCardDeleteClick(this._cardId, this.cardDelete));
    }

    cardDelete = () => {
        this._element.remove();
        this._element = null;
    }
}