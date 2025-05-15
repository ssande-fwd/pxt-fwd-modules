namespace buttons {

   //% fixedInstances
  export class FwdLTSBtnClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), held, released (up)
     */
    //% group="Learn To Solder"
    //% block="on $this $event"
    //% blockId=fwd_lts_on_press
    fwdOnPress(event: jacdac.ButtonEvent, handler: () => void) { super.onEvent(event, handler) }

    /**
     * Returns the ms duration of the last button hold in ms
     */
    //% group="Learn To Solder"
    //% block="$this hold duration (ms)"
    //% blockId=fwd_lts_hold_duration
    fwdHoldDuration(): number { return super.holdDuration() }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Learn To Solder"
    //% block="$this pressed"
    //% blockId=fwd_lts_is_pressed
    fwdIsPressed(): boolean { return super.pressed() }

  }

  //% fixedInstance whenUsed
  export const BTN1 = new FwdLTSBtnClient("BTN1?srvo=0")
  //% fixedInstance whenUsed
  export const BTN2 = new FwdLTSBtnClient("BTN2?srvo=1")
  //% fixedInstance whenUsed
  export const BTN3 = new FwdLTSBtnClient("BTN3?srvo=2")

  //% fixedInstance whenUsed
  export const BTN4 = new FwdLTSBtnClient("BTN4?srvo=3")
  //% fixedInstance whenUsed
  export const BTN5 = new FwdLTSBtnClient("BTN5?srvo=4")
  //% fixedInstance whenUsed
  export const BTN6 = new FwdLTSBtnClient("BTN6?srvo=5")

}

namespace lights {

 //% fixedInstances
  export class FwdLTSLightClient extends modules.LightbulbClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
     * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
     */
    //% group="Learn To Solder"
    //% blockId=jacdac_ltslight_brightness___set
    //% block="set %lights brightness to %value (\\%)"
    //% weight=100
    //% value.min=0
    //% value.max=100
    //% value.defl=100
    setBrightness(value: number) {
      super.setBrightness(value);
    }
  }
  
  //% fixedInstance
  export const GREEN = new FwdLTSLightClient("GREEN?srvo=0")
  //% fixedInstance
  export const YELLOW = new FwdLTSLightClient("YELLOW?srvo=1")
  //% fixedInstance
  export const RED = new FwdLTSLightClient("RED?srvo=2")
}
