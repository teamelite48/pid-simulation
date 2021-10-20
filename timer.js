class Timer {
	startTime = +new Date();
	prevTime = this.startTime;
	timestep = 0;

	nextTimestep() {
		var time = +new Date();
		var timestep = (time - this.prevTime) / 1000;
		this.prevTime = time;

		return timestep
	}

	getElapsedTime() {
		var elapsedMillis = +new Date() - this.startTime;

		var minutes = Math.floor(elapsedMillis / 60000);
		var seconds = Math.floor((elapsedMillis % 60000) / 1000);
		var millis = elapsedMillis - (minutes * 60000) - (seconds * 1000);
		
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
	}
}