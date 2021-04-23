export default class UserInfo {
    constructor(profileData) {
        const { profileName, profileCaption } = profileData;
        this._userName = document.querySelector(`.${profileName}`);
        this._profileCaption = document.querySelector(`.${profileCaption}`);
        this._popupSelector = document.querySelector('.popup_edit');
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._profileInfo = document.querySelectorAll('.profile_info')
    }
    getUserInfo = () => {
        this._formValues = {};
        this._formValues.firstname = this._userName.textContent;
        this._formValues.lastname = this._profileCaption.textContent;
        return this._formValues;
    }
    setUserInfo = (firstname, lastname) => {

        this._userName.textContent = firstname;
        this._profileCaption.textContent = lastname;
    }

}