class Timer {
	startTime = +new Date();
	prevTime = this.startTime;
	timestep = 0;

	nextTimestep() {
		const time = +new Date();
		const timestep = (time - this.prevTime) / 1000;
		this.prevTime = time;

		return timestep
	}

	getElapsedTime() {
		const elapsedMillis = +new Date() - this.startTime;

		const minutes = Math.floor(elapsedMillis / 60000);
		const seconds = Math.floor((elapsedMillis % 60000) / 1000);
		const millis = elapsedMillis - (minutes * 60000) - (seconds * 1000);

		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
	}
}