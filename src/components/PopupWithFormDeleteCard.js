import PopupWithForm from './PopupWithForm.js';

export default class PopupWithFormDeleteCard extends PopupWithForm {
  constructor(popupSelector) {
    super(popupSelector);
  }
  // _handleSubmit(e) {
  //   e.preventDefault();
  //   this._handleFormSubmit(this._element);
  // }
  // open(element) {
  //   super.open();
  //   this._element = element;
  // }


  open(card) {
    super.open();
    this._card = card;
    console.log(card)
  }
  
  _handleSubmit(e) {
      e.preventDefault();
      this._handleFormSubmit(this._card);
    }

}
