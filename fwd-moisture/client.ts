namespace sensors {
    //% fixedInstances
    export class FwdSoilMoistureClient extends modules.SoilMoistureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's moisture level as a number between 0-100
         */
        //% group="Moisture"
        //% block="$this level (\\%)"
        //% blockId=fwd_moisture_get_moisture_level
        fwdMoistureLevel(): number {
            return super.moisture()
        }

        /**
         * Runs code when the moisture level goes above or below a set threshold
         * @param threshold what moisture level is the cut off before the code is run
         * @param direction run when the level is above or below your set threshold
         */
        //% group="Moisture"
        //% block="$this level is $direction $threshold (\\%)"
        //% blockId=fwd_moisture_is_moisture_level_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        fwdIsMoistureLevelPastThreshold(
            threshold: number,
            direction: ThresholdDirection
        ): boolean {
            const difference = super.moisture() - threshold > 0
            const isPastThreshold =
                (direction === ThresholdDirection.Over && difference) ||
                (direction === ThresholdDirection.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const moisture1 = new FwdSoilMoistureClient("moisture1")
    //% fixedInstance whenUsed
    export const moisture2 = new FwdSoilMoistureClient("moisture2")
    //% fixedInstance whenUsed
    export const moisture3 = new FwdSoilMoistureClient("moisture3")
    //% fixedInstance whenUsed
    export const moisture4 = new FwdSoilMoistureClient("moisture4")
}
