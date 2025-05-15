namespace buttons {
  
  export class FwdLTSBtnClient extends modules.ButtonClient {

    private static instanceCount = 0;

    constructor(role: string) {
      super(role)
      FwdLTSBtnClient.instanceCount++;
    }

    static getCreatedCount(): number {
      return FwdLTSBtnClient.instanceCount;
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), held, released (up)
     */
    //% group="Learn To Solder"
    //% block="on %ltsBtn $event"
    //% blockId=fwd_lts_on_press
    fwdOnPress(event: jacdac.ButtonEvent, handler: () => void) { super.onEvent(event, handler) }

    /**
     * Returns the ms duration of the last button hold in ms
     */
    //% group="Learn To Solder"
    //% block="%ltsBtn hold duration (ms)"
    //% blockId=fwd_lts_hold_duration
    fwdHoldDuration(): number { return super.holdDuration() }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Learn To Solder"
    //% block="%ltsBtn pressed"
    //% blockId=fwd_lts_is_pressed
    fwdIsPressed(): boolean { return super.pressed() }

  }

  /**
   * Create a Learn To Solder button client and automtically set it to a variable.
   */
  //% group="Learn To Solder"
  //% block="Create LTS Button"
  //% blockSetVariable=ltsBtn
  //% weight=101
  export function createLTSBtn(): FwdLTSBtnClient {
      
    let role = "";
    if (buttons.FwdLTSBtnClient.getCreatedCount() === 0) {
        role = 'ltsBtn'
    } else {
        role = 'ltsBtn' + (buttons.FwdLTSBtnClient.getCreatedCount() + 1)
    }
    
    return new FwdLTSBtnClient(role)
  }

}

namespace lights {

  export class FwdLTSLightClient extends modules.LightbulbClient {

    private static instanceCount = 0;

    constructor(role: string) {
      super(role)
    }

    static getCreatedCount(): number {
      return FwdLTSLightClient.instanceCount;
    }

    /**
     * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
     * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
     */
    //% group="Learn To Solder"
    //% blockId=jacdac_ltslight_brightness___set
    //% block="set %ltsLight brightness to %value (\\%)"
    //% weight=100
    //% value.min=0
    //% value.max=100
    //% value.defl=100
    setBrightness(value: number) {
      super.setBrightness(value);
    }
  }

  /**
   * Create a Learn To Solder light client and automtically set it to a variable.
   */
  //% group="Learn To Solder"
  //% block="Create LTS Light"
  //% blockSetVariable=ltsLight
  //% weight=101
  export function createLTSLight(): FwdLTSLightClient {
      
    let role = "";
    if (lights.FwdLTSLightClient.getCreatedCount() === 0) {
        role = 'ltsLight'
    } else {
        role = 'ltsLight' + (lights.FwdLTSLightClient.getCreatedCount() + 1)
    }
    
    return new FwdLTSLightClient(role)
  }
}
