import Popup from '../scripts/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    }
    open(event) {
        
        super.open();
        
        const imageCaption = this._popupSelector.querySelector('.imageCaption');
        const popupPicture = this._popupSelector.querySelector('.popupImage');
        const imageForPopup = event.target;
        popupPicture.src = imageForPopup.src;
        popupPicture.alt = imageForPopup.alt;
        popupPicture.title = imageForPopup.alt;
        imageCaption.textContent = imageForPopup.alt;
    }
}