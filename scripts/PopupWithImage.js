import Popup from '../scripts/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._link = data.link;
        this._text = data.name;
        this._imageCaption = this._popupSelector.querySelector('.imageCaption');
        this._popupPicture = this._popupSelector.querySelector('.popupImage');
    }
    open() {
        super.open();
        this._popupPicture.src = this._link;
        this._popupPicture.alt = this._text;
        this._popupPicture.title = this._text;
        this._imageCaption.textContent = this._text;
    }
}