const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

function gitfs() {

    let arrayFinal = [];


    for (let i = 0; i < production1.length; i++) {
        for (let j = 0; j < production1[i].quantity; j++) {
            arrayFinal.push(production1[i].toy);
        }
    }

    return arrayFinal;

}

console.log(gitfs())

const production2 = [
    { toy: 'train', quantity: 0 },
    { toy: 'bear', quantity: -2 },
    { toy: 'puzzle', quantity: 1 }
]


function array() {

    let arrayFinal = [];

    for (let i = 0; i < production2.length; i++) {
        for (let j = 0; j < production2[i].quantity; j++) {
            if (production2[i].quantity > 0) {
                arrayFinal.push(production2[i].toy)
            }
        }
    }

    return arrayFinal;
}

console.log(array())





function draw(size, chart) {

    for (let i = 0; i < size; i++) {
        let fila = '';
        for (let j = 0; j < size; j++) {
            fila += chart;
        }
        if (size < 2) {
            console.log("Pobre becario")
        } else {
            console.log(fila)
        }
    }


}

draw(1, '+');