export default class Section{
    constructor({ api, renderer }, containerSelector, showErrorMessage) {
		this._api = api;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
		this._showErrorMessage = showErrorMessage;
		//this._getItems = this._getItems.bind(this);
		//this._getItems();
	}

	renderItems(data) {
		data ? data.forEach(item => this._renderer(item)) : this._getItems();
	//console.log(this)
	//data.forEach(item => {
	//	this._renderer(item)
	//});
	}

	addItem(element) {
		this._container.prepend(element);
	}

	_getItems() {
		this._api.getInitialCards()
		  .then(data => {
			if (data) {
			  this.renderItems(data.reverse());
			}
		  })
		  .catch(err => {
		//	this._showErrorMessage(err);
			console.log(err)
		  })
	  }
}

