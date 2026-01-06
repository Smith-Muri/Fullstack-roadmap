const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');


function hospitales(identifier){

    let user = users.find(u => u.userId === identifier || `${u.firstName} ${u.lastName}`);

    if(!user){
        return "Este usuario no es el indicado";
    }

    let arrayFinal = new Set();
    for(let i = 0; i < medicalHistory.length; i++){
        let hospital = medicalHistory[i];

        if(hospital.userId === user.userId){
            arrayFinal.add(hospital.hospitalName)
        }
    }

    return arrayFinal;
}

console.log(hospitales("Luis Burbano"))