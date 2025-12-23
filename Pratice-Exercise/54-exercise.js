function primeraNoRepetida(nombre) {
    const nombreMinusculas = nombre.toLowerCase();
    const contador = {};
    for (let i = 0; i < nombreMinusculas.length; i++) {
        const letra = nombreMinusculas[i]; 
        if (!contador[letra]) {
            contador[letra] = 0;
        }
        contador[letra]++;
    }
    for (let i = 0; i < nombre.length; i++) {
        const letra = nombre[i];
        if (contador[letra.toLowerCase()] === 1) {
            return letra;
        }
    }
    return "";
}  

console.log(primeraNoRepetida("AAaaaaLfama")) 