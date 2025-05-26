// onFloatChange(state: FloatState, handler: () => void)
// floatStateConditional(state: FloatState): boolean
// floatState(): string
sensors.float1.onFloatChange(sensors.FloatState.raised, () => {
    console.log("Event: Raised")
})
sensors.float1.onFloatChange(sensors.FloatState.lowered, () => {
    console.log("Event: Lowered")
})
if (sensors.float1.floatStateConditional(sensors.FloatState.raised)) {
    console.log("State: " + sensors.float1.floatState)
}
if (sensors.float1.floatStateConditional(sensors.FloatState.lowered)) {
    console.log("State: " + sensors.float1.floatState)
}
