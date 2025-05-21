namespace sensors {
    //% fixedInstances
    export class FwdDcVoltageClient extends modules.DcVoltageMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * The voltage measurement.
         */
        //% group="Energy"
        //% block="%this measurement (V)"
        //% blockId=fwd_dcvoltagemeasurement_measurement___get
        measurement(): number {
            return super.reading()
        }

        /**
         * Run code when the measurement changes by the given threshold value.
         */
        //% group="Energy"
        //% blockId=fwd_dcvoltagemeasurement_on_measurement_change
        //% block="on %this measurement changed by %threshold (V)"
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            super.onMeasurementChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed
    export const voltage1 = new FwdDcVoltageClient("voltage1")
    //% fixedInstance whenUsed
    export const voltage2 = new FwdDcVoltageClient("voltage2")
    //% fixedInstance whenUsed
    export const voltage3 = new FwdDcVoltageClient("voltage3")
    //% fixedInstance whenUsed
    export const voltage4 = new FwdDcVoltageClient("voltage4")

    //% fixedInstances
    export class FwdDcCurrentClient extends modules.DcCurrentMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * The current measurement.
         */
        //% group="Energy"
        //% block="%this measurement (mA)"
        //% blockId=fwd_dccurrentmeasurement_measurement___get
        measurement(): number {
            const amps = super.reading()
            const milliamps = Math.round(amps * 1000)
            return milliamps
        }

        /**
         * Run code when the measurement changes by the given threshold value.
         */
        //% group="Energy"
        //% blockId=fwd_dccurrentmeasurement_on_measurement_change
        //% block="on %this measurement changed by %threshold (mA)"
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            super.onMeasurementChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed
    export const current1 = new FwdDcCurrentClient("current1")
    //% fixedInstance whenUsed
    export const current2 = new FwdDcCurrentClient("current2")
    //% fixedInstance whenUsed
    export const current3 = new FwdDcCurrentClient("current3")
    //% fixedInstance whenUsed
    export const current4 = new FwdDcCurrentClient("current4")
}
