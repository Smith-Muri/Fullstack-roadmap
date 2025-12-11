/*
Write a function that receives an array of integers and returns a new array with all the numbers whose square is greater than 50.
Rules:
Ignore negative numbers.
Return an empty array if none meet the condition.
Example:
Input: [3, 8, -2, 10, 5]
Squares → 9, 64, -, 100, 25
Output → [8, 10]
Hint: condicionales + filtros
*/


let numero = [3,8,-2,10,5];

function array(calcule){

    let arrayVacio = [];
    for(let i = 0; i < calcule.length; i++){
        let raiz =  calcule[i];
        if(raiz >= 0 && (raiz * raiz) > 50){
            arrayVacio.push(raiz);
        }
    }

    return arrayVacio;

}

console.log(array(numero));