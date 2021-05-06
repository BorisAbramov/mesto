class Card {
    constructor(data, cardSelector, imageModal) {
      this._image = data.src;
      this._alt = data.alt;
      this._title = data.title;
      this._cardSelector = cardSelector;
      this._imageModal = imageModal;
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
      this._setEventListeners();
      listImage.src = this._image;
      listImage.alt = this._alt;
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
      this._element.querySelector('.list__image').addEventListener('click', () => {
        this._imageModal(this._image, this._title)
      });
  } 
  }

  export {Card};
