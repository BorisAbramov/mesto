export default class FormValidator {
    constructor(data, formElement) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;
        this._inactiveButtonClass = data.inactiveButtonClass;
    }
    _showInputError(inputElement, errorMessage) {
        inputElement.classList.add(this._inputErrorClass);
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
        errorElement.textContent = errorMessage
        errorElement.classList.add(this._errorClass)
    }
    _hideInputError(inputElement) {
        inputElement.classList.remove(this._inputErrorClass)
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
        errorElement.textContent = ''
        errorElement.classList.remove(this._errorClass)
    }
    _disablePopupBtn() {
        const hasNotValidInput = this._inputList.some(inputElement => !inputElement.validity.valid)
        if (hasNotValidInput) {
            this._buttonElement.setAttribute("disabled", true)
        } else {
            this._buttonElement.removeAttribute("disabled")
        }
    }
    _checkInputValidity() {
        const isInputValid = inputElement.validity.valid;
        if (!isInputValid) {
            const errorMessage = inputElement.validationMessage;
            showInputError(formElement,inputElement,errorMessage, inputErrorClass, errorClass);
       }else {
           hideInputError(formElement, inputElement, inputErrorClass)
       }     
    }
    _checkInputValidity(inputElement) {
        const isInputValid = inputElement.validity.valid;
        if (!isInputValid) {
            const errorMessage = inputElement.validationMessage
            this._showInputError(inputElement, errorMessage)
        } else {
            this._hideInputError(inputElement)
        }
    }
   
    _setSubmitButtonState(isFormValid) {
        const formButton = this._formElement.querySelector(this._submitButtonSelector);
        if (isFormValid) {
          formButton.removeAttribute('disabled');
          formButton.classList.remove(this._inactiveButtonClass);
        } else {
          formButton.setAttribute('disabled', true);
          formButton.classList.add(this._inactiveButtonClass);
        }
      }
      _checkAllInputsValidity(inputList) {
        const isFormValid = inputList.every((inputField) => {
          return inputField.validity.valid;
        });
        this._setSubmitButtonState(isFormValid);
      }

      _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._checkAllInputsValidity(this._inputList);
          });
    
        });
      }
    enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._formElement.addEventListener('reset', () => {
      if (this._formElement.classList.contains('popup__form_type_edit-profile')) {
        this._setSubmitButtonState(true);
      } else {
        this._setSubmitButtonState(false);
      }

      this._inputList.forEach((inputElement) => {
        this._hideError(inputElement);
      });
    });
  }
}