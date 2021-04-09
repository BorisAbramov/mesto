let showEditProfile = document.querySelector('.profile-info__edit');
let popup = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close');

let profileName = document.getElementById('name'); //берем имя из профиля страницы
let profileJob = document.getElementById('job'); //берем профессию из профиля страницы

let inputName = document.getElementById('inputName'); //берем имя из инпут-формы
let inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы

let formElement = document.querySelector('.popup__form');

//popup добавления фоток
let popupAdd = document.querySelector('.popup-add');
let formElementAdd = document.querySelector('.popup-add__form');
let showImageAdd = document.querySelector('.profile__add');
let popupCloseAdd = document.querySelector('.popup-add__close');
const list = document.querySelector('.list');
const initialCards = [
    {
      name: 'Озеро Вёртер',
      link: './images/worther-see-min.jpg'
    },
    {
      name: 'Гора Эльбрус',
      link: './images/Elbrus.jpg'
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
      name: 'Карачаево-Черкесия',
      link: './images/karachaevo.jpg'
    }
  ];
const listElementTemplate = document.querySelector('.list-element-template').content 
const formAdd = document.querySelector('.popup-add__form');
const formAddItemInputName = document.getElementById('formAddInputName');
const formAddItemInputLink = document.getElementById('formAddInputLink');
const like = document.querySelector('.list__like');

//popup функции
function showPopup(){
    popup.classList.add('popup_is-opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}
function closePopup(){
    popup.classList.remove('popup_is-opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup();
}
//popup фотки функции
function showPopupAdd(){
    popupAdd.classList.add('popup-add_is-opened');
}
function closePopupAdd(){
    popupAdd.classList.remove('popup-add_is-opened');
}

const card = initialCards.forEach(item => { //делаем первоначальную загрузку карточек на сайте
  const listItem = listElementTemplate.cloneNode(true)
  const listItemTitle = listItem.querySelector('.list__name')
  const listItemLink = listItem.querySelector('.list__image')
  listItemTitle.textContent = item.name
  listItemLink.src = item.link

  list.append(listItem);
})

const formAddSubmitHandler = e => {
  e.preventDefault();
  const inputValueName = formAddItemInputName.value;
  const inputValueLink = formAddItemInputLink.value;
  const listItem = listElementTemplate.cloneNode(true);
  listItemTitle.textContent = inputValueName;
  listItemLink.src = inputValueLink;

  list.append(listItem);
}


//слушатели
showEditProfile.addEventListener('click', showPopup);

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 

showImageAdd.addEventListener('click', showPopupAdd);

popupCloseAdd.addEventListener('click', closePopupAdd);

formAdd.addEventListener('submit', formAddSubmitHandler);

