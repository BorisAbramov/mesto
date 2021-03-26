let ShowEditProfile = document.querySelector('.profile-info__edit');
let popup = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close');
let popupOverlay = document.querySelector('.popup__overlay');

let popupSubmit = document.querySelector('popup__submit');

let profileName = document.getElementById('name');
let profileJob = document.getElementById('job');

let inputName = document.getElementById('InputName');
let inputJob = document.getElementById('InputJob');

let formElement = document.querySelector('popup__form');

function ShowPopup(){
    popup.classList.add('popup_is-opened');
}

function ClosePopup(){
    popup.classList.remove('popup_is-opened');
}

function EditPopup(){
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function SavePopup(evt){
    evt.preventDefault(); 
    inputName.textContent = profileName.value;
    inputJob.textContent = profileJob.value;
}

function Edit(){
    ShowPopup();
    EditPopup()
}

function Save(){
    SavePopup();
    ClosePopup();
}

ShowEditProfile.addEventListener('click', Edit);

popupClose.addEventListener('click', ClosePopup);

/*
popupSubmit.addEventListener('click', Save);
*/
/*
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value

}

formElement.addEventListener('submit', formSubmitHandler); 
*/


