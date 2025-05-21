namespace sensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="Temperature Probe"
        //% block="$this °C"
        //% blockId=fwd_temperature_get_temperature
        fwdTemperature(): number {
            return super.temperature()
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
