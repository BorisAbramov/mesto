import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {
  inputName,
  inputJob,
  openEditModalButton,
  openAddCardModalButton,
  initialCards,
  popupImageView,
  userData,
  editForm,
  addForm,
  validationConfig
} from '../utils/constans.js'

//-------final------------------------
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
//---открытие форм------
  openEditModalButton.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().info;
    popupWithFormEdit.open()
  })
  openAddCardModalButton.addEventListener('click', () => {
    popupWithFormAdd.open()
  })
//----------------------------------
popupWithImage.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
//----------------------------------
const editFormValidator  = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
const addFormValidator  = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();