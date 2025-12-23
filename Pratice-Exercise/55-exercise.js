
function maxDeep(string) {

    let contador = 0;
    let maxValue = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '[') {
            contador ++;
            if (contador > maxValue) {
                maxValue = contador;
            }
        } else if (string[i] === ']') {
            contador--;
            if (contador < 0) {
                return -1;
            }
        }
    }

    if (contador !== 0) {
        return -1
    }

    return maxValue;
}

console.log(maxDeep('[[]]][[][[[]]'));