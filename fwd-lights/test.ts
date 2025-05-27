// lights tests
// setBrightness(value: number)
basic.forever(() => {
    console.log("Test Start")
    console.log(
        "The brightness is changing every second for 6 seconds, but the Jacdac simulator only shows on / off."
    )
    basic.pause(1000)
    lights.lights1.setBrightness(100)
    console.log("Light on? " + lights.lights1.isOn())
    basic.pause(1000)
    lights.lights1.setBrightness(75)
    basic.pause(1000)
    lights.lights1.setBrightness(50)
    basic.pause(1000)
    lights.lights1.setBrightness(25)
    basic.pause(1000)
    lights.lights1.setBrightness(10)
    basic.pause(1000)
    lights.lights1.setBrightness(0)
    console.log("Light on? " + lights.lights1.isOn())
    console.log("Test End")
})
