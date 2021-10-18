class Timer {
	prevTime = +new Date();
	timestep = 0;

	nextTimestep() {
		var time = +new Date();
		var timestep = (time - this.prevTime) / 1000;
		this.prevTime = time;

		return timestep
	}
}