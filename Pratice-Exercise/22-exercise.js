
/**
 
You receive an array of employee objects in this format:
{
  name: "Juan",
  sales: 3500,
  satisfaction: 0.9 // between 0 and 1
}
Write a function that calculates the bonus for each employee using these rules:
Base bonus = 10% of sales
If satisfaction score is 0.8 or higher, increase bonus by 20%
If sales exceed 5000, add an extra $200
Return a new array of objects:
{
  name: "...",
  bonus: calculatedBonus
}
Example input:
[
  { name: "Ana", sales: 6000, satisfaction: 0.85 },
  { name: "Luis", sales: 3000, satisfaction: 0.75 }
]
Expected output (simplified example):
[
  { name: "Ana", bonus: ... },
  { name: "Luis", bonus: ... }
]
hint: Recorrer objetos, Aplicar múltiples reglas de negocio, Crear estructura nueva
 */


const empleoyes = [
    { name: "Ana", sales: 6000, satisfaction: 0.85 },
    { name: "Luis", sales: 3000, satisfaction: 0.1 }
]

function calcule() {

    let arrayFinal = [];

    for(let i = 0; i < empleoyes.length; i++){

        let camelladores = empleoyes[i];
        let bonus = camelladores.sales * 0.10;

        if(camelladores.satisfaction >= 0.8 && camelladores.sales > 5000 ){
            bonus = bonus * 1.20;
            bonus +=200;    
        }

        arrayFinal.push({
            name:camelladores.name,
            bonus: bonus 
        })
    }

    return arrayFinal;
}

console.log(calcule());