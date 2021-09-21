class Triangle extends Shape {
	constructor(color, height, base) {
		super(color);
		this.height = height;
		this.base = base;
	}

	getArea() {
		super.getArea();

		return (this.height * this.base) / 2;
	}
}
