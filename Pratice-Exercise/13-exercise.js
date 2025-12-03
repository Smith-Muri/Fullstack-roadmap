/* 
You receive an array of strings (usernames).
Write a function that returns a new array containing only the usernames that follow these rules:
Rules:
The username must have at least 4 characters.
The username must not contain spaces.
The username must start with a letter (not a number).
INPUT: ["john", "a1", "maria", "  kevin", "7sam", "luis"]
OUTPUT: ["john", "maria", "luis"]

*/


let usuarios = ["fernadno", "a1", "1", "S2ara", "7sam", "luis"];

function usariosArray(usuarios) {
    let finalArray = [];
    for (let i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].length >= 4) && (usuarios[i].indexOf(" ") === -1) && (usuarios[i].charAt(0).match(/[a-zA-Z]/))) {
            finalArray.push(usuarios[i]);
            console.log(finalArray);
        }
        
    }

}

console.log(usariosArray(usuarios));
