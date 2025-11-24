function contadorvocales(texto){

    let vocales = "aeiouAEIOU";
    let contador = 0;   
    let i = 0;

    for (i = 0; i < texto.length; i++){
        let letra = texto.charAt(i);
        if (vocales.includes(letra)){
            contador++;
        }
    }

    return contador;
}

function procesar() {

        let ingresarTexto = document.getElementById("entrada").value;
        let totalVocales = contadorvocales(ingresarTexto);
        document.getElementById("resultado").textContent = "El texto tiene " + totalVocales + " vocales";
        }