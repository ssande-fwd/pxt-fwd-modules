// The "ADD SIMULATORS" button doesn't work for this one.
// Need to manually add DC current/voltage measurement

// voltage tests
// voltage(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("Voltage: " + sensors.voltage1.voltage())
input.onButtonPressed(Button.B, function () {
    if (sensors.voltage1.isPastThreshold(5, sensors.ThresholdDirection.Over)) {
        console.log(sensors.voltage1.voltage() + " is over 5V")
    }
    if (
        sensors.voltage1.isPastThreshold(25, sensors.ThresholdDirection.Under)
    ) {
        console.log(sensors.voltage1.voltage() + " is under 5V")
    }
})

//current tests
// current(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("Current: " + sensors.current1.current())
input.onButtonPressed(Button.A, function () {
    if (
        sensors.current1.isPastThreshold(100, sensors.ThresholdDirection.Over)
    ) {
        console.log(sensors.current1.current() + " is over 100mA")
    }
    if (
        sensors.current1.isPastThreshold(100, sensors.ThresholdDirection.Under)
    ) {
        console.log(sensors.current1.current() + " is under 100mA")
    }
})
