export const inputName = document.getElementById('inputName'); //берем имя из инпут-формы
export const inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы
//open modal buttons
export const openEditModalButton= document.querySelector('.profile-info__edit')
export const openAddCardModalButton= document.querySelector('.profile__add')
export const initialCards = [
    {
      name: 'Озеро Вёртер',
      link: './images/worther-see-min.jpg'
    },
    {
      name: 'Будапешт',
      link: './images/budapest-min.jpg'
    },
    {
      name: 'Озеро в Альпах',
      link: './images/lake-alps-min.jpg'
    },
    {
      name: 'Стельвио',
      link: './images/stelvio-min.jpg'
    },
    {
      name: 'Чески Крумлов',
      link: './images/krumlov-min.jpg'
    },
    {
      name: 'Прага, панорамный вид',
      link: './images/Praha-min.jpg'
    }
  ];

export  const popupImageView = '.popup_type_image'
export  const userData = {
    name: '.profile-info__name',
    info: '.profile-info__text'
  };
export const editForm = document.querySelector('#popup-edit__form');
export const addForm = document.querySelector('#popup-add__form');
export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
