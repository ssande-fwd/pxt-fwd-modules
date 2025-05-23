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
// setAngleAndWait doesn't wait properly in the simulator but does physically
// 'ADD SIMULATORS' button will add a 180 servo instead of a 270
motors.leftServo.setAngleAndWait(0)
input.onButtonPressed(Button.A, function () {
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos0))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos1))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos2))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos3))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos4))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos5))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos6))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos7))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos8))
    motors.leftServo.setAngleAndWait(motors.positionPresets(motors.PresetServoPosition.Pos9))
})
