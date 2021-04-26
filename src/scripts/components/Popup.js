export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClick = this._handleOverlayClick.bind(this);
        this._handleEscClick = this._handleEscClick.bind(this);
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {

        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClick(evt) {
        if (evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupElement.addEventListener('click', this._handleOverlayClick);
        this._popupElement.addEventListener('click', this._handleEscClick);
    }
}