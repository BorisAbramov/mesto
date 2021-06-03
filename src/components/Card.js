export default class Card {
    constructor(data, cardSelector, {handleCardClick, handleCardLike}, popupWithCardDelete, userInfo) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._popupWithCardDelete = popupWithCardDelete;
      this._id = data._id;
      this._like = data.likes.length;
      this._handleCardLike = handleCardLike;
      this._data = data;
      this._userId = userInfo;  
      this._setEventListeners = this._setEventListeners.bind(this);
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
      this._elementCardPlace = this._element.querySelector('.list__place');
      this._elementCardPlace.style.backgroundImage = `url(${this._link})`;
      this._element.querySelector('.list__name').textContent = this._name;
      this._elementCardLike = this._element.querySelector('.list__like');
      this._elementCardDelete = this._element.querySelector('.list__basket');
      this._elementLikeCounter = this._element.querySelector('.list__likes-counter');
      this._elementLikeCounter.textContent = this._like;
      this._setEventListeners();
      if (!(this._data.owner._id === this._userId)) {
        this._elementCardDelete.remove();
      }

    if (this._data.likes.some(item => {
        return item._id === this._userId
      })) {
      this._elementCardLike.classList.add('list__like_active');
    } 

      return this._element;
    }

    _handleDeleteCard() {
      this._popupWithCardDelete.open({
        element: this._element,
        id: this._id
      });
    }

    _showImage() {
      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    }
    
    _handleLikeIcon() {
      if (this._elementCardLike.classList.contains('list__like_active')) {
        this._handleCardLike('DELETE', this._id, this._elementLikeCounter)
        this._elementCardLike.classList.remove('list__like_active');
      } else {
        this._handleCardLike('PUT', this._id, this._elementLikeCounter)
        this._elementCardLike.classList.add('list__like_active');
      }
  
    }

    removeCard() {
      this._element.remove();
    }

    _setEventListeners() {
     this._elementCardDelete.addEventListener('click', () => {
       
       this._handleDeleteCard();
     });
      this._elementCardLike.addEventListener('click', () => {
        this._handleLikeIcon();
      });
     this._element.querySelector('.list__place').addEventListener('click', () => {
       this._showImage();
     });
  } 
  }

  
