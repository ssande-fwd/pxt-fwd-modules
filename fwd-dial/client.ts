namespace buttons {
    export const enum DialDirection {
        //% block="↻"
        CW,
        //% block="↺"
        CCW,
    }

    /**
     * Wrapper for FWD Edu rotary encoder, aka "Dial"
     **/
    //% fixedInstances
    export class FwdDialClient extends modules.RotaryEncoderClient {
        private _cwAction: () => void
        private _ccwAction: () => void

        constructor(role: string) {
            super(role)

            this._cwAction = () => {}
            this._ccwAction = () => {}

            // this sets up the functions to run when the dial is turned clockwise or counterclockwise
            // initially the functions are blank, they get assigned by the makecode program through fwdOnDialTurned()
            super.onReadingChangedBy(1, (delta: number) => {
                if (delta < 0) {
                    this._cwAction()
                } else {
                    this._ccwAction()
                }
            })
        }

        /**
         * The absolute position of the dial since it was last connected.
         * Positive numbers are clockwise, negative are counter-clockwise. Zero is the starting position.
         * This number reflects the sum of all movements, so three steps clockwise followed by five counter-clockwise will read -1 (includes zero as a position)
         */
        //% group="Dial"
        //% block="$this absolute position"
        //% blockId=fwd_dial_get_position
        fwdPosition(): number {
            return super.position()
        }

        /**
         * Run code when the dial is turned in a specific direction
         * @param direction choose between clockwise and counter-clockwise
         */
        //% draggableParameters="reporter"
        //% group="Dial"
        //% block="on $this turned $direction"
        //% blockId=fwd_dial_on_dial_turned
        //% weight=98
        fwdOnDialTurned(direction: DialDirection, handler: () => void): void {
            if (direction === DialDirection.CW) {
                this._cwAction = handler
            } else {
                this._ccwAction = handler
            }
        }
    }

    //% fixedInstance whenUsed
    export const dial1 = new FwdDialClient("dial1")
    //% fixedInstance whenUsed
    export const dial2 = new FwdDialClient("dial2")
    //% fixedInstance whenUsed
    export const dial3 = new FwdDialClient("dial3")
    //% fixedInstance whenUsed
    export const dial4 = new FwdDialClient("dial4")

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
        fwdOnPress(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the ms duration of the last button hold in ms
         */
        //% group="Dial"
        //% block="$this hold duration (ms)"
        //% blockId=fwd_dial_hold_duration
        fwdHoldDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         */
        //% group="Dial"
        //% block="$this pressed"
        //% blockId=fwd_dial_is_pressed
        fwdIsPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const dialButton1 = new FwdDialButtonClient("dialButton1")
    //% fixedInstance whenUsed
    export const dialButton2 = new FwdDialButtonClient("dialButton2")
    //% fixedInstance whenUsed
    export const dialButton3 = new FwdDialButtonClient("dialButton3")
    //% fixedInstance whenUsed
    export const dialButton4 = new FwdDialButtonClient("dialButton4")
}
