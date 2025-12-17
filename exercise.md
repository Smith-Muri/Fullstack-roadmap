You receive an array of numbers representing the temperatures of one week (7 days).
Write a function that:
Calculates the average temperature.
Finds the highest temperature.
Finds the lowest temperature.
Returns an object like:
{
  average: X,
  max: Y,
  min: Z
}
*If the array is empty, return:*
"No data available".
Input: [20, 22, 18, 25, 19, 21, 23]
Output:
{
  average: 21.14,
  max: 25,
  min: 18
}
Hint: use accumulators for sum, and comparisons for max/min in the same loop.