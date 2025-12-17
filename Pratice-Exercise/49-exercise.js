const gifts1 = ['car', 'doll#arm', 'ball', '#train']


function giftsArray(gifts1) {

    let arrayFinal = [];
    
    gifts1.forEach(element => {
        if(!element.includes('#')){
            arrayFinal.push(element);
        }
        
    });

    return arrayFinal;

}

console.log(giftsArray(gifts1))


const gifts2 = ['#broken', '#rusty']

function arrayTwo(gifts2){

    let arrayFinal = [];

    for(let i = 0; i < gifts2.length; i++){
        if(gifts2[i] === '#'){
            arrayFinal.push(gifts2[i]);
        }
    }

    return arrayFinal;
}

console.log(arrayTwo(gifts2))