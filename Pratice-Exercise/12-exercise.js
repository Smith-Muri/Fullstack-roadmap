/* 
Write a function that receives an array of numbers.
The function must find the first even number in the array.
Rules:
If an even number exists, print: "First even number: X".
If there are no even numbers, print: "No even numbers found".
*/

let numbers = [1, 3, 1, 4, 6, 7];

function numbersPar(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log("Este es el primer numero par: " + numbers[i]);
            break;
        }
    }
}

numbersPar(numbers);