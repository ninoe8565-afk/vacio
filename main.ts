bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cadenarecibida = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (cadenarecibida == "arriba") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (cadenarecibida == "abajo") {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (cadenarecibida == "derecha") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (cadenarecibida == "izquierda") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
let cadenarecibida = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
