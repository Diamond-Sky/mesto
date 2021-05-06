import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormAddSubmit }) {
        super(popupElement);
        this._handleFormAddSubmit = handleFormAddSubmit;
        this._submitButton = this._popupElement.querySelector('.popup__save');
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._popupContainer = this._popupElement.querySelector('.popup__container');
        this._handleFormAddSubmit = this._handleFormAddSubmit.bind(this);
    }

    renderLoading = (isLoading) => {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить'
        }

    }

    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._popupContainer.addEventListener('submit', () => this._handleFormAddSubmit(this._getInputValues()));
    }

    close = () => {
        super.close();
        this._popupContainer.reset();
    }
}