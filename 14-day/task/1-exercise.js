/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.  
 */


let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let resultado = num1 + num2;



 if (num1 == num2){
    console.log("Este es el triple de la suma: " + (resultado) * 3);
 }else{
    console.log(resultado);
 }

