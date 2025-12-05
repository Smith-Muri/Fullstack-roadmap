


let num = [20, 50, 5, 18]


function mayorEdad(num) {

    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 18) {
            count++;
        }
    }
    
    return count;

}

console.log(mayorEdad(num));