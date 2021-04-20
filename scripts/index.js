const showEditProfile = document.querySelector('.profile-info__edit');
const popup = document.querySelector('.popup');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');

const popupClose = document.querySelector('.popup__close');


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


//close modal buttons
const closeEditModalButton= editModal.querySelector('.popup__close')
const closeAddCardModalButton= addCardModal.querySelector('.popup__close')
const closeImageModalButton= imageModal.querySelector('.popup__close')

//popup добавления фоток
const popupAdd = document.querySelector('.popup-add');
const formElementAdd = document.querySelector('#popup-add__form');
const showImageAdd = document.querySelector('.profile__add');
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
const listElementTemplate = document.querySelector('.list-element-template').content 

const formAdd = document.querySelector('#popup-add__form');
const formAddItemInputName = document.getElementById('formAddInputName');
const formAddItemInputLink = document.getElementById('formAddInputLink');
const like = document.querySelector('.list__like');

const popupImgPic = document.querySelector('.popup__imgPic')
const popupImgText = document.querySelector('.popup__imgText')

const insertCardItem = (item) => {
  const listItem = createCard(item)
  list.prepend(listItem)

}

function openPopup(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEsc);
}
function createCard(item) {
  const listItem = listElementTemplate.cloneNode(true)
  
  const listItemLink = listItem.querySelector('.list__image')
  const listItemTitle = listItem.querySelector('.list__name')
  listItemLink.src = item.link
  listItemTitle.textContent = item.name
  listItemLink.alt = item.name

  const listItemDelete = listItem.querySelector('.list__basket')
  const listItemDeleteList =  listItemDelete.closest('.list__element')
  listItemDelete.addEventListener('click', (evt) => {listItemDeleteList.remove()})
  const listItemLike = listItem.querySelector('.list__like')
  listItemLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('list__like_active')
  })

  const imgClickHandler = (evt) => {
    popupImgPic.src = item.link
    popupImgText.textContent = item.name
    openPopup(imageModal)
  }

  const listItemImage = listItem.querySelector('.list__image')
 /* listItemImage.addEventListener('click', imgClickHandler)*/



 //-----открытие всплывающей картинки
  listItemImage.addEventListener('click', function(evt) {
    imgClickHandler();
  })
  return listItem
}

initialCards.forEach(item => {
  insertCardItem(item)
})
//----отправка редактирование профиля
formElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  closeModal(editModal);

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  
  formElement.reset();
}); 
// ------отправка добавления карточек
formElementAdd.addEventListener('submit', function(ev) {
  ev.preventDefault();
  closeModal(addCardModal);

  const name = ev.target.querySelector('#formAddInputName').value;
  const link = ev.target.querySelector('#formAddInputLink').value;

  if (name === '' || link === ''){
    const Button = addCardModal.querySelector('popup__submit')
    Button.setAttribute("disabled", true);
    Button.classList.add('popup__submit_inactive');
  }

  const item = {name, link};

  insertCardItem(item);
  formElementAdd.reset();

}); 



//------------------------
function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEsc);
}

//----------------------------------
function handleEsc (event){
  if (event.key === 'Escape'){
    const activePopup = document.querySelector('.popup_is-opened');
    closeModal(activePopup);
  }
}

popupEdit.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup_type_edit') || evt.target.classList.contains('popup__close')){
    const popupOpened = document.querySelector('.popup_is-opened');
    closeModal(popupOpened);
  }
})
popupAddCard.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup_type_add-card') || evt.target.classList.contains('popup__close')){
    const popupOpened = document.querySelector('.popup_is-opened');
    closeModal(popupOpened);
  }
})
popupImage.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup_type_image') || evt.target.classList.contains('popup__close')){
    const popupOpened = document.querySelector('.popup_is-opened');
    closeModal(popupOpened);
  }
})

//-----------------------

//----открытие редактирования профиля
openEditModalButton.addEventListener('click', () => {
  openPopup(editModal);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
})
//-----открытие добавления карточек
openAddCardModalButton.addEventListener('click', () => {
  openPopup(addCardModal);
})
