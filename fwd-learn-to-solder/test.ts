// button tests
// onEvent(event: jacdac.ButtonEvent, handler: () => void)
// holdDuration(): number
// isPressed(): boolean
console.log("Button pressed? " + buttons.BTN1.isPressed())
buttons.BTN1.onEvent(jacdac.ButtonEvent.Down, () => console.log("buttondown"))
buttons.BTN1.onEvent(jacdac.ButtonEvent.Up, () => console.log("buttonup"))
buttons.BTN1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log("Hold Duration: " + buttons.BTN1.holdDuration())
)

// light tests
// setBrightness(value: number)
lights.RED.setBrightness(0) // this line simply ensures the simulator pops up without having to press A
input.onButtonPressed(Button.A, function () {
    console.log("Test Start")
    console.log(
        "The brightness is changing every second for 6 seconds, but the Jacdac simulator only shows on / off."
    )
    basic.pause(1000)
    lights.RED.setBrightness(100)
    basic.pause(1000)
    lights.RED.setBrightness(75)
    basic.pause(1000)
    lights.RED.setBrightness(50)
    basic.pause(1000)
    lights.RED.setBrightness(25)
    basic.pause(1000)
    lights.RED.setBrightness(10)
    basic.pause(1000)
    lights.RED.setBrightness(0)
    console.log("Test End")
})
