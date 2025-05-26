namespace sensors {
    //% fixedInstances
    export class FwdPhClient extends modules.AcidityClient {
        private calibrated: boolean = false
        private standard1: number
        private reading1: number
        private standard2: number
        private reading2: number

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's pH reading.
         */
        //% group="pH"
        //% block="$this pH"
        //% blockId=fwd_ph_get_ph
        ph(): number {
            if (this.calibrated) {
                const slope =
                    (this.standard2 - this.standard1) /
                    (this.reading2 - this.reading1)
                const intercept = this.standard1 - slope * this.reading1
                const reading = super.acidity()

                return slope * reading + intercept
            } else {
                return super.acidity()
            }
        }

        /**
         * Calibrates the pH probe against 2 solutions with a known pH for accurate readings.
         * The calibration will not apply to the live value displayed in MakeCode when the Micro:bit is connected.
         * @param standard1
         * @param reading1
         * @param standard2
         * @param reading2
         */
        //% group="pH"
        //% block="Calibrate $this Measures $standard1 as $reading1 Measures $standard2 as $reading2"
        //% blockId=fwd_ph_calibrate
        //% inlineInputMode=external
        calibrate(
            standard1: number,
            reading1: number,
            standard2: number,
            reading2: number
        ): void {
            this.standard1 = standard1
            this.reading1 = reading1
            this.standard2 = standard2
            this.reading2 = reading2
            this.calibrated = true
        }

        /**
         * Returns true when the pH is past the provided threshold in the designated direction.
         * @param threshold what pH to check against
         * @param direction over or under the threshold
         */
        //% group="pH"
        //% block="$this is $direction $threshold (\\pH)"
        //% blockId=fwd_ph_is_past_threshold
        isPastThreshold(
            threshold: number,
            direction: ThresholdDirection
        ): boolean {
            const difference = this.ph() - threshold > 0
            const isPastThreshold =
                (direction === ThresholdDirection.Over && difference) ||
                (direction === ThresholdDirection.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPhClient("ph1")
    //% fixedInstance whenUsed
    export const ph2 = new FwdPhClient("ph2")
    //% fixedInstance whenUsed
    export const ph3 = new FwdPhClient("ph3")
    //% fixedInstance whenUsed
    export const ph4 = new FwdPhClient("ph4")
}
