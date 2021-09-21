class Dog {
	constructor(breed, color, name, height, weight) {
		this.breed = breed;
		this.color = color;
		this.name = name;
		this.height = height;
		this.weight = weight;
	}

	shake() {
		return `${this.name} shakes.`;
	}

	sit() {
		return `${this.name} sits.`;
	}

	layDown() {
		return `${this.name} lays down.`;
	}
}
