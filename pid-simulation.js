var canvas = new Canvas();
var timer = new Timer();
var fps = 60;

var pid = new PIDController(0, 0, 0);
var drone = new Drone();
var setpoint = 50;
var gravity = 9.8;

var simulationLoop;

start();

function start() {
	endSimulationLoop();
	beginSimulationLoop();
}

function beginSimulationLoop() {
	var kP = getInputValue("kP");
	var kI = getInputValue("kI");
	var kD = getInputValue("kD");

	timer = new Timer();
	pid = new PIDController(kP, kI, kD);
	drone = new Drone();

	simulationLoop = setInterval(simulation, 1000/fps);
}

function endSimulationLoop() {
	if (simulationLoop) {
		clearInterval(simulationLoop);
	}
}

function simulation() {
	var speed = pid.calculate(drone.getAltitude(), setpoint)
	drone.setMotorSpeed(speed);

	updatePosition();
	updateTelemetry();
	canvas.draw(drone);
}

function updatePosition() {
	var timestep = timer.nextTimestep();
	
	drone.yPos += (drone.yVel - gravity) * timestep;

	if (drone.yPos <= 0) {
		drone.yPos = 0;
	}
}

function updateTelemetry() {
	setTelemetry("setpoint", `${setpoint.toFixed(2)}m`);
	setTelemetry("altitude", `${drone.yPos.toFixed(2)}m`);
	setTelemetry("error", `${pid.error.toFixed(2)}`);
	setTelemetry("p", `${pid.p.toFixed(2)}`);
	setTelemetry("i", `${pid.i.toFixed(2)}`);
	setTelemetry("d", `${pid.d.toFixed(2)}`);
	setTelemetry("kPP", `${(pid.kP * pid.p).toFixed(2)}`);
	setTelemetry("kII", `${(pid.kI * pid.i).toFixed(2)}`);
	setTelemetry("kDD", `${(pid.kD * pid.d).toFixed(2)}`);
	setTelemetry("output", `${pid.output.toFixed(2)}`);
	setTelemetry("velocity", `${(drone.yVel - gravity).toFixed(2)} m/s`);
	setTelemetry("elapsedTime", timer.getElapsedTime());
}

function getInputValue(id) {
	return document.getElementById(id).value;
}

function setTelemetry(id, text) {
	document.getElementById(id).innerText = text;
}
