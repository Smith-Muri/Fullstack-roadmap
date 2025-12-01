// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

let number1 = 0;
let number2 = 0;

function multiple (number1, number2){
    if((number1 % 7 === 0 || number1 % 11 === 0)){
        console.log("Este numero: " + number1 + " " + "es multiplo de 7");
    } else{
        console.log("Este numero no es multiplo de 7 ni de 11")
    }
    if((number2 % 7 === 0 || number2 % 11 === 0)){
        console.log("Este numero es: " + number2 + " " + "es multiplo de 11");
    } else {
        console.log("Este numero no es multiplo de 7 ni de 11")
    }

}


