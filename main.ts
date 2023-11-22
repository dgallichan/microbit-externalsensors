function writeBothMag () {
    serial.writeLine("" + control.micros() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.X) + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.Y) + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.Z))
}
function writeAccMag () {
    serial.writeLine("" + control.micros() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeMagOnly () {
    serial.writeLine("" + control.micros() + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeAccOnly () {
    serial.writeLine("" + control.micros() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z))
}
function writeLSMMagOnly () {
    serial.writeLine("" + control.micros() + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.X) + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.Y) + delimiter + LIS2MDL.magneticForce(LIS2MDL.Dimension.Z))
}
function writeTimeOnly () {
    serial.writeLine("" + (control.micros()))
}
let delimiter = ""
let loop_time = 0
basic.showLeds(`
    # # # # #
    . # . . #
    . # . . #
    . # . . #
    # # # # #
    `)
delimiter = ","
control.inBackground(function () {
    while (true) {
        writeBothMag()
        while (control.micros() - loop_time < 25000) {
        	
        }
        loop_time = control.micros()
    }
})
