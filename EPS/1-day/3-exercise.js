const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function hospitalUsers (identifier){

        const normalizar = text => text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();


        const normaName = normalizar(identifier);

        let nameHospital = medicalHistory.find(n => normalizar(n.hospitalName) === normaName);

        if(!nameHospital){
            return "Este hospital no existe";
        }

        let arrayFinal = new Set();

        for(let i = 0; i < medicalHistory.length; i++){
            let hospital = medicalHistory[i];

            if(normalizar(hospital.hospitalName) === normaName){
               let user = users.find(u => u.userId === hospital.userId)


               if(user){
                    arrayFinal.add(`${user.firstName} ${user.lastName}`)
               }
            }
        }

        return Array.from(arrayFinal);
}

console.log(hospitalUsers("Hospital San José del Guaviare"))