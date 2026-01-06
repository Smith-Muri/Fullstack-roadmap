const studentsList = require('./students_db.json')
const calificacion = require('./grades_db.json')


function passOrNot(nombreCompleto, materia){


    let userId = null

    for(let i = 0; i < studentsList.length; i++){

        let student = studentsList[i]
        let fullname = student.firstName + " " + student.lastName;


        if(fullname === nombreCompleto){
            userId = student.userId;
            break;
        }
    }

    if(userId === null){
        return false;
    }

    let sumaNotas = 0;
    let contador = 0;


    for(let j = 0; j < calificacion.length; j++){

        let nota = calificacion[j]

        if(nota.userId === userId && nota.subject === materia){
            sumaNotas += nota.grade;
            contador++
        }
    }


    if(contador === 0){
        return false
    }


    let promedio = sumaNotas / contador;


    if(promedio < 3){
        return true;
    }else {
        return false;
    }

}

console.log(passOrNot("Raquel Figueroa", "Tipografía"))