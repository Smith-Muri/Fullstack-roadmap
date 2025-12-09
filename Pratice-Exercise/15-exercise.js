
let numeros = [2, 4, 5, 7, 9, 10];


function promedioNumeros(numero) {
    

    for (let i = 0; i < numero.lenght; i++) {
        let promedio = 0;
        if (numero[i] % 2 === 0) {
            promedio = numero[i] / numero.length;
        }else{
            console.log("No hay numeros pares");
        }

    }

    return promedio;
    
}

console.log(promedioNumeros(numeros));

