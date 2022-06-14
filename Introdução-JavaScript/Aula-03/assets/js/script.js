var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber >= 1) {
        currentNumberWrapper.style.color = "blue"
    } else if (currentNumber == 0) {
        currentNumberWrapper.style.color = "black"
    }
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber <= -1) {
        currentNumberWrapper.style.color = "red"
    } else if (currentNumber == 0) {
        currentNumberWrapper.style.color = "black"
    }
}

