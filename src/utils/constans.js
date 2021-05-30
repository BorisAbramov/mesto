//popup
export const editModal = document.querySelector('.popup_type_edit');
export const AddModal = document.querySelector('.popup_type_add-card');
export const imageModal = document.querySelector('.popup_type_image');
export const avatarModal = document.querySelector('.popup_type_update-avatar');

export const inputName = document.getElementById('inputName'); //берем имя из инпут-формы
export const inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы
//open modal buttons
export const openEditModalButton= document.querySelector('.profile-info__edit')
export const openAddCardModalButton= document.querySelector('.profile__add')

export const submitbuttonEditProfile = editModal.querySelector('.popup__submit');
export const submitbuttonAddCard = AddModal.querySelector('.popup__submit');
export const submitbuttonUpdateAvatar = avatarModal.querySelector('.popup__submit');

export const cardTemplate = '.list-element-template';
export  const popupImageView = '.popup_type_image'
export  const userData = {
    name: '.profile-info__name',
    info: '.profile-info__text',
    avatar: '.profile__avatar'
  };
export const editForm = document.querySelector('#popup-edit__form');
export const addForm = document.querySelector('#popup-add__form');
export const setupValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
export const popupCardDelete = '.popup_type_delete-card';
export const popupEditAvatar = '.popup_type_update-avatar';
export const cardContainer = '.list';
export const formUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');
export const popupWithErrorMessage = document.querySelector('.popup_type_error-message');
export const containerErrorMessage = popupWithErrorMessage.querySelector('.popup__title_type_error-message');
export const editAvatar = document.querySelector('.profile__avatar');

export const renderLoading = (submitButton, status) => {
  submitButton.textContent = status;
}

export const showErrorMessage = (err) => {
  popupWithErrorMessage.classList.add('popup_is-opened');
  containerErrorMessage.textContent = err;
  setTimeout(() => {
    popupWithErrorMessage.classList.remove('popup_is-opened');
  }, 3000);
}
