let numeros = [2, 3, [2], [5]];

function arregloMultiplicacion(numeros){
    let numeros2 = [];
    let multiplicador = 1; 
    for(let i = 0; i < numeros.length; i++){
        if(Array.isArray(numeros[i])){
            for(let j = 0; j < numeros[i].length; j++){
                multiplicador *= numeros[i][j];
            }
        }else{
            numeros2.push(numeros[i]);
        }
    }

    let resultado = numeros2.map(numero => numero * multiplicador);
    return resultado;
}

console.log(arregloMultiplicacion(numeros));