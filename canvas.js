class Canvas {
	width = 256;
	height = 256;

	constructor() {
		var canvas = document.getElementById("canvas");
		canvas.width = this.width
		canvas.height = this.height;

		this.ctx = canvas.getContext("2d");

		this.droneImg = new Image();
		this.droneImg.src = "assets/drone.png";
	}

	draw(drone) {
		this.clearCanvas();	
		this.drawLandscape();
		this.drawGoal();
		this.drawDrone(drone)
	}

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	drawLandscape() {
		this.ctx.beginPath();
		this.ctx.fillStyle = '#009A17';
		this.ctx.fillRect(0, 240, 256, 16);
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.fillStyle = 'SkyBlue';
		this.ctx.fillRect(0, 0, 256, 240)
	}

	drawGoal() {
		const goalWidth = 34;
		const topOfGoal = 64;
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

	drawDrone(drone) {
		this.ctx.drawImage(this.droneImg, drone.xPos, drone.yPos * -3 + 200, 64, 64);	
	}
}