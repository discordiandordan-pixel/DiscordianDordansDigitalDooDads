let Number2 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Number2 = randint(1, 20)
    if (Number2 == 1) {
        basic.showNumber(1)
    } else if (Number2 == 2) {
        basic.showNumber(2)
    } else if (Number2 == 3) {
        basic.showNumber(3)
    } else if (Number2 == 4) {
        basic.showNumber(4)
    } else if (Number2 == 5) {
        basic.showNumber(5)
    } else if (Number2 == 6) {
        basic.showNumber(6)
    } else if (Number2 == 7) {
        basic.showNumber(7)
    } else if (Number2 == 8) {
        basic.showNumber(8)
    } else if (Number2 == 9) {
        basic.showNumber(9)
    } else if (Number2 == 10) {
        basic.showNumber(10)
    } else if (Number2 == 11) {
        basic.showNumber(11)
    } else if (Number2 == 12) {
        basic.showNumber(12)
    } else if (Number2 == 13) {
        basic.showNumber(13)
    } else if (Number2 == 14) {
        basic.showNumber(14)
    } else if (Number2 == 15) {
        basic.showNumber(15)
    } else if (Number2 == 16) {
        basic.showNumber(16)
    } else if (Number2 == 17) {
        basic.showNumber(17)
    } else if (Number2 == 18) {
        basic.showNumber(18)
    } else if (Number2 == 19) {
        basic.showNumber(19)
    } else {
        basic.showNumber(20)
    }
})
