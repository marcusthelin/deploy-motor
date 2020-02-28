const wpiStepper = require('wpi-stepper')
const Stepper = wpiStepper.Stepper
const MODES = wpiStepper.MODES

const stepsPerRev = 4096

const pins = [4, 17, 27, 22]


const motor = new Stepper({ pins, steps: stepsPerRev, mode: MODES.SINGLE });

motor.speed = 8; // 20 RPM
const FULL_TURN = motor.steps / (8 / 60)

// motor.move(100)

async function move() {
    await motor.move(FULL_TURN)
    // await motor.move(-FULL_TURN)
    motor.stop()
}

async function calibrate() {
    await motor.move(-100)
}

move()
// calibrate()

process.on('SIGINT', () => {
    console.log('Cutting the motor power')
    motor.stop()
})