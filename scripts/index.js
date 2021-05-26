import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import Section from './Section.js';

const popupEdit = document.querySelector('popup__form_type_edit');
const popupAddCard = document.querySelector('popup__form_type_add');
const popupImage = document.querySelector('.popup_type_image');

const profileName = document.getElementById('name'); //берем имя из профиля страницы
const profileJob = document.getElementById('job'); //берем профессию из профиля страницы

const inputName = document.getElementById('inputName'); //берем имя из инпут-формы
const inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы

const formElement = document.querySelector('.popup__form');

//modals
const editModal = document.querySelector('.popup_type_edit')
const addCardModal = document.querySelector('.popup_type_add-card')
const imageModal = document.querySelector('.popup_type_image')

//open modal buttons
const openEditModalButton= document.querySelector('.profile-info__edit')
const openAddCardModalButton= document.querySelector('.profile__add')

//toggle


//popup добавления фоток
const formElementAdd = document.querySelector('#popup-add__form');
const list = document.querySelector('.list');
const initialCards = [
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

const formAddItemInputName = document.getElementById('formAddInputName');
const formAddItemInputLink = document.getElementById('formAddInputLink');

const popupImgPic = document.querySelector('.popup__imgPic')
const popupImgText = document.querySelector('.popup__imgText')


//------------
//const popupWithImage = new PopupWithImage('.popup_type_image');
//popupWithImage.setEventListeners();
//
//function imgClickHandler(src, title) {
//  popupWithImage.open(src, title);
//}

//------------

/*
function createCard(src, title) {
	const card = new Card({ src, title }, '.list-element-template', imgClickHandler)
	const cardElement = card.generateCard()
	return cardElement
}
*/
/*
initialCards.forEach((item) => {
  const cardElement = createCard(item.src, item.title);
  list.prepend(cardElement);
});
*/



//-------final------------------------
const popupImageView = '.popup_type_image'

const userData = {
  name: '.profile-info__name',
  info: '.profile-info__text'
};

const userInfo = new UserInfo(userData);

const popupWithImage = new PopupWithImage(popupImageView);

const popupWithFormEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data)
  }
})

const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (data) => {
    renderCards([data])
    console.log(data, 2)
  }
})
function handleCardClick(data){
  popupWithImage.open(data);
}

const renderCards = data => {
  const cardList = new Section({
      items: data,
      renderer: (item) => {
        const card = new Card(item, '.list-element-template', handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
      },
    },
    '.list'
  );
  cardList.renderItems();
};

renderCards(initialCards);


  openEditModalButton.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().info;
    popupWithFormEdit.open()
  })
  openAddCardModalButton.addEventListener('click', () => {
    popupWithFormAdd.open()
  })


popupWithImage.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();

//----------------------------------
const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


const editForm = document.querySelector('#popup-edit__form');

const editFormValidator  = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

const addForm = document.querySelector('#popup-add__form');

const addFormValidator  = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();