// ph(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("ph: " + sensors.ph1.ph())
basic.forever(function () {
    if (sensors.ph1.isPastThreshold(25, sensors.ThresholdDirection.Over)) {
        console.log(sensors.ph1.ph() + " is over 25°C")
    }
    if (sensors.ph1.isPastThreshold(25, sensors.ThresholdDirection.Under)) {
        console.log(sensors.ph1.ph() + " is under 25°C")
    }
    basic.pause(1000)
})
