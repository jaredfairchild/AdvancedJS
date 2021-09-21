class Rectangle extends Shape {
	constructor(color, height, width) {
		super(color);
		this.height = height;
		this.width = width;
	}

	getArea() {
		super.getArea();

		return this.height * this.width;
	}
}
