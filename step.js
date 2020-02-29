const wpiStepper = require('wpi-stepper')
const Stepper = wpiStepper.Stepper
const MODES = wpiStepper.MODES

const stepsPerRev = 4096

const pins = [4, 17, 27, 22]


const motor = new Stepper({ pins, steps: stepsPerRev, mode: MODES.SINGLE });

motor.speed = 7; // 20 RPM
const FULL_TURN = motor.steps / 2

// motor.move(100)

async function deploymentMovement() {
    await motor.move(FULL_TURN)
    await motor.stop()
}

async function calibrate({ steps = 100, direction = 'forward' }) {
    const multiplier = direction === 'forward' ? 1 : -1;
    await motor.move(steps * multiplier)
    return motor.stop()
}

// move()
// calibrate()

if (process.argv[2] === '--run') {
    deploymentMovement()
}

process.on('SIGINT', async (signal) => {
    console.log('Cutting the motor power')
    await motor.stop()
    console.log('Stopping')
    process.exit(signal)
})

module.exports = {
    deploy: deploymentMovement,
    calibrate,
    stopMotor: async () => { await motor.hold(); await motor.stop() }
}