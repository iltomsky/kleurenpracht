let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
