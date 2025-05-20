namespace sensors {

  //% fixedInstances
  export class FwdFloatClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     */
    //% group="Float"
    //% block="on $this $state"
    //% blockId=fwd_float_on_changed
    fwdOnFloatChange(state: string, handler: () => void) { 
      if (state === "raised") {
        super.onEvent(jacdac.ButtonEvent.Down, handler) 
      } else if (state === "lowered") {
        super.onEvent(jacdac.ButtonEvent.Up, handler) 
      }
    }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Float"
    //% block="$this raised"
    //% blockId=fwd_float_is_raised
    fwdIsFloatRaised(): boolean { return super.pressed() }
  }

  //% fixedInstance whenUsed
  export const float1 = new FwdFloatClient("float1")
  //% fixedInstance whenUsed
  export const float2 = new FwdFloatClient("float2")
  //% fixedInstance whenUsed
  export const float3 = new FwdFloatClient("float3")
  //% fixedInstance whenUsed
  export const float4 = new FwdFloatClient("float4")
}
