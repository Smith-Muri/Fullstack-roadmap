/**
 * Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is broader than 13 return double the absolute difference.  

*/


    let num = 13;
    
    let num2 = prompt("Ingrese un numero:" );

    if (num2 > num){
        console.log("El doble de la diferencia es:", (num2 - num) * 2);
    }else{
        console.log("La diferencia es:", num2 - num);
    }




