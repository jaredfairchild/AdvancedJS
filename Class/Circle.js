class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}

	getArea() {
		super.getArea();

		return Math.PI * this.radius ** 2;
	}
}
