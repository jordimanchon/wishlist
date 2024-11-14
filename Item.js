class Item {
	constructor(name, picture) {
		this.name = name;
		this.picture = picture;
		this.prices = [];
	}

	addPrice(store, price, link) {
		this.prices.push({store: store, price: price, link: link});
	}
}