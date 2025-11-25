/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.  
 */

let str = prompt("Ingresa una frase:")

let posicion = parseInt(prompt("Ingresa la posicion que quieres eliminar comenzando desde 0: "))

let cadenaModificada = str.slice(0, posicion) + str.slice(posicion + 1);

console.log(cadenaModificada);

