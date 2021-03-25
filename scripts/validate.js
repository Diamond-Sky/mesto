

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add(someObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(someObject.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(someObject.inputErrorClass);
    errorElement.classList.remove(someObject.errorClass);
    errorElement.textContent = '';
  };

  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(someObject.inputSelector));
    const buttonElement = formElement.querySelector(someObject.submitButtonSelector);
    
    
    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach((inputElement) => {
      
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(someObject.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement);
      
    });
  }
  
   const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  const toggleButtonState = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
      
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      
      buttonElement.removeAttribute('disabled', 'disabled');
    }
  }


const someObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(someObject);