class PIDController {
	kP = 5;
	kI = 0.00002;
	kD = 1.4;

	error = 0;
	lastError = 0;

	p = 0;
	i = 0;
	d = 0;

	constructor() {}

	calculate(measurement, setpoint) {
		this.error = setpoint - measurement;

		this.p = this.kP * this.error/ setpoint;
		this.i += this.kI * this.error;
		this.d = this.kD * (this.error - this.lastError);

		this.lastError = this.error;

		return this.p + this.i + this.d;
	}
}
