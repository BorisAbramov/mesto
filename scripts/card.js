const popupElement = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');


class Card {
    constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.list__element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.list__image').src = this._link;
      this._element.querySelector('.list__name').textContent = this._name;
  
      return this._element;
    }
    
    _handleOpenPopup(){
     // popupImage.src = this._image;
      popupElement.classList.add('popup_is-opened');
    }
    _handleClosePopup(){
     // popupImage.src = '';
      popupElement.classList.remove('popup_is-opened');
    }
    _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });
  
    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  } 
  }

  export {Card};
