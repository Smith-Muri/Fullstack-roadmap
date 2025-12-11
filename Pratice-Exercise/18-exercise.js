/*
Write a function that receives:
An array of numbers
A target number
Return all pairs of numbers from the array that add up to the target.
Rules:
Each pair must contain two different positions.
A number cannot be reused.
Pairs must not be duplicated.
Example:
Input:
Array → [1, 7, 5, 3, 9, 2]
Target → 10
Valid pairs:
1 + 9
7 + 3
5 + 5 (ignored because only one 5 exists)
Output:
[[1, 9], [7, 3]]
Hint: usar bucles anidados, evitar duplicados
*/



let array = [1, 7, 5, 3, 9, 2]
function sumandoPares(array, target) {
    let arrayVacio = [];
    for(let i = 0; i < array.length; i++){
        for(let k = i+1; k < array.length; k++){
            if(array[i] !== array[k] && array[i] + array[k] === target){
                arrayVacio.push([array[i], array[k]]);
            }
        }
    }
      console.log(arrayVacio)
}
sumandoPares(array, 4);