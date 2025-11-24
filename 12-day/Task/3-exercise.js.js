/**
 *  write a js function that receives an object and two strings as parameters
 *  the function should add a property named as the second parameter and 
 *  the value of that property should be the third parameter.
 */

let parametros = {
    frase1: "Naruto es uno de los mejores shonnes",
    frase2: "Evagelion es uno de los mejores animes de la historia"}
   


function agregar(parametros, valor){
   parametros.segundoParametro = valor; 
}

agregar(parametros, "Boku no pico es el trauma de todos al ver anime");
console.log(parametros);


