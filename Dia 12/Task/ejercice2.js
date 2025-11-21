/**
 *  write a js function that receives an object and a string as parameters
 *  the function should remove the property that has the name of the string parameter
 *  from the object and return it.
 */

let cadena = {
    age: 18,
    frase: "Las personas que estudian programación se frustran mucho"
};

function eliminarString(frase){
    delete cadena.frase;
        return cadena; 
} 

console.log(eliminarString(cadena));