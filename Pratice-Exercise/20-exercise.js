/*
 Write a function that receives an array of integers and returns the largest difference between two elements, where the larger number must appear after the smaller number.
This simulates buying and selling a stock.
Example:
Input → [7, 1, 5, 3, 6, 4]
Possible differences:
1 → 6 = 5
1 → 5 = 4
3 → 6 = 3
Output → 5
If no profit is possible, return 0.
Hint: Comparar elementos manteniendo orden , Logica matematica + tracking de valores mínimos
*/


let numeros = [7, 1, 5, 3, 6, 4];

function ventaCompra(numeros) {
    let diferencia = 0;
    let minimo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        } else if (numeros[i] - minimo > diferencia) {
            diferencia = numeros[i] - minimo;
        }
    }
    return diferencia;
}
console.log(ventaCompra(numeros));