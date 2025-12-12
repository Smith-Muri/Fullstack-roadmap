/**
 
Write a function that receives an *array* of integers.
Your function must:
Calculate the sum of all positive numbers.
Calculate the sum of all negative numbers.
Return an object like this:
{
  positiveSum: X,
  negativeSum: Y
}
*If there are no positive or no negative numbers, the corresponding sum should be 0*
Input: [10, -3, 5, -7, 0, 2]
Output:
{
  positiveSum: 17, // 10 + 5 + 2
  negativeSum: -10 // -3 + -7
}

 */


function negativoPositivo(numbers) {
    let positivo = 0;
    let negativo = 0;

    for (let num of numbers) {
        if (num > 0) {
            positivo += num;
        } else if (num < 0) {
            negativo += num;
        }
    }

    return {
        positivo,
        negativo
    };
}


console.log(negativoPositivo([10, -3, 5, -7, 0, 2]));
