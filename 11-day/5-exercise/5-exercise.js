function hacerMayus(texto){
    return texto
    .toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");

}


function procesar(){

    let texto = document.getElementById("texto").value;

    if (!texto || texto.trim() === ""){
        document.getElementById("resultado").textContent = "Ingresa un texto: ";
        return;
    }

    let resultado = hacerMayus(texto);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;


}