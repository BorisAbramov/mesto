export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
		this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    open(){
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(event){
        if (event.key === 'Escape'){
            this.close();
        }
    }
    _handleClose(evt){
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            this.close(this._popup);
          }
    }

    setEventListeners(){
        this._popup.addEventListener('click', this._handleClose);
    }
}

