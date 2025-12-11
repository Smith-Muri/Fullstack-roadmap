/*

 Write a function that receives an array of numbers and returns how many of those numbers are above the average of the array.
Example:
Input → [10, 20, 30, 40]
Average → (10 + 20 + 30 + 40) / 4 = 25
Numbers above average → 30, 40 → Output: 2
Hint: Calcular promedio, Recorrer arreglo, Contar con condicionales
*/


let numero = [10,20,30,40];


function NumberAbutRaiz(arra){

   
    let promedio = 0;
    let contador = 0;

    for(let i = 0; i <arra.length; i++){
        promedio += arra[i];
    }

    let resultado = promedio / arra.length

    for(let i = 0; i < arra.length; i++){

        if(arra[i] > resultado){
            contador++
        }
        
    } 

    return contador;
}

console.log(NumberAbutRaiz(numero));