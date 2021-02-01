## Intro

## The Hardware

The hardware involved in this obviously includes the LEDs and an LCD, as well as a few other pieces that make it possible to control everything from software. First up is the

### Raspberry Pi Zero

[Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/) | [Adafruit motor HAT](https://www.adafruit.com/product/2348)

The RPi serves as the brains of the operation. It, along with the Motor HAT expansion board, controls the LEDs and the LCD. It also connects to the computer's power supply to determine when the PC turns on and off (which is used in the software to shift between "day" and "night" mode).

![Raspberry Pi & Motor HAT]()

The RPi connects to the PC's motherboard via USB for power, and uses WiFi for network access. But since my PC case is basically a Faraday cage, sometimes the WiFi isn't strong enough and I have to fall back to using the USB as a network interface as well. Generally though, the WiFi is good enough.

![USB connection]()

If you're curious, check out the README for [a detailed layout](https://github.com/LucasPickering/soze#pin-layout) of all the pins being used on the RPi.

### LEDs

[RGB LED strip](https://www.adafruit.com/product/346)

A simple RGB LED strip. Each component (red/green/blue) is controlled by PWM from a motor controller. This strip can display pretty much any color, but the catch is that the LEDs all show the same color at once. But still, RGB makes your computer faster (as proven by Science™), so this piece is critical. Similarly, I'm currently investigating the effects of flame decals on CPU performance. Early results are promising.

![LED strip]()

This LED strip has gone through a few iterations, including pure analog control (which involved a homemade heatsink to prevent the whole thing from catching fire) and being driven by an Arduino Uno. This current iteration, with the Raspberry Pi and the motor controller, is definitely the cleanest and most configurable of all though. Having a full blown OS in control means the software can be a lot more complex and can provide a web UI (see [UI](#ui)).

### LCD

[RGB backlight LCD](https://www.adafruit.com/product/498) | [LCD backpack](https://www.adafruit.com/product/781)

This is the more complicated half of the mods. I mounted a 20x4 character LCD onto the front of my PC (in the space intended for a 5.25" CD drive). The LCD supports loading custom characters, which means I was able to define characters that form pieces of _bigger_ characters, which means... big numbers! Wow, computers!

![LCD front]()

I initially drove this with an Arduino Uno wired directly to the LCD, but then I switched over to the Raspberry Pi and discovered Adafruit's LCD backpack, which cuts a 16-pin wiring operation down to a 3-pin UART connection. It also greatly simplifies the software logic to a basic serial protocol, which makes controlling screen content/color/etc. much easier.

![LCD wiring]()

## The Software

If the RPi is the brain, then the software is the... braincode? I don't know, this metaphor is breaking down. Software do what software do, it tells the RPi how to function. Each of these four components is a separate body of code, and they all communicate with each other over the network.

![Software diagram](/soze/diagram.png)

### UI

Everyone loves web development, right?

![Web UI](/soze/ui.png)

### API

### Reducer

So if the RPi is the brain and the software is the braincode, then the reducer is the brain's Supreme Metatarsal Cortex (or something like that). Basically, this is the chunk of the code that does

### Display
