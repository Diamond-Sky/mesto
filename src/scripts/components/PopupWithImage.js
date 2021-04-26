import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._imageCaption = this._popupElement.querySelector('.imageCaption');
        this._popupPicture = this._popupElement.querySelector('.popupImage');
    }

    open(popupWithImageData) {
        super.open();
        const { name, link } = popupWithImageData;
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popupPicture.title = name;
        this._imageCaption.textContent = name;
    }
}