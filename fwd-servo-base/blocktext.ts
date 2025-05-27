/**
 * Reports what speed the servo is set to
 */
//% group="Servo (continuous)"
//% block="$this speed (\\%)"
//% blockId=fwd_servo_get_speed

/**
 * Set what speed the servo should run at
 * @param speed Can be set between 100% foward and -100% reverse
 */
//% group="Servo (continuous)"
//% block="set $this $speed \\%"
//% blockId=fwd_servo_set_speed
//% speed.min=-100 speed.max=100
