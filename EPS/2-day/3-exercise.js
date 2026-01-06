const medicalHistory = require('../0-day/medical_history.json');

function specialyDoctor() {

    let doctors = {};
    let resultado = [];

   
    for (let i = 0; i < medicalHistory.length; i++) {
        let doctor = medicalHistory[i].doctor;
        let speciality = medicalHistory[i].speciality;

        if (!doctors[doctor]) {
            doctors[doctor] = [];
        }

       
        let existe = false;
        for (let j = 0; j < doctors[doctor].length; j++) {
            if (doctors[doctor][j] === speciality) {
                existe = true;
                break;
            }
        }

        if (!existe) {
            doctors[doctor].push(speciality);
        }
    }

    
    for (let doctor in doctors) {
        if (doctors[doctor].length > 4) {
            resultado.push({
                doctor: doctor,
                specialities: doctors[doctor]
            });
        }
    }

    return resultado;
}

console.log(specialyDoctor());
