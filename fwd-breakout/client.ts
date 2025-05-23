namespace motors {
    //% fixedInstances
    export class FwdPumpClient extends modules.RelayClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns true if the pump is running and false if it's stopped.
         */
        //% group="Pump"
        //% block="$this on"
        //% blockId=fwd_pump_is_on
        isOn(): boolean {
            return super.active()
        }

        /**
         * Turn the pump on or off.
         * @param on on = true, off = false
         */
        //% group="Pump"
        //% block="set $this $on"
        //% blockId=fwd_pump_set_on
        //% on.shadow="toggleOnOff"
        setOn(on: boolean): void {
            super.setActive(on)
        }

        /**
         * Turn on the pump for the chosen number of seconds.
         * @param duration how long to run the pump
         */
        //% group="Pump"
        //% block="run $this for $duration s"
        //% duration.defl=1 duration.min=1 duration.max=5
        //% blockId=fwd_pump_timed_run
        timedRun(duration: number): void {
            control.inBackground(() => {
                super.setActive(true)
                basic.pause(duration * 1000)
                super.setActive(false)
            })
        }
    }

    //% fixedInstance
    export const pump = new FwdPumpClient("pump")

    //% fixedInstances
    export class FwdServoClient extends modules.ServoClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Reports what angle the servo is set to
         */
        //% group="Servo (270° positional)"
        //% block="$this angle (°)"
        //% blockId=fwd_servo_get_angle
        getAngle(): number {
            return super.angle()
        }

        /**
         * Set what angle the servo should point to and immediately run the next block
         * @param angle servo angle
         */
        //% group="Servo (270° positional)"
        //% block="set $this to $angle °"
        //% blockId=fwd_servo_set_angle
        //% angle.min=0 angle.max=270
        setAngle(angle: number): void {
            super.setAngle(angle)
        }

        /**
         * Set what angle the servo should point to, and wait for the movement to finish before running the next block
         * @param angle servo angle
         */
        //% group="Servo (270° positional)"
        //% block="set $this to $angle ° and wait"
        //% blockId=fwd_servo_set_angle_and_wait
        //% angle.min=0 angle.max=270
        setAngleAndWait(angle: number): void {
            let maxPauseDuration = (super.responseSpeed() / 60) * 270 + 20 || 380
            let degreesToMove = Math.abs(
                this.getAngle() > angle
                    ? this.getAngle() - angle
                    : angle - this.getAngle()
            )
            super.setAngle(angle)

            // it takes maxPauseDuration seconds to move 270 degrees
            // with degreesToMove as the second denominator, cross-multiply and divide to get the pause needed
            basic.pause((maxPauseDuration * degreesToMove) / 270)
        }

        /**
         * Is the servo enabled or disabled? Enabled = true, disabled = false
         */
        //% group="Servo (both)"
        //% block="$this state"
        //% blockId=fwd_servo_is_enabled
        isEnabled(): boolean {
            return super.enabled()
        }

        /**
         * Set the servo to enabled or disabled
         * @param state enabled = true, disabled = false
         */
        //% group="Servo (both)"
        //% block="set $this $state"
        //% blockId=fwd_servo_set_enabled
        //% state.shadow="toggleOnOff"
        setEnabled(state: boolean): void {
            return super.setEnabled(state)
        }

        /**
         * Reports what speed the servo is set to
         */
        //% group="Servo (continuous)"
        //% block="$this speed (\\%)"
        //% blockId=fwd_servo_get_speed
        getSpeed(): number {
            return Math.map(
                this.angle(),
                this.minAngle(),
                this.maxAngle(),
                -100,
                100
            )
        }

        /**
         * Set what speed the servo should run at
         * @param speed Can be set between 100% foward and -100% reverse
         */
        //% group="Servo (continuous)"
        //% block="set $this $speed \\%"
        //% blockId=fwd_servo_set_speed
        //% speed.min=-100 speed.max=100
        setSpeed(speed: number): void {
            this.setAngle(
                Math.map(speed, -100, 100, this.minAngle(), this.maxAngle())
            )
        }
    }

    export const enum PresetServoPosition {
        //% block="🕛 00:00"
        Pos0 = 270,
        //% block="🕐 01:00"
        Pos1 = 240,
        //% block="🕑 02:00"
        Pos2 = 210,
        //% block="🕒 03:00"
        Pos3 = 180,
        //% block="🕓 04:00"
        Pos4 = 150,
        //% block="🕔 05:00"
        Pos5 = 120,
        //% block="🕕 06:00"
        Pos6 = 90,
        //% block="🕖 07:00"
        Pos7 = 60,
        //% block="🕗 08:00"
        Pos8 = 30,
        //% block="🕘 09:00"
        Pos9 = 0,
    }

    /**
     * Preset servo positions based on a clock's hour hand
     */
    //% group="Servo (270° positional)"
    //% block="position %position"
    //% blockId=fwd_servo_position_enum
    //% position.defl=0
    export function positionPresets(position: PresetServoPosition): number {
        return position as number
    }

    //% fixedInstance
    export const leftServo = new FwdServoClient("leftServo?srvo=0")
    //% fixedInstance
    export const middleServo = new FwdServoClient("middleServo?srvo=1")
    //% fixedInstance
    export const rightServo = new FwdServoClient("rightServo?srvo=2")
}
