/*
Given an array of numbers, create a function that returns how many numbers are even.
Example:
Input: [2, 5, 8, 11, 14]
Output: 3 
*/

const number = [2,2,2,2,4,5,3,3,7,8,7];

function numberPar(number){
    let contador = 0;
    
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 === 0){
            contador++;
        }
    }
    return contador;
}

console.log(numberPar(number));




