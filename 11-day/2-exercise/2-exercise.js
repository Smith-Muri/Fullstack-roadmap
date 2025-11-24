function palidromo(texto){
    
    let analizarTexto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let voltearTexto = analizarTexto.split('').reverse().join('');
    return voltearTexto === analizarTexto;

}


function verificar(){

    let palabra = document.getElementById("texto").value;


    if (!palabra || palabra.trim() === ""){
        document.getElementById("resultado").textContent = "Ingresa una palabra: ";
        return;
    }


    if (palidromo(palabra)){
        document.getElementById("resultado").textContent = `"${palabra}" SÍ es una palabra palíndroma.`;
    } else {
        document.getElementById("resultado").textContent = `"${palabra}" NO es una palabra palíndroma.`;
    }
   
}