class Card {
    constructor(data, cardSelector, imageModal) {
      this._image = data.src;
      this._alt = data.alt;
      this._title = data.title;
      this._cardSelector = cardSelector;
      this.imageModal = imageModal;
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
      this._element.querySelector('.list__image').src = this._image;
      this._element.querySelector('.list__image').alt = this._alt;
      this._element.querySelector('.list__name').textContent = this._title;
  
      return this._element;
    }
    
    
    _likeCard(){
      this._listItemLike.classList.toggle('list__like_active')
    }
    _removeCard(){
      this._listItemDelete = this._element.querySelector('.list__basket')
      this._listItemDeleteList =  this._listItemDelete.closest('.list__element')
      this._listItemDelete.addEventListener('click', (evt) => {this._listItemDeleteList.remove()})
    }
    _setEventListeners() {
      this._listItemLike = this._element.querySelector('.list__like')
      this._listItemLike.addEventListener('click', (evt) => {
        this._likeCard()
      })  
      this._element.querySelector('.list__basket').addEventListener('click', () => {
        this._removeCard()
      })
  } 
  }

  export {Card};
