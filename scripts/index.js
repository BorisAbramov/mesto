import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import Section from './Section.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
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
//  popupWi//thImage.open(src, title);
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
const userData = {
  name: '.profile-info__name',
  info: '.profile-info__text'
};

const userInfo = new UserInfo(userData);

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithFormEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data)
  }
})
popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (data) => {
    renderCards([data])
  }
})
popupWithFormAddCard.setEventListeners();

const renderCards = data => {
  const cardList = new Section({
      items: data,
      renderer: (item) => {
        const card = new Card(item, '.list-element-template', {
          handleCardClick: (data) => {
            popupWithImage.open(data);
          }
        });
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
  popupWithFormEditProfile.open();
});

openAddCardModalButton.addEventListener('click', () => {
  popupWithFormAddCard.open();
});

//------------------------------------

/*
const getCard = (data) => {
	const newCard = new Card(
		data,
		'.list-element-template',
		() => popupWithImage.open(data.src, data.title)
	)

	return newCard.generateCard()
}


const cardList = new Section(
	{
		items: initialCards,
		renderer: (item) => {
			cardList.addItem(getCard(item))
		}
	}, list)

  cardList.renderItems()


// Вставляем новую карточку через попап
const addCardPopup = new PopupWithForm({
	popupSelector: addCardModal,
	handleFormSubmit: (formData) => {
		cardList.addItem(getCard({
			title: formData['popup__input_type_place'],
			src: formData['popup__input_type_link']
		}))

		addCardPopup.close()
	}
})

openAddCardModalButton.addEventListener('click', () => {
	addFormValidator.resetValidation()
	addCardPopup.open()
});

// Редактирование профиля
const editProfilePopup = new PopupWithForm({
	popupSelector: profilePopup,
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo({
			userNameValue: formData['profile-info__name'],
			userAboutValue: formData['profile-info__text']
		});
		editProfilePopup.close()
	}
})

const userInfo = new UserInfo({
	userNameSelector: profileName,
	userAboutSelector: profileAbout
})

// Заполняем поля в попапе для редактирования профиля
const getProfileInfo = () => {
	const profileInfo = userInfo.getUserInfo()
	nameInput.value = profileInfo.userName
	aboutInput.value = profileInfo.userAbout
	editFormValidator.resetValidation()
	editProfilePopup.open()
}

openEditModalButton.addEventListener('click', getProfileInfo)

//-----открытие добавления карточек
//openAddCardModalButton.addEventListener('click', () => {
//  openPopup(addCardModal);
//})
*///
//----------------------------------
const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//------------------
//previewImagePopup.setEventListeners()
//addCardPopup.setEventListeners()
//openEditModalButton.setEventListeners()
//------------------
const editForm = document.querySelector('#popup-edit__form');

const editFormValidator  = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

const addForm = document.querySelector('#popup-add__form');

const addFormValidator  = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();