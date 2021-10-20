var canvas = new Canvas();
var timer = new Timer();
var fps = 60;

var pid = new PIDController();
var drone = new Drone();
var setpoint = 50;

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

	drone.yPos += (drone.yVel - 9.8) * timestep;

	if (drone.yPos <= 0) {
		drone.yPos = 0;
	}
}

function draw() {
	canvas.clear();
	canvas.draw(drone);
}

function updateTelemetry() {
	document.getElementById("setpoint").innerText = `${setpoint.toFixed(2)}m`
	document.getElementById("altitude").innerText = `${drone.yPos.toFixed(2)}m`
	document.getElementById("error").innerText = `${pid.error.toFixed(2)}`;
	document.getElementById("p").innerText = `${pid.p.toFixed(2)}`;
	document.getElementById("i").innerText = `${pid.i.toFixed(2)}`;
	document.getElementById("d").innerText = `${pid.d.toFixed(2)}`;
	document.getElementById("kPP").innerText = `${(pid.kP * pid.p).toFixed(2)}`;
	document.getElementById("kII").innerText = `${(pid.kI * pid.i).toFixed(2)}`;
	document.getElementById("kDD").innerText = `${(pid.kD * pid.d).toFixed(2)}`;
	document.getElementById("output").innerText = `${pid.output.toFixed(2)}`

	var velocity = drone.yVel - 9.8;

	if (drone.yPos == 0 && velocity < 0) {
		velocity = 0;
	}

	document.getElementById("velocity").innerText = `${(velocity).toFixed(2)} m/s`;
}
