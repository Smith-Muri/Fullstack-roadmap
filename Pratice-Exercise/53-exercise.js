const gloves = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
]

function Pares() {

    let arrayFinal = [];
    let contador = [];

    for (let i = 0; i < gloves.length; i++) {
        const color = gloves[i].color;
        const hand = gloves[i].hand;

        if (!contador[color]) {
            contador[color] = { L: 0, R: 0 };
        }
        contador[color][hand]++
    }

    const colores = Object.keys(contador);
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];

        if (contador[color].L > 0 && contador[color].R > 0) {
            arrayFinal.push(color)
        }
    }

    return arrayFinal;
}



console.log(Pares())


const gloves2 = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
]


function pares2() {

    let arrayFinal = [];
    let contador = [];

    for (let i = 0; i < gloves2.length; i++) {
        const color = gloves2[i].color;
        const hand = gloves2[i].hand;

        if (!contador[color]) {
            contador[color] = { L: 0, R: 0 };
        }
        contador[color][hand]++
    }

    const colores = Object.keys(contador);
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];
        const pares = Math.min(contador[color].L, contador[color].R);

        for (let j = 0; j < pares; j++) {
            arrayFinal.push(color);
        }
    }
    return arrayFinal;
}



console.log(pares2())


const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

function pares3() {

    let arrayFinal = [];
    let contador = [];

    for (let i = 0; i < gloves4.length; i++) {
        const color = gloves4[i].color;
        const hand = gloves4[i].hand;

        if (!contador[color]) {
            contador[color] = { L: 0, R: 0 };
        }
        contador[color][hand]++
    }

    const colores = Object.keys(contador);
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];

        if (contador[color].L > 0 && contador[color].R > 0) {
            arrayFinal.push(color)
        }
    }

    return arrayFinal;
}

console.log(pares3())