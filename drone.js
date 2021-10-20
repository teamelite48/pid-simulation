class Drone {
	maxVel = 15.8;

	constructor(){
		this.xPos = 95,
		this.yPos = 0,
		this.yVel = 0
	}

	setMotorSpeed(motorSpeed) {
		if (motorSpeed < -1.0) {
			motorSpeed = -1.0;
		}
		else if (motorSpeed > 1.0) {
			motorSpeed = 1.0;
		}

		this.yVel = motorSpeed * this.maxVel;

		if (drone.yPos == 0 && velocity < 0) {
			this.yVel = 0;
		}
	}

	getAltitude() {
		return this.yPos;
	}
}