function somaNumeros(arr) {
    return arr.reduce(function (previous, current) {
        console.log({ previous })
        console.log({ current })
        return previous + current
    }, 0)
}

const arr = [1, 2, 2, 10]

console.log(somaNumeros(arr))