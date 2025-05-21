input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    console.log(sensors.ph1.fwdPh())
})
input.onButtonPressed(Button.B, function () {
    sensors.ph1.fwdPhCalibrate(4, 5, 7, 8)
})
input.onButtonPressed(Button.B, function () {
    sensors.ph1.fwdPhCalibrate(7, 8, 4, 5)
})
