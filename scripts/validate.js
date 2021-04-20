
const showInputError = (formElement, inputElement, errorMessage, errorClass, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  };

  const getErrorMessage = (inputElement) => {
    const defaultErrorHandler = (inputElement) => inputElement.validationMessage;
    const urlErrorHandler = (inputElement) => {
      if (inputElement.validity.typeMismatch) {
        return "Пожалуйста, введите верный url";
      }
  
      if (inputElement.validity.valueMissing) {
        return "Пожалуйста, заполните url";
      }
    };
    const errorHandlers = {
      url: urlErrorHandler,
      DEFAULT: defaultErrorHandler,
    };
  
    const inputName = inputElement.name;
    const errorHandler = errorHandlers[inputName] || errorHandlers.DEFAULT;
  
    return errorHandler(inputElement);
  };
  
  const checkInputValidity = (formElement, inputElement, errorClass, inputErrorClass) => {
    const isInputNotValid = !inputElement.validity.valid;
  
    if (isInputNotValid) {
      const errorMessage = getErrorMessage(inputElement);
  
      showInputError(formElement, inputElement, errorMessage, errorClass, inputErrorClass);
    } else {
      hideInputError(formElement, inputElement, errorClass, inputErrorClass);
    }
  };
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  
    if (hasNotValidInput) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(inactiveButtonClass);
    }
  };


  //-------------------------------
  const setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
    //-------
   
    //-------



    toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
  
    
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, options.errorClass, options.inputErrorClass);
        
        toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
      });
    });
  };
  
  const enableValidation = (options = { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formElements = document.querySelectorAll(options.formSelector);
    const formList = Array.from(formElements);
  
    formList.forEach((formElement) => {
      setEventListeners(formElement, options);
    });
  };
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
  