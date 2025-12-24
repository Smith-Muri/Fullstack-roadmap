
// Convertir la primera letra de cada palabra en mayúscula

let frase = "feliz navidad";


for (let i = 0; i < frase.length; i++) {
    let fraseMayuscula = frase.charAt(0).toUpperCase() + frase.slice("1");
    if(frase.charAt(i) === " ") {
        fraseMayuscula = fraseMayuscula.slice(0, i + 1) + fraseMayuscula.charAt(i + 1).toUpperCase() + fraseMayuscula.slice(i + 2);
    }
    frase = fraseMayuscula;
}
console.log(frase);

