let showEditProfile = document.querySelector('.profile-info__edit');
let popup = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close');

let profileName = document.getElementById('name'); //берем имя из профиля страницы
let profileJob = document.getElementById('job'); //берем профессию из профиля страницы

let inputName = document.getElementById('inputName'); //берем имя из инпут-формы
let inputJob = document.getElementById('inputJob'); //берем профессию из инпут-формы

let formElement = document.querySelector('.popup__form');

//modals
const editModal = document.querySelector('.popup_type_edit')
const addCardModal = document.querySelector('.popup_type_add-card')
const imageModal = document.querySelector('.popup_type_image')

//open modal buttons
const openEditModalButton= document.querySelector('.profile-info__edit')
const openAddCardModalButton= document.querySelector('.profile__add')
//const openImageModalButton= document.querySelector('.')

//close modal buttons
const closeEditModalButton= editModal.querySelector('.popup__close')
const closeAddCardModalButton= addCardModal.querySelector('.popup__close')
const closeImageModalButton= imageModal.querySelector('.popup__close')

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

function toggleModalWindow(modal) {
    modal.classList.toggle('popup_is-opened')
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    toggleModalWindow(editModal);
}

const insertCardItem = (item) => {
  const listItem = createCard(item)
  const listItemLink = listItem.querySelector('.list__image')
  const listItemTitle = listItem.querySelector('.list__name')
  listItemLink.src = item.link
  listItemTitle.textContent = item.name
  listItemLink.alt = item.name
  list.prepend(listItem)

}
function togglePopupVisible(modal) {
  modal.classList.toggle('popup_is_visible')
}

function createCard(item) {
  const listItem = listElementTemplate.cloneNode(true)
 
  const listItemDelete = listItem.querySelector('.list__basket')  
  listItemDelete.addEventListener('click', function() {this.parentNode.remove()})

  const listItemLike = listItem.querySelector('.list__like')
  listItemLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('list__like_active')
  })

  const imgClickHandler = (evt) => {
    const popupImgPic = document.querySelector('.popup__imgPic')
    const popupImgText = document.querySelector('.popup__imgText')
    
    popupImgPic.src = item.link
    popupImgText.textContent = item.name
    togglePopupVisible(imageModal)
  }

  const listItemImage = listItem.querySelector('.list__image')
  listItemImage.addEventListener('click', imgClickHandler)
  return listItem
}

initialCards.forEach(item => {
  insertCardItem(item)
})

formElement.addEventListener('submit', formSubmitHandler); 

formElementAdd.addEventListener('submit', function(ev) {
  ev.preventDefault();
  toggleModalWindow(addCardModal);
  

  const name = this.querySelector('#formAddInputName').value;
  const link = this.querySelector('#formAddInputLink').value;

  const item = {name, link};

  insertCardItem(item);

}); 

openEditModalButton.addEventListener('click', () => {
   toggleModalWindow(editModal);
   inputName.value = profileName.textContent;
   inputJob.value = profileJob.textContent;
})

openAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))

closeEditModalButton.addEventListener('click', () => toggleModalWindow(editModal))
closeAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))
closeImageModalButton.addEventListener('click', () => togglePopupVisible(imageModal))