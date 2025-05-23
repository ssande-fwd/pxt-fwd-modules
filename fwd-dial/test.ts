// rotary encoder tests
// fwdPosition()
// fwdOnDialTurned(direction: DialDirection, handler: () => void): void
buttons.dial1.fwdOnDialTurned(buttons.DialDirection.CW, () =>
    console.log("turned -> position " + buttons.dial1.fwdPosition())
)
buttons.dial1.fwdOnDialTurned(buttons.DialDirection.CCW, () =>
    console.log("turned <- position " + +buttons.dial1.fwdPosition())
)

// button tests
// fwdOnPress(event: jacdac.ButtonEvent, handler: () => void)
// fwdHoldDuration(): number
// fwdIsPressed(): boolean
buttons.dialButton1.fwdOnPress(jacdac.ButtonEvent.Down, () =>
    console.log("dialdown")
)
buttons.dialButton1.fwdOnPress(jacdac.ButtonEvent.Up, () =>
    console.log("dialup")
)
basic.forever(function () {
    if (buttons.dialButton1.fwdIsPressed()) {
        console.log(buttons.dialButton1.fwdHoldDuration())
        basic.pause(250)
    }
})
