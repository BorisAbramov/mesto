const showEditProfile = document.querySelector('.profile-info__edit');
const popup = document.querySelector('.popup');

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
/*let popupCloseAdd = document.querySelector('.popup-add__close');*/
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

const isOpened = 'popup_is-opened';
const isVisible = 'popup_is_visible';

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    toggleModalWindow(editModal, isOpened);
}

const insertCardItem = (item) => {
  const listItem = createCard(item)
  list.prepend(listItem)

}

function toggleModalWindow(modal, vision) {
  modal.classList.toggle(vision)
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
    const popupImgPic = document.querySelector('.popup__imgPic')
    const popupImgText = document.querySelector('.popup__imgText')
    
    popupImgPic.src = item.link
    popupImgText.textContent = item.name
    toggleModalWindow(imageModal, isVisible)
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
  toggleModalWindow(addCardModal, isOpened);
  

  const name = this.querySelector('#formAddInputName').value;
  const link = this.querySelector('#formAddInputLink').value;

  const item = {name, link};

  insertCardItem(item);

}); 

openEditModalButton.addEventListener('click', () => {
   toggleModalWindow(editModal, isOpened);
   inputName.value = profileName.textContent;
   inputJob.value = profileJob.textContent;
})

openAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal, isOpened))

closeEditModalButton.addEventListener('click', () => toggleModalWindow(editModal, isOpened))
closeAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal, isOpened))
closeImageModalButton.addEventListener('click', () => toggleModalWindow(imageModal, isVisible))