import PopupWithForm from './PopupWithForm.js';

export default class PopupEdit extends PopupWithForm {

    constructor({ data, handleFormAddSubmit }) {
        super({ data, handleFormAddSubmit });

        this._popupSelector = data;

        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    }
    open(userData) {
        this._setInputValues(userData);
        super.open();

    }
    _setInputValues = (userData) => {
        for (let i = 0; i < this._inputList.length; i++) {
            this._inputList[i].value = Object.values(userData)[i];
        }
    }
    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }
}
