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

	output = 0;

	constructor() {}

	calculate(measurement, setpoint) {
		const elapsedTime = this.timer.nextTimestep();
		this.error = (setpoint - measurement)/setpoint;

		this.p = this.error;
		this.i += this.error * elapsedTime;
		this.d = (this.error - this.prevError) / elapsedTime;

		this.prevError = this.error;

		this.output = this.kP * this.p + this.kI * this.i + this.kD * this.d;

		return this.output;
	}
}
