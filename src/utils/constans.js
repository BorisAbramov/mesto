export const inputName = document.getElementById('inputName'); //берем имя из инпут-формы
export const inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы
//open modal buttons
export const openEditModalButton= document.querySelector('.profile-info__edit')
export const openAddCardModalButton= document.querySelector('.profile__add')


import budapest from '../images/budapest-min.jpg';
import lakeAlps from '../images/lake-alps-min.jpg';
import stelvio from '../images/stelvio-min.jpg';
import krumlov from '../images/krumlov-min.jpg';
import praha from '../images/Praha-min.jpg';

export const initialCards = [
    {
      name: 'Будапешт',
      link: budapest
    },
    {
      name: 'Будапешт',
      link: budapest
    },
    {
      name: 'Озеро в Альпах',
      link: lakeAlps
    },
    {
      name: 'Стельвио',
      link: stelvio
    },
    {
      name: 'Чески Крумлов',
      link: krumlov
    },
    {
      name: 'Прага, панорамный вид',
      link: praha
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
