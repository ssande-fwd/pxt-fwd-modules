namespace motors {
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
}
