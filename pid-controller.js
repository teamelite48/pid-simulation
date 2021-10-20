class PIDController {
	timer = new Timer();

	kP = 3;
	kI = 0.15;
	kD = 0;

	error = 0;
	prevError = 0;

	p = 0;
	i = 0;
	d = 0;

	constructor() {}

	calculate(measurement, setpoint) {
		const elapsedTime = this.timer.nextTimestep();
		this.error = (setpoint - measurement)/setpoint;

		this.p = this.kP * this.error;
		this.i += this.kI * (this.error * elapsedTime);
		this.d = this.kD * ((this.error - this.prevError)/elapsedTime);

		this.prevError = this.error;

		return this.p + this.i + this.d;
	}
}
