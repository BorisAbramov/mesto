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


showEditProfile.addEventListener('click', showPopup);

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 

showImageAdd.addEventListener('click', showPopupAdd);

popupCloseAdd.addEventListener('click', closePopupAdd);



