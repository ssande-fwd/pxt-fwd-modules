// rotary encoder tests
modules.dial1.fwdOnDialTurned(modules.DialDirection.CW, (difference) => console.log("turned -> position " + modules.dial1.fwdPosition()));
modules.dial1.fwdOnDialTurned(modules.DialDirection.CCW, (difference) => console.log("turned <- position " + + modules.dial1.fwdPosition()));

// button tests
modules.dialButton1.fwdOnPress(jacdac.ButtonEvent.Down, () => console.log("dialdown"));
modules.dialButton1.fwdOnPress(jacdac.ButtonEvent.Up, () => console.log("dialup"));
basic.forever(function () {
    if (modules.dialButton1.fwdIsPressed()) {
        console.log(modules.dialButton1.fwdHoldDuration())
    }
})
