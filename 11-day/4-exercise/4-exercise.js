function truncarTexto(texto){

    if(texto.length > 30){
        return texto.substring(0, 30) + "...";
    }

    return texto;
}


function procesar(){

    let texto = document.getElementById("texto").value;

    if (!texto || texto.trim() === ""){
        document.getElementById("resultado").textContent = "Ingresa un texto: ";
        return;
    }

    let resultado = truncarTexto(texto);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;

}