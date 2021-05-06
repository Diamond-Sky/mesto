export default class UserInfo { 
    constructor({profileData, openAddCardHandler, openEditHandler, openAvatarEditHandler}, templateSelector) { 
        const { profileName, profileCaption, profileAvatar } = profileData;
        this._openAddCardHandler = openAddCardHandler;
        this._openEditHandler = openEditHandler;
        this._openAvatarEditHandler = openAvatarEditHandler;
        this._templateSelector = templateSelector;
        this._profileName = profileName;
        this._profileCaption = profileCaption;
        this._profileAvatar = profileAvatar;
    }

    _getTemplate() {
        const profileBlockElement = document.querySelector(`${this._templateSelector}`).content.querySelector('.profile__block').cloneNode(true);
        return profileBlockElement;
    }

    generateProfileBlock(data) {
        this._element = this._getTemplate();
        this.setUserInfo(data);
        this.setUserAvatar(data);
        this._setEventListeners();
        return this._element
    }

    _setEventListeners () {
        this._element.querySelector('.profile__add-button').addEventListener('click', this._openAddCardHandler);
        this._element.querySelector('.profile__edit-button').addEventListener('click', () => this._openEditHandler(this._getUserInfo()));
        this._element.querySelector(`.${this._profileAvatar}`).addEventListener('click', this._openAvatarEditHandler);
    }

    _getUserInfo = () => {
        this._formValues = {}; 
        this._formValues.firstname = this._element.querySelector(`.${this._profileName}`).textContent; 
        this._formValues.lastname = this._element.querySelector(`.${this._profileCaption}`).textContent; 
        return this._formValues; 
    }

    setUserInfo = (data) => {
        this._element.querySelector(`.${this._profileName}`).textContent = data.name; 
        this._element.querySelector(`.${this._profileCaption}`).textContent = data.about;
    }

    setUserAvatar = (data) => {
        this._element.querySelector(`.${this._profileAvatar}`).src = data.avatar;
    }
 
} 