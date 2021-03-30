let showEditProfile = document.querySelector('.profile-info__edit');
let popup = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close');

let profileName = document.getElementById('name'); //берем имя из профиля страницы
let profileJob = document.getElementById('job'); //берем профессию из профиля страницы

let inputName = document.getElementById('InputName'); //берем имя из инпут-формы
let inputJob = document.getElementById('InputJob'); //берем профессию из инпут-формы

let formElement = document.querySelector('.popup__form');

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

showEditProfile.addEventListener('click', showPopup);

popupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 





