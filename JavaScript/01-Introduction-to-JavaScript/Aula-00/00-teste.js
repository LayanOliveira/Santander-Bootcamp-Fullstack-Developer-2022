// let array = [1, 2, 4, 5, 7, 8]

// function returnEvenValues(array) {
//     let evenNums = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             evenNums.push(array[i])
//         } else {
//             console.log(`${array[i]} não é par!`)
//         }
//     }
//     console.log(`Os números pares são: "${evenNums}`)
// }

// returnEvenValues(array)

let array = [1, 2, 4, 5, 7, 8]

function returnEvenValues(array) {
    let evenNums = []
    let unevenNums = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i])
        } else { 
            unevenNums.push(array[i])
        }
    }
    console.log(`Os números pares são: "${evenNums}`)
    console.log(`${unevenNums} São números ímpares!`)
}

returnEvenValues(array)

