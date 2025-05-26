basic.forever(() => {
    console.log("Test Start")
    console.log(
        "The brightness is changing every second for 6 seconds, but the Jacdac simulator only shows on / off."
    )
    basic.pause(1000)
    modules.lightbulb1.setBrightness(100)
    basic.pause(1000)
    modules.lightbulb1.setBrightness(75)
    basic.pause(1000)
    modules.lightbulb1.setBrightness(50)
    basic.pause(1000)
    modules.lightbulb1.setBrightness(25)
    basic.pause(1000)
    modules.lightbulb1.setBrightness(10)
    basic.pause(1000)
    modules.lightbulb1.setBrightness(0)
    console.log("Test End")
})
