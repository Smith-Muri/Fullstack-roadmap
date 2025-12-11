
/*
Write a function that receives an array of numbers and returns the average of all even numbers in the array
If the array contains no even numbers, return "Not even numbers".
Example:
Input: [2, 5, 8, 11]
Even numbers → 2, 8
Average → (2 + 8) / 2 = 5
Hint: recorrer el arreglo, filtrar pares, sumar y dividir.
*/

let numeros = [2, 1, 4, 7, 9, 1];


function numbers(array){

    let promedio = 0;
    let contador = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            promedio += array[i];
            contador++;
        }
    }


    if(contador === 0){
        console.log("No hay números pares")
    }


    if(contador < 2){
        console.log("Deben haber por lo menos dos números pares")
    }

    return promedio / contador;
}

console.log(numbers(numeros))