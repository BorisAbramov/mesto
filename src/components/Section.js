export default class Section{
    constructor({ getInitialCards, renderer }, containerSelector, showErrorMessage) {
		this._getInitialCards = getInitialCards;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	//	this._showErrorMessage = showErrorMessage;
	}

	renderItems(data) {
		data ? data.forEach(item => this._renderer(item)) : this._getInitialCards();
	}

	addItem(element) {
		this._container.prepend(element);
	}

	// _getItems() {
	// 	this._getInitialCards()
	// 	  .then(data => {
	// 		if (data) {
	// 		  this.renderItems(data.reverse());
	// 		}
	// 	  })
	// 	  .catch(err => {
	// 		this._showErrorMessage(err);
	// 	  })
	//   }
}

