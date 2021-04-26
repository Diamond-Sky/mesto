import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormAddSubmit }) {
        super(popupElement);
        this._handleFormAddSubmit = handleFormAddSubmit;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._popupContainer = this._popupElement.querySelector('.popup__container');
    }
    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }
    setEventListeners = () => {
        super.setEventListeners();
        debugger;
        this._popupContainer.addEventListener('submit', this._handleFormAddSubmit);
    }
    close = () => {
        super.close();
        this._popupContainer.reset();
    }
}