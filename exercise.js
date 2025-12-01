// * 
// 1. Escriba una función de JavaScript 
// 2. para hallar el mayor número entre los dos enteros positivos dados. Los dos números están en el rango de 40 a 60 inclusive.


let num = 0;
let num2 = 0;

function numero (num, num2){

    if((num >= 40 && num <= 60) && (num2 >= 40 && num2 <= 60)){
        if (num > num2){
            console.log(num)
        }else{
            console.log(num2);
        }
    } else if((num >= 40 && num <= 60) && (num2 > 60 || num2 < 40)){
        console.log(num)
    }else if ((num2 >= 40 && num2 <= 60) && (num > 60 || num < 40)){
        console.log(num2);
    }else{
        console.log("Estos numeros no estan en el rango");
    }

}
 