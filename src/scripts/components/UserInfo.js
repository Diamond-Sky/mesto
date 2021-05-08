export default class UserInfo { 
    constructor(profileData) { 
        const { profileName, profileCaption, profileAvatar } = profileData;
        this._element = document.querySelector('.profile__block');
        this._profileName = profileName;
        this._profileCaption = profileCaption;
        this._profileAvatar = profileAvatar;
    }
    // Я просто хотел, чтобы профиль отрисовывался после получения данных, что бы не было пустых дом без данных

    getUserInfo = () => {
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