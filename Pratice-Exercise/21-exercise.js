/**
  You receive an array of car objects in the following format:
{
  brand: "Toyota",
  year: 2018,
  price: 12000
}
Write a function that returns a new array containing only the cars that meet both conditions:
year is greater than or equal to 2015
price is less than or equal to 15000
If no cars match, return an empty array.
Example input:
[
  { brand: "BMW", year: 2012, price: 18000 },
  { brand: "Toyota", year: 2018, price: 12000 },
  { brand: "Kia", year: 2020, price: 16000 }
]
Output:
[
  { brand: "Toyota", year: 2018, price: 12000 }
]
Hint: Recorrer objetos, Aplicar multiples condiciones, Construir un nuevo arreglo
 */



const cars = [
    { brand: "BMW", year: 2012, price: 18000 },
    { brand: "Toyota", year: 2018, price: 12000 },
    { brand: "Kia", year: 2020, price: 16000 }
]

function arrayCars() {
    
    let arrayFinal = [];
    for (let i = 0; i < cars.length; i++){
            if (cars[i].year >= 2015 && cars[i].price <= 15000){
                arrayFinal.push(cars[i]);
            }
        }

        return arrayFinal;
    }

console.log(arrayCars());



