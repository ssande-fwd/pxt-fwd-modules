// rotary encoder tests
buttons.dial1.fwdOnDialTurned(buttons.DialDirection.CW, difference =>
    console.log("turned -> position " + buttons.dial1.fwdPosition())
)
buttons.dial1.fwdOnDialTurned(buttons.DialDirection.CCW, difference =>
    console.log("turned <- position " + +buttons.dial1.fwdPosition())
)

// button tests
buttons.dialButton1.fwdOnPress(jacdac.ButtonEvent.Down, () =>
    console.log("dialdown")
)
buttons.dialButton1.fwdOnPress(jacdac.ButtonEvent.Up, () =>
    console.log("dialup")
)
basic.forever(function () {
    if (buttons.dialButton1.fwdIsPressed()) {
        console.log(buttons.dialButton1.fwdHoldDuration())
        basic.pause(500)
    }
})
