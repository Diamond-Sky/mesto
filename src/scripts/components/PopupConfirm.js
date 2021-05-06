import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
    constructor({popupElement, handleFormSubmit}) {
    super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._popupContainer = this._popupElement.querySelector('.popup__container');
    }
    setEventListeners = () => { 
        super.setEventListeners();

    }
    open(cardId, cardDelete) {
      super.open();
      this._popupContainer.addEventListener('submit', () => this._handleFormSubmit(cardId, cardDelete));
    }
}