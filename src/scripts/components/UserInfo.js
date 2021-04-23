export default class UserInfo {
    constructor(profileData) {
        const { profileName, profileCaption } = profileData;
        this._userName = document.querySelector(`.${profileName}`);
        this._profileCaption = document.querySelector(`.${profileCaption}`);
        
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