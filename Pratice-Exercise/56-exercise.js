
/*

El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.
*/



let warehouse = [
 '...',
  '.*.',
  '...'
];

function findUnsafeGifts(warehouse) {

  let contador = 0;
  let filas = warehouse.length;
  let columnas = warehouse[0].length; 
    let direcciones = [
    [-1, 0], 
    [1, 0],  
    [0, -1], 
    [0, 1]   
  ];
    for (let r = 0; r < filas; r++) {
    for (let c = 0; c < columnas; c++) {
        if (warehouse[r][c] === '*') {
        let guarda = false;
            for (let [dr, dc] of direcciones) {
            let newFila = r + dr;
            let newColu = c + dc;
                if (newFila >= 0 && newFila < filas && newColu >= 0 && newColu < columnas) {
                if (warehouse[newFila][newColu] === '#') {
                    guarda = true;
                    break;
                }
            }
        }
        if (!guarda) {
            contador++;
        }
        }
    }
  }
    return contador;
}

console.log(findUnsafeGifts(warehouse)); 