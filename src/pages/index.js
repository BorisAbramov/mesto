import './index.css';

//Object.prototype.forEach = function(a) {
//  console.log(a)
//}//

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithFormDeleteCard from '../components/PopupWithFormDeleteCard.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';
import {
  inputName,
  inputJob,
  openEditModalButton,
  openAddCardModalButton,
  submitbuttonEditProfile,
  submitbuttonAddCard,
  submitbuttonUpdateAvatar,
  cardTemplate,
  popupImageView,
  userData,
  editForm,
  addForm,
  setupValidation,
  popupCardDelete,
  popupEditAvatar,
  cardContainer,
  renderLoading,
  showErrorMessage,
  formUpdateAvatar,
  editAvatar
} from '../utils/constans.js'

//-------final------------------------
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: '64d048a5-4ac8-4b66-a3b0-8ed02fba0094',
    'Content-Type': 'application/json'
  }
});

const cardList = new Section({
  api: api,
  renderer: (item) => {
    //console.log(item)
    const card = new Card(item, cardTemplate, {
      handleCardClick: (data) => {
        popupWithImage.open(data);
      },
      handleCardLike: (method, id, likeCounter) => {
        api.likeCard(method, id)
          .then(data => {
            likeCounter.textContent = data.likes.length;
          }).catch(err => {
            showErrorMessage(err);
          })
      }
    }, popupWithCardDelete, userInfo.getUserInfo()._id);
    //console.log(card)
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
},
cardContainer,
showErrorMessage
);

const userInfo = new UserInfo(userData);

const popupWithImage = new PopupWithImage(popupImageView);

const popupWithCardDelete = new PopupWithFormDeleteCard({
  popupSelector: popupCardDelete,
  handleFormSubmit: ({
    element,
    id
  }) => {
    api.deleteCard(id)
      .then(() => {
        element.remove();
        popupWithCardDelete.close();
      })
      .catch(err => {
        showErrorMessage(err);
      })
  }
});

const popupWithFormEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    renderLoading(submitbuttonEditProfile, 'Сохранение...');
    api.updateDataUser(data)
      .then(data => {
        userInfo.setUserInfo(data);
        popupWithFormEdit.close();
      })
      .catch(err => {
        showErrorMessage(err);
      })
      .finally(() => {
        renderLoading(submitbuttonEditProfile, 'Сохранение');
      })
  }
})

const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (data) => {
    renderLoading(submitbuttonAddCard, 'Сохранение...');
    api.addNewCard(data)
      .then(data => {
        const card = new Card(data, cardTemplate, {
          handleCardClick: (data) => {
            popupWithImage.open(data);
          },
          handleCardLike: (method, id, likeCounter) => {
            api.likeCard(method, id)
              .then(data => {
                likeCounter.textContent = data.likes.length;
              }).catch(err => {
                showErrorMessage(err);
              })
          }
        }, popupWithCardDelete, userInfo.getUserInfo()._id);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        popupWithFormAdd.close();
      })
      .catch(err => {
        showErrorMessage(err);
      })
      .finally(() => {
        renderLoading(submitbuttonAddCard, 'Сохранение');
      })
  }
})

const popupWithFormUpdateAvatar = new PopupWithForm({
  popupSelector: popupEditAvatar,
  handleFormSubmit: (link) => {
    renderLoading(submitbuttonUpdateAvatar, 'Сохранение...');
    api.updateUserAvatar({
        avatar: link.link
      })
      .then(data => {
        userInfo.setUserAvatar({
          link: data.avatar
        });
        popupWithFormUpdateAvatar.close();
      })
      .catch(err => {
        showErrorMessage(err);
      })
      .finally(() => {
        renderLoading(submitbuttonUpdateAvatar, 'Сохранение');
      })
  }
})
/*
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
*/




//---открытие форм------
  openEditModalButton.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().info;
    popupWithFormEdit.open()
  })
  openAddCardModalButton.addEventListener('click', () => {
    popupWithFormAdd.open()
  })
  editAvatar.addEventListener('click', () => {
    popupWithFormUpdateAvatar.open();
  });
//----------------------------------
popupWithImage.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithCardDelete.setEventListeners();
popupWithFormUpdateAvatar.setEventListeners();
//----------------------------------
const editFormValidator  = new FormValidator(setupValidation, editForm);
editFormValidator.enableValidation();
const addFormValidator  = new FormValidator(setupValidation, addForm);
addFormValidator.enableValidation();
const formUpdateAvatarValidator = new FormValidator(setupValidation, formUpdateAvatar);
formUpdateAvatarValidator.enableValidation();


api.getUserInfo()
  .then(data => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      _id: data._id
    });
    userInfo.setUserAvatar({
      link: data.avatar
    })
  })
  .then(() => {
    cardList.renderItems();
  })
  .catch(err => {
    showErrorMessage(err);
  })
 