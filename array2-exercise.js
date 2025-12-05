/* */


let num = [20, 50, 5, 18]


function mayorEdad(num) {

    for (let i = 0; i < num.length; i++) {

        if (num[i] < 18) {
            return true;
        }else{
            
            return false;
        }
    }
}

console.log(mayorEdad(num));

