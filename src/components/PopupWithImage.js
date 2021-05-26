import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._imgPic = this._popup.querySelector('.popup__imgPic');
        this._imgText = this._popup.querySelector('.popup__imgText');
    }
    open(data){
        super.open();
       // console.log(data)
        this._imgPic.src = data.link;
        this._imgPic.alt = data.name;
        this._imgText.textContent = data.name; 
    }
}
