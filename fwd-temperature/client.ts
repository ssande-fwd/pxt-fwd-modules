namespace sensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading in °C.
         */
        //% group="Temperature Probe"
        //% block="$this °C"
        //% blockId=fwd_temperature_get_temperature
        fwdTemperature(): number {
            return super.temperature()
        }

        /**
         * Runs code when the temperature changes by more than a certain amount between readings
         * @param threshold how many percent two readings have to differ by before code is run
         */
        //% group="Temperature Probe"
        //% block="on $this distance changed by $threshold m"
        //% blockId=fwd_temperature_on_temperature_change
        fwdOnTemperatureChangedBy(
            threshold: number,
            handler: () => void
        ): void {
            super.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed
    export const temperature1 = new FwdTemperatureClient("temperature1")
    //% fixedInstance whenUsed
    export const temperature2 = new FwdTemperatureClient("temperature2")
    //% fixedInstance whenUsed
    export const temperature3 = new FwdTemperatureClient("temperature3")
    //% fixedInstance whenUsed
    export const temperature4 = new FwdTemperatureClient("temperature4")
}
