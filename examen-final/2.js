const studentsList = require('./students_db.json');
const universiList = require('./universities_db.json');

function fraude() {
    let resultado = [];

    for (let i = 0; i < studentsList.length; i++) {
        let student = studentsList[i];


        if (student.status === "Matriculado") {

            let university = null;

            
            for (let j = 0; j < universiList.length; j++) {
                if (universiList[j].code === student.universityCode) {
                    university = universiList[j];
                    break;
                }
            }

            if (university !== null) {

                let carreraEncontrada = false;

                for (let k = 0; k < university.offeredCareers.length; k++) {
                    if (university.offeredCareers[k] === student.career) {
                        carreraEncontrada = true;
                        break;
                    }
                }
                if (!carreraEncontrada) {
                    resultado.push({
                        fullName: student.firstName + " " + student.lastName,
                        userId: student.userId,
                        universityName: university.universityName
                    });
                }
            }
        }
    }

    return resultado;
}

console.log(fraude());
