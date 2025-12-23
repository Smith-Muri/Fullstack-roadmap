multiple(3, [1, 2, 3])


function multiple(number, array) {

    let arrayFinal = [];
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i] * number);
    }

    return arrayFinal;
}

console.log(multiple(3, [1, 2, 3]))