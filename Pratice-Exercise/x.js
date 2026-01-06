// let palabra = "";
// function reverse (palabra){

//     let reversed = "";
//     for(let i = palabra.length -1; i>=0; i--){
//         reversed += palabra[i];
//     }

//     return reversed;
// }

// console.log(reverse("hola"));

// let frase = "";
// function pharese(frase){

//     let contador = 0;
//     for(let i = 0; i < frase.length; i++){
//         if(frase[i] === " "){
//             contador++
//         }
//     }

//     return contador;

// }

// console.log(pharese("HOla Mundo Chao"))


// let num = 0;

// function asterisco(num){

//     let simbolo = "*";

//     let repetir = simbolo.repeat(num)
    
//     return repetir
// }

// console.log(asterisco(5))




// function figure(tamaño){

//     console.log("*".repeat(tamaño));
//     for(let i = 0; i < tamaño - 2; i++){
//         const patron = "*" + " ".repeat(tamaño - 2) + "*"
//         console.log(patron)
//     }
//     console.log("*".repeat(tamaño))
// }

// figure(5)


// function fraseAncho(pharese){

//     let palabraLarga = "";
//     const text = pharese.split(" ");
    
//     for(let i = 0; i < text.length; i++){
//         if(text[i].length > palabraLarga.length){
//             palabraLarga = text[i];
//         }
//     }

//     console.log("*".repeat(palabraLarga.length + 4));

//     for(let i = 0; i < text.length; i++){
//         const palabrasEspacio = text[i] + " ".repeat(palabraLarga.length - text[i].length)

//         console.log("* " + palabrasEspacio + " *")
//     }
//     console.log("*".repeat(palabraLarga.length + 4));
// }

// fraseAncho("Hola mundo")