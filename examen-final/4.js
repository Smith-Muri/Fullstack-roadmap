const studentsList = require('./students_db.json');
const gradesList = require('./grades_db.json');
const universitiesList = require('./universities_db.json');

function medicinaAprobados() {

    let resultado = [];

    
    for (let i = 0; i < studentsList.length; i++) {
        let student = studentsList[i];

        if (student.career === "Medicina") {

            let materias = [];
            let aprobadas = [];

            
            for (let j = 0; j < gradesList.length; j++) {
                if (gradesList[j].userId === student.userId) {

                    let existe = false;

                    for (let x = 0; x < materias.length; x++) {
                        if (materias[x] === gradesList[j].subject) {
                            existe = true;
                            break;
                        }
                    }

                    if (!existe) {
                        materias.push(gradesList[j].subject);
                    }
                }
            }

           
            for (let m = 0; m < materias.length; m++) {
                let suma = 0;
                let contador = 0;

                for (let n = 0; n < gradesList.length; n++) {
                    if (
                        gradesList[n].userId === student.userId &&
                        gradesList[n].subject === materias[m]
                    ) {
                        suma += gradesList[n].grade;
                        contador++;
                    }
                }

                let promedio = suma / contador;

                if (promedio > 3) {
                    aprobadas.push(materias[m]);
                }
            }

           
            if (aprobadas.length >= 6) {

                let universityName = "";

                for (let u = 0; u < universitiesList.length; u++) {
                    if (universitiesList[u].code === student.universityCode) {
                        universityName = universitiesList[u].universityName;
                        break;
                    }
                }

                resultado.push({
                    fullName: student.firstName + " " + student.lastName,
                    approvedSubjects: aprobadas,
                    universityName: universityName
                });
            }
        }
    }

    return resultado;
}

console.log(medicinaAprobados());
