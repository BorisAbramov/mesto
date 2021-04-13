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
/*
function insertCard(item){ //пока для первоначальной загрузки
  const listItem = listElementTemplate.cloneNode(true)
  const listItemTitle = listItem.querySelector('.list__name')
  const listItemLink = listItem.querySelector('.list__image')
  listItemTitle.textContent = item.name
  listItemLink.src = item.link
  listItemLink.alt = item.name

  list.prepend(listItem);
}

const card = initialCards.forEach(item => { //делаем первоначальную загрузку карточек на сайте
  insertCard(item)
})

const formAddSubmitHandler = e => { //вставка новой карточки
  e.preventDefault();
  const inputValueName = formAddItemInputName.value;
  const inputValueLink = formAddItemInputLink.value;
  const listItem = listElementTemplate.cloneNode(true);
  const listItemTitle = listItem.querySelector('.list__name');
  const listItemLink = listItem.querySelector('.list__image');
  listItemTitle.textContent = inputValueName;
  listItemLink.src = inputValueLink;
  listItemLink.alt = inputValueName;

  list.prepend(listItem);

  closePopupAdd();
}
*/

const insertCardItem = (item) => {
  const listItem = createCard(item)
  const listItemLink = listItem.querySelector('.list__image')
  const listItemTitle = listItem.querySelector('.list__name')
  listItemLink.src = item.link
  listItemTitle.textContent = item.name
  listItemLink.alt = item.name
  list.prepend(listItem)
}

function createCard(item) {
  const listItem = listElementTemplate.cloneNode(true)
  const listItemDelete = listItem.querySelector('.list__basket')
  listItemDelete.addEventListener('click', () => listItem.remove())

  const listItemLike = listItem.querySelector('.list__like')
  listItemLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('.list__like_active')
  })

  const imgClickHandler = (evt) => {
    popupImgPic.src = item.link
    popupImgText.textContent = item.name
    togglePopupVisible(popupImg)
  }

  const listItemImage = listItem.querySelector('.list__image')
  listItemImage.addEventListener('click', imgClickHandler)
  return listItem
}

initialCards.forEach(item => {
  insertCardItem(item)
})
/*
const formSubmitHandlerAdd = (evt) => {
  evt.preventDefault()
  const item = {name: popupTitle.value, link: popupLink.value}
  insertCardItem(item)
  togglePopupVisible(popupAdd)
}
*/



//слушатели
showEditProfile.addEventListener('click', showPopup);

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 

showImageAdd.addEventListener('click', showPopupAdd);

popupCloseAdd.addEventListener('click', closePopupAdd);
/*
formAdd.addEventListener('submit', formAddSubmitHandler);

like.addEventListener('click', likeActive);
*/