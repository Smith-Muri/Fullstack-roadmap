/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.  
 */

let str = prompt("Ingrese una frase:");

if (str.length >= 1){ 
    let cadenaModificada = str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
    console.log(cadenaModificada);

}