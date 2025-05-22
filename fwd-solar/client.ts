namespace sensors {
    //% fixedInstances
    export class FwdSolarClient extends modules.LightLevelClient {
        MAX_REPORT_BRIGHTNESS = 100
        MAX_SERVICE_BRIGHTNESS = 1

        toBlocksBrightness(serviceBrightness: number): number {
            return (
                (this.MAX_REPORT_BRIGHTNESS * serviceBrightness) /
                this.MAX_SERVICE_BRIGHTNESS
            )
        }

        toServiceBrightness(reportBrightness: number): number {
            return (
                (this.MAX_SERVICE_BRIGHTNESS * reportBrightness) /
                this.MAX_REPORT_BRIGHTNESS
            )
        }

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's light level as a number between 0-100
         */
        //% group="Solar"
        //% block="$this light level (\\%)"
        //% blockId=fwd_solar_get_light_level
        fwdLightLevel(): number {
            return super.lightLevel()
        }

        /**
         * Runs code when the light level goes above or below a set threshold
         * @param threshold what light level is the cut off before the code is run
         * @param direction run when the level is above or below your set threshold
         */
        //% group="Solar"
        //% block="$this light level is $direction $threshold (\\%)"
        //% blockId=fwd_solar_is_light_level_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        fwdIsLightLevelPastThreshold(
            threshold: number,
            direction: ThresholdDirection
        ): boolean {
            const difference = super.lightLevel() - threshold > 0
            const isPastThreshold =
                (direction === ThresholdDirection.Over && difference) ||
                (direction === ThresholdDirection.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const solar1 = new FwdSolarClient("solar1")
    //% fixedInstance whenUsed
    export const solar2 = new FwdSolarClient("solar2")
    //% fixedInstance whenUsed
    export const solar3 = new FwdSolarClient("solar3")
    //% fixedInstance whenUsed
    export const solar4 = new FwdSolarClient("solar4")
}
