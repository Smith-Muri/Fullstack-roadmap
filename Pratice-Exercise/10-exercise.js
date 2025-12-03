/* 
Create a function that receives an array of strings and returns a new array containing only the words with more than 4 characters.
Example:
Input: ["cat", "house", "sun", "table"]
Output: ["house", "table"]
*/

let arrayCadena = ["oso","casa","españoletes","que mierda","ya esta"];

function cadenaMasCuatro(arrayCadena){

    let arrayFinal = [];
    for(let i = 0; i < arrayCadena.length; i++){ 
        if(arrayCadena[i].length > 4){
            arrayFinal.push(arrayCadena[i]);
        }
    }
    return arrayFinal;


} 

console.log(cadenaMasCuatro(arrayCadena));