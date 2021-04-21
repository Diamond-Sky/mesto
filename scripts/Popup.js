import PopupWithForm from "./PopupWithForm.js";

export default class Popup {
    constructor(popupSelector) {
        
        this._popupSelector = popupSelector;
    }
    open () {
        
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }
    close () {
        
        this._popupSelector.classList.remove('popup_opened');
        this._removeEventListeners();
    }
    
    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close();
        }
    }
    setEventListeners () {
        
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
              }
              if (evt.target.classList.contains('popup__close')) {
                this.close();
              }
        });
        
        document.addEventListener('keydown', this._handleEscClose);
    }
    _removeEventListeners = () => {
        this._popupSelector.removeEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
              }
              if (evt.target.classList.contains('popup__close')) {
                this.close();
              }
        });
        this._popupSelector.removeEventListener('keydown', this._handleEscClose);
    }
}