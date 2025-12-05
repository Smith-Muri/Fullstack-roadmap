/* una funcion que reciba del 1 al 10 y que returno un array cantidad de items con valores de 0 a 100 aleatorio*/


let num = 2;

function getRandomNumber(num){

    let array = [];
    for(let i = 0; i < num; i++){
        array.push(Math.floor(Math.random() * 100));   
    }
}

return getRandomNumber(num);


