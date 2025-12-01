let contador = 0;
let string = "w3resource";

const intervalo = setInterval(function () {
    const caracter = string.slice(0, 1);
    const cadena = string.slice(1);
    
    string = cadena + caracter;
    console.log(string);
},500)

if(contador === string.length){
    clearInterval(intervalo);
}


