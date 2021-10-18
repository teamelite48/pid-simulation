var canvas = new Canvas(256, 512);
var timer = new Timer();
var pixelsPerMeter = 10;
var fps = 120;

var pid = new PIDController();
var drone = new Drone();
var setpoint = 230;

setInterval(simulation, 1000/fps);

function simulation() {
	var speed = pid.calculate(drone.getAltitude(), setpoint)
	drone.setMotorSpeed(speed);

	updatePosition();
	draw();
	updateTelemetry();
}

function updatePosition() {
	var timestep = timer.nextTimestep();

	drone.yPos += (drone.yVel - 9.8) * timestep * pixelsPerMeter;

	if (drone.yPos <= 0) {
		drone.yPos = 0;
	}
}

function draw() {
	canvas.clear();
	canvas.draw(drone);
}

function updateTelemetry() {
	document.getElementById("altitude").innerText = `${drone.yPos.toFixed(2)}m`
	document.getElementById("error").innerText = `${pid.error.toFixed(2)}m`;
	document.getElementById("p").innerText = `${pid.p.toFixed(2)}`;
	document.getElementById("i").innerText = `${pid.i.toFixed(2)}`;
	document.getElementById("d").innerText = `${pid.d.toFixed(2)}`;
	document.getElementById("speed").innerText = `${drone.motorSpeed.toFixed(2)}`

	var velocity = drone.yVel - 9.8;

	if (drone.yPos == 0 && velocity < 0) {
		velocity = 0;
	}

	document.getElementById("velocity").innerText = `${(velocity).toFixed(2)} m/s`;
}
