// pump tests
// isOn(): boolean
// setOn(on: boolean): void
// timedRun(duration: number): void
// setOn() is used in timedRun, so it is covered by timedRun() test
console.log("Pump on? " + motors.pump.isOn())
console.log("Run pump for 3s.")
motors.pump.timedRun(3)
basic.pause(1000)
console.log("1s... Pump on? " + motors.pump.isOn())
basic.pause(1000)
console.log("2s... Pump on? " + motors.pump.isOn())
basic.pause(1000)
console.log("3s... Pump on? " + motors.pump.isOn())

// continuous servo tests
// getSpeed(): number
// setSpeed(speed: number): void

// positional servo tests
// getAngle(): number
// setAngle(angle: number): void
// setAngleAndWait(angle: number): void
input.onButtonPressed(Button.A, function () {
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos0))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos1))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos2))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos3))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos4))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos5))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos6))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos7))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos8))
    basic.pause(500)
    motors.leftServo.setAngle(motors.positionPresets(motors.PresetServoPosition.Pos9))
})
input.onButtonPressed(Button.B, function () {
    motors.leftServo.setAngle(0)
})