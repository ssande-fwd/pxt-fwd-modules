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
         * Set the pump to either running or stopped.
         * @param state running = true, stopped = false
         */
        //% group="Pump"
        //% block="set $this $state"
        //% blockId=fwd_pump_set_active
        //% state.shadow="toggleOnOff"
        setActive(state: boolean): void {
            super.setActive(state)
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
         * Reports the servo's total range of motion in degrees
         */
        //% group="Servo (270° Positional)"
        //% block="$this angle range (°)"
        //% blockId=fwd_servo_get_angle_range
        get angleRange(): number {
            return super.maxAngle() - super.minAngle()
        }

        /**
         * Reports what angle the servo is set to
         */
        //% group="Servo (270° Positional)"
        //% block="$this angle (°)"
        //% blockId=fwd_servo_get_angle
        fwdGetAngle(): number {
            return super.angle()
        }

        /**
         * Set what angle the servo should point to, and immediately run the next block
         * @param angle servo angle
         */
        //% group="Servo (270° Positional)"
        //% block="set $this to $angle °"
        //% blockId=fwd_servo_set_angle
        //% angle.shadow="protractorPicker"
        //% angle.min=0 angle.max=270
        setAngle(angle: number): void {
            super.setAngle(angle)
        }

        /**
         * Set what angle the servo should point to, and wait for the movement to finish before running the next block
         * @param angle servo angle
         */
        //% group="Servo (270° Positional)"
        //% block="set $this to $target ° and wait"
        //% blockId=fwd_servo_set_angle_and_wait
        //% target.shadow="protractorPicker"
        //% target.min=-90 target.max=90
        setAngleAndWait(target: number): void {
            let maxPauseDuration =
                (super.responseSpeed() / 60) * this.angleRange + 20 || 380
            let travelDistance = Math.abs(
                this.fwdGetAngle() > target
                    ? this.fwdGetAngle() - target
                    : target - this.fwdGetAngle()
            )
            super.setAngle(target)
            basic.pause((maxPauseDuration * travelDistance) / this.angleRange)
        }

        /**
         * Is the servo enabled or disabled? Enabled = true, disabled = false
         */
        //% group="Servo (Both)"
        //% block="$this state"
        //% blockId=fwd_servo_is_enabled
        isEnabled(): boolean {
            return this.enabled()
        }

        /**
         * Set the servo to enabled or disabled
         * @param state enabled = true, disabled = false
         */
        //% group="Servo (Both)"
        //% block="set $this $state"
        //% blockId=fwd_servo_set_enabled
        //% state.shadow="toggleOnOff"
        setEnabled(state: boolean): void {
            return this.setEnabled(state)
        }

        /**
         * Reports what speed the servo is set to
         */
        //% group="Servo (Continuous)"
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
        //% group="Servo (Continuous)"
        //% block="set $this $speed \\%"
        //% blockId=fwd_servo_continuous_set_speed
        //% speed.shadow="speedPicker"
        //% speed.min=-100 speed.max=100
        setSpeed(speed: number): void {
            this.setAngle(
                Math.map(speed, -100, 100, this.minAngle(), this.maxAngle())
            )
        }
    }

    export const enum PresetServoPosition {
        //% block="🕛 00:00"
        Pos0 = 0,
        //% block="🕐 01:00"
        Pos1 = 30,
        //% block="🕑 02:00"
        Pos2 = 60,
        //% block="🕒 03:00"
        Pos3 = 90,
        //% block="🕓 04:00"
        Pos4 = 120,
        //% block="🕔 05:00"
        Pos5 = 150,
        //% block="🕕 06:00"
        Pos6 = 180,
        //% block="🕖 07:00"
        Pos7 = 210,
        //% block="🕗 08:00"
        Pos8 = 240,
        //% block="🕘 09:00"
        Pos9 = 270,
    }

    /**
     * Preset servo positions based on a clock's hour hand
     */
    //% group="Servo (270° Positional)"
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
