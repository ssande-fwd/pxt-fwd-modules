namespace motors {
    //% fixedInstances
    export class FwdServoClient extends modules.ServoClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Is the servo enabled or disabled? Enabled = true, disabled = false
         */
        //% group="Servo"
        //% block="$this state"
        //% blockId=fwd_servo_is_enabled
        isEnabled(): boolean {
            return super.enabled()
        }

        /**
         * Set the servo to enabled or disabled
         * @param state enabled = true, disabled = false
         */
        //% group="Servo"
        //% block="set $this $state"
        //% blockId=fwd_servo_set_enabled
        //% state.shadow="toggleOnOff"
        setEnabled(state: boolean): void {
            return super.setEnabled(state)
        }

        // block created in fwd-servo-positional
        getAngle(): number {
            return super.angle()
        }

        // block created in fwd-servo-positional
        setAngle(angle: number): void {
            super.setAngle(angle)
        }

        // block created in fwd-servo-positional
        setAngleAndWait(angle: number): void {
            let maxPauseDuration =
                (super.responseSpeed() / 60) * 270 + 20 || 380
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

        // block created in fwd-servo-continuous
        getSpeed(): number {
            return Math.map(
                this.angle(),
                this.minAngle(),
                this.maxAngle(),
                -100,
                100
            )
        }

        // block created in fwd-servo-continuous
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
