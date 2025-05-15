namespace lights {

  //% group="LED Ring"
  //% blockId=fwd_led_names
  export const enum PixelNames {
		//% block="PXL1"
    PXL1 = 0,
		//% block="PXL2"
    PXL2 = 1,
		//% block="PXL3"
    PXL3 = 2,
		//% block="PXL4"
    PXL4 = 3,
		//% block="PXL5"
    PXL5 = 4,
		//% block="PXL6"
    PXL6 = 5,
		//% block="PXL7"
    PXL7 = 6,
		//% block="PXL8"
    PXL8 = 7,
  }


  export class FwdLEDClient extends modules.LedClient {
    
    private static instanceCount = 0;

    MAX_REPORT_BRIGHTNESS = 10
    MAX_SERVICE_BRIGHTNESS = 100
    toBlocksBrightness ( serviceBrightness: number ): number {
      return this.MAX_REPORT_BRIGHTNESS * serviceBrightness / this.MAX_SERVICE_BRIGHTNESS
    } 
    toServiceBrightness ( reportBrightness: number ): number {
      return this.MAX_SERVICE_BRIGHTNESS * reportBrightness / this.MAX_REPORT_BRIGHTNESS
    } 

    constructor(role: string) {
      super(role)
      FwdLEDClient.instanceCount++;
    }

    static getCreatedCount(): number {
      return FwdLEDClient.instanceCount;
    }

    /**
     * Set the brightness of the LED ring
     * @param brightness Level between 0 (off) and 10 (full power)
     */
    //% block="set %ledRing brightness to $value"
    //% blockId=fwd_led_set_brightness
    //% group="LED Ring"
    //% value.min=0 value.max=10 value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(this.toServiceBrightness(value))
    }

    /**
     * Returns how many lights make up an LED ring
     */
    //% block="%ledRing number of pixels"
    //% blockId=fwd_led_num_pixels
    //% group="LED Ring"
    fwdNumPixels(): number {
      return this.numPixels();
    }

    /**
     * Returns the brightness level of the ring, 0-10
     */
    //% block="%ledRing brightness"
    //% blockId=fwd_led_get_brightness
    //% group="LED Ring"
    fwdBrightness(): number {
      return this.toBlocksBrightness(this.brightness())
    }

    /**
     * Set a specific LED to a color
     * @param index the LED number
     * @param rgb color value using either the blocks color picker or hex
     */
    //% block="set %ledRing $index to $rgb=colorNumberPicker"
    //% blockId=fwd_led_set_single_pixel_colour
    //% group="LED Ring"
    fwdSetPixelColour(index: PixelNames | number, rgb: number): void { this.setPixelColor(index, rgb) }

    /**
     * Set all LEDs to a color
     * @param rgb color value using either the blocks color picker or hex 
     */
    //% block="set all %ledRing LEDs to $rgb=colorNumberPicker"
    //% blockId=fwd_led_set_all_pixels_colour
    //% group="LED Ring"
    fwdSetAllPixelsColour(rgb: number): void { this.setAll(rgb) }

    /**
     * Rotate the light pattern left or right, wrapping the last pixel back to the first
     * @param offset The number of positions to rotate. Positive are clockwise, negative are counter-clockwise
     */
    //% block="rotate %ledRing pattern by $offset"
    //% blockId=fwd_led_rotate_pattern
    //% group="LED Ring"
    //% offset.defl=1
    fwdRotate(offset:number): void { this.rotate(offset) }

    /**
     * Shift the light pattern left or right. If the light pattern is shifted past the first or last light, that part of the pattern is removed.
     * @param offset The number of positions to shift. Positive are clockwise, negative are counter-clockwise
     */
    //% block="shift %ledRing pattern by $offset"
    //% blockId=fwd_led_shift_pattern
    //% group="LED Ring"
    //% offset.defl=1
    fwdShift(offset:number): void { this.shift(offset) }


    
  }

  /**
   * Create an LED Ring client and automtically set it to a variable.
   */
  //% group="LED Ring"
  //% block="Create LED Ring"
  //% blockSetVariable=ledRing
  //% weight=101
  export function createLEDRing(): FwdLEDClient {
      
    let role = "";
    if (lights.FwdLEDClient.getCreatedCount() === 0) {
        role = 'ledRing'
    } else {
        role = 'ledRing' + (lights.FwdLEDClient.getCreatedCount() + 1)
    }
    
    return new FwdLEDClient(role)
  }
}
