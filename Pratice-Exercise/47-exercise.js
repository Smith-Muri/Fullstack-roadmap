const data = {
  name: "Server01",
  port: 8080,
  secure: true,
  timeout: 3000,
  region: "us-east"
};


function valuesData(value){

    let arrayFinal = {}

    for(let i in value){

       let tipo = typeof value[i];
       arrayFinal[tipo] = (arrayFinal[tipo] || 0) + 1     
    }

    return arrayFinal;
}

console.log(valuesData(data))