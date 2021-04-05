export {FormValidator}
class FormValidator {
    constructor(someObject, formElement) {
        this._someObject = someObject;
        this._formElement = formElement;
    }
    
    enableValidation = () => {
        this._setEventListeners(this._formElement);
          
    }
    
    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(this._someObject.inputSelector));
        const buttonElement = formElement.querySelector(this._someObject.submitButtonSelector);
        
        
        this._toggleButtonState(inputList, buttonElement);
        
        inputList.forEach((inputElement) => {
          
          inputElement.addEventListener('input',  () => {
                
            this._checkInputValidity(formElement, inputElement);
            this._toggleButtonState(inputList, buttonElement);
          });
        });
    };

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._someObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._someObject.errorClass);
  };
  
  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._someObject.inputErrorClass);
    errorElement.classList.remove(this._someObject.errorClass);
    errorElement.textContent = '';
  };

  
  _checkInputValidity = (formElement, inputElement) => {
      
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };
  
  
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState = (inputList, buttonElement) => {
    if(this._hasInvalidInput(inputList)) {
      
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      
      buttonElement.removeAttribute('disabled', 'disabled');
    }
  }



}