namespace lights {
    
    /**
     * Controls LED lights
     **/
    //% fixedInstances blockGap=8
    export class LightsClient extends modules.LightbulbClient {

        constructor(role: string) {
            super(role)
        }


        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Lights"
        //% blockId=jacdac_lights_brightness___set
        //% block="set %lights brightness to %value (\\%)"
        //% weight=100
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            super.setBrightness(value)
        }
    }

    //% fixedInstance whenUsed weight=1 block="lights1"
    export const lights1 = new LightsClient("lights1")
}
