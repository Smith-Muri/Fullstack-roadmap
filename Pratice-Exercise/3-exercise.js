// 1. Write a function that receives a temperature in Celsius and prints a message according to these rules:If the temperature is below 0, print: "It's freezing!"
// If the temperature is between 0 and 20, print: "It's cold.
// "If the temperature is between 21 and 30, print: "Nice weather."If the temperature is above 30, print: "It's hot!"


let num = 0;

function Celsius(num){

    if(num <0){
        console.log("Hace mucho frio");
    }else if((num >= 0) && (num <= 20)){
        console.log("Hace frio");

    }else if((num >=21) && (num <= 30)){
        console.log("Hace buen tiempo");
    }else if(num > 30){
        console.log("Hace calor");

    } else{
        console.log("Ingrese un número")
    }

}