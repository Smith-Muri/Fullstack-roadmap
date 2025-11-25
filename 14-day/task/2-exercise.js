/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.  
 */


let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

if (num1 == 50 || num2 == 50 || num1 + num2 == 50){
    console.log(true);
}else{
    console.log(false);

}

console.log(num1);
console.log(num2);