class PIDController {
	timer = new Timer();

	error = 0;
	lastError = 0;

	p = 0;
	i = 0;
	d = 0;

	output = 0;

	constructor(kP, kI, kD) {
		this.kP = kP;
		this.kI = kI;
		this.kD = kD;
	}

	calculate(measurement, setpoint) {
		const timestep = this.timer.nextTimestep();
		this.error = (setpoint - measurement) / setpoint;

		this.p = this.error;
		this.i += this.error * timestep;
		this.d = (this.error - this.lastError) / timestep;

		this.lastError = this.error;
		this.output = this.kP * this.p + this.kI * this.i + this.kD * this.d;

		return this.output;
	}
}
