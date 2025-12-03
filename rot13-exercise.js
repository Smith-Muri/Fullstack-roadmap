let abecedario = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Abc = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";


function rot13(str){

    return str.replace(/[A-Za-z]/g, c => Abc[abecedario.indexOf(c)]);

}

console.log(rot13("Sergio"));