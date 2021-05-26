export default class Card {
    constructor(data, cardSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
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
      const listImage = this._element.querySelector('.list__image');
      listImage.src = this._link;
      listImage.alt = this._name;
      this._element.querySelector('.list__name').textContent = this._name;
      this._setEventListeners();

      return this._element;
    }
   
    _likeCard(){
      this._listItemLike.classList.toggle('list__like_active')
    }
    _removeCard(){
      this._element.remove();
    }
    _setEventListeners() {
      this._listItemLike = this._element.querySelector('.list__like')
      this._listItemLike.addEventListener('click', () => {
        this._likeCard()
      })  
      this._element.querySelector('.list__basket').addEventListener('click', () => {
        this._removeCard()
      })
      this._element.querySelector('.list__image').addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
  } 
  }

  
