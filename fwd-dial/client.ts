namespace buttons {
  
  export const enum DialDirection {
    
    //% block="↻"
    CW,
    //% block="↺"
    CCW
  }

  /**
   * Wrapper for FWD Edu rotary encoder, aka "Dial"
   **/
  //% fixedInstances
  export class FwdDialClient extends modules.RotaryEncoderClient {
    
    private _cwAction: (delta: number) => void
    private _ccwAction: (delta: number) => void

    constructor(role: string) {
      
      super(role)

      this._cwAction = (_) => {}
      this._ccwAction = (_) => {}

      this.onReadingChangedBy(1, (delta: number) => {
        if (delta < 0) {
          this._cwAction(delta)
        } else {
          this._ccwAction(delta)
        }
      })
    }
    
    /**
     * The number of steps that make up a full turn of the dial
     */
    //% group="Dial"
    //% block="$this clicks per full turn"
    //% rotaryencoder.defl=dial1
    //% blockId=fwd_dial_get_clicks_per_turn
    fwdClicksPerTurn(): number { return this.clicksPerTurn() }
    
    /**
     * The absolute position of the dial since it was last connected.
     * Positive numbers are clockwise, negative are counter-clockwise. Zero is the starting position.
     * This number reflects the sum of all movements, so three steps clockwise followed by five counter-clockwise will read -1 (includes zero as a position)
     */
    //% group="Dial"
    //% block="$this absolute position"
    //% blockId=fwd_dial_get_position
    fwdPosition(): number { return this.position() }

    /**
     * Run code when the dial is turned in a specific direction
     * @param direction choose between clockwise and counter-clockwise
     * @param difference the number of dial positions turned since the last update
     */
    //% draggableParameters="reporter"
    //% group="Dial"
    //% block="on $this turned by $direction $difference"
    //% blockId=fwd_dial_on_dial_turned
    //% weight=98
    fwdOnDialTurned(direction: DialDirection, handler: (difference: number) => void): void {
      
      if (direction === DialDirection.CW) {
        this._cwAction = handler
      } else {
        this._ccwAction = handler
      }
    }

    
  }

  
  //% fixedInstance whenUsed weight=1 block="dial1"
  export const dial1 = new FwdDialClient("dial1")

  //% fixedInstances
  export class FwdDialButtonClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     * @param event Button pressed (down), held, released (up)
     */
    //% group="Dial"
    //% block="on $this $event"
    //% blockId=fwd_dial_on_press
    fwdOnPress(event: jacdac.ButtonEvent, handler: () => void) { super.onEvent(event, handler) }

    /**
     * Returns the ms duration of the last button hold in ms
     */
    //% group="Dial"
    //% block="$this hold duration (ms)"
    //% blockId=fwd_dial_hold_duration
    fwdHoldDuration(): number { return super.holdDuration() }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Dial"
    //% block="$this pressed"
    //% blockId=fwd_dial_is_pressed
    fwdIsPressed(): boolean { return super.pressed() }


  }

  //% fixedInstance whenUsed
  export const dialButton1 = new FwdDialButtonClient("dialButton1")
}
