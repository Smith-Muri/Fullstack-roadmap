/**
 Funcion que reciba edades, que devuelva la edad promedio solo de las personas mayores de edad
 */


let num = [5, 10, 20, 30, 40, 60]

function mayorEdad(num) {
    let count = 0;
    let suma = 0

    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 18) {
            suma =  suma + num[i];
            count++;
        }
    }

    return suma / count;
}

console.log(mayorEdad(num));