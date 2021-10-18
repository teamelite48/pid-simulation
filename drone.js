class Drone {
	maxVel = 15.8;
	motorSpeed = 0;

	constructor(){
		this.xPos = 118,
		this.yPos = 0,
		this.yVel = 0,
		this.width = 10,
		this.height = 10
	}

	setMotorSpeed(motorSpeed) {
		if (motorSpeed < -1.0) {
			motorSpeed = -1.0;
		}
		else if (motorSpeed > 1.0) {
			motorSpeed = 1.0;
		}

		this.motorSpeed = motorSpeed
		this.yVel = this.motorSpeed * this.maxVel;
	}

	getAltitude() {
		return this.yPos;
	}
}