import Popup from '../scripts/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({data , handleFormAddSubmit}) {
    super(data);
        this._popupSelector = data;
        this._handleFormAddSubmit = handleFormAddSubmit;
        this._inputSelector = this._popupSelector.querySelectorAll('.popup__input');
        this._popupContainer = this._popupSelector.querySelector('.popup__container');
    }
    _getInputValues = () => {
        this._inputList = this._inputSelector;
    
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return [this._formValues];
    }
    setEventListeners = () => {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', this._handleFormAddSubmit.bind(this));
    }
    close = () => {
        super.close();
        this._popupContainer.reset();
    }
}
