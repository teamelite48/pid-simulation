class Canvas {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		var canvas = document.getElementById("canvas");
		canvas.width = this.width
		canvas.height = this.height;

		this.ctx = canvas.getContext("2d");

		this.droneImg = new Image();
		this.droneImg.src = "assets/drone.png";
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.drawLandscape();
		this.drawGoal();
	}

	draw(obj) {

		this.ctx.drawImage(this.droneImg, 95, obj.yPos * -1 + 455, 64, 64);

	}

	drawLandscape() {
		this.ctx.beginPath();
		this.ctx.fillStyle = '#009A17';
		this.ctx.fillRect(0, 496, 256, 16);
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.fillStyle = 'SkyBlue';
		this.ctx.fillRect(0, 0, 256, 496)
	}

	drawGoal() {
		const goalWidth = 34;
		const topOfGoal = 239;
		const bottomOfGoal = topOfGoal + goalWidth;

		this.ctx.beginPath();
		this.ctx.setLineDash([5,5]);
		this.ctx.moveTo(0, topOfGoal);
		this.ctx.lineTo(512, topOfGoal);
		this.ctx.strokeStyle = 'black';
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.setLineDash([5,5]);
		this.ctx.moveTo(0, bottomOfGoal);
		this.ctx.lineTo(512, bottomOfGoal);
		this.ctx.stroke();
	}
}