namespace sensors {

    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="Temperature"
        //% block="$this °C"
        //% blockId=fwd_temperature_get_temperature
        fwdTemperature(): number {
            return super.temperature();
        }
    }

    //% fixedInstance whenUsed
    export const temp1 = new FwdTemperatureClient("temp1");
}