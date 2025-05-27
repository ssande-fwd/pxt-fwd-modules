/**
 * Reports what angle the servo is set to
 */
//% group="Servo (270° positional)"
//% block="$this angle (°)"
//% blockId=fwd_servo_get_angle

/**
 * Set what angle the servo should point to and immediately run the next block
 * @param angle servo angle
 */
//% group="Servo (270° positional)"
//% block="set $this to $angle °"
//% blockId=fwd_servo_set_angle
//% angle.min=0 angle.max=270

/**
 * Set what angle the servo should point to, and wait for the movement to finish before running the next block
 * @param angle servo angle
 */
//% group="Servo (270° positional)"
//% block="set $this to $angle ° and wait"
//% blockId=fwd_servo_set_angle_and_wait
//% angle.min=0 angle.max=270

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
