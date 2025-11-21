function eliminarletra(texto, letra){
    
    let regex = new RegExp(letra, "gi");
    return texto.replace(regex, "");

}


function procesar(){
    
    let texto = document.getElementById("texto").value;
    let letra = document.getElementById("letra").value;


    if (!texto || texto.trim() === ""){
        document.getElementById("resultado").textContent = "Ingresa un texto: ";
        return;
    }

    let resultado = eliminarletra(texto, letra);

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;

}