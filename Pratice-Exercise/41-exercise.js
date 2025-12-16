const users = [
    { id: 1, username: "ana", age: 21 },
    { id: 2, username: "mark", age: 30 }
];


function array(data) {

    let arrayFinal = []

    for (let i = 0; i < data.length; i++) {
        arrayFinal.push(data[i].id ,data[i].username)
    }

    return arrayFinal;

}

console.log(array(users))