const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');


function medicationUsedTracker(identifier, medical) {

    const normalizar = text => {
        if(!text) return "";
        return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }


    const normaName = normalizar(identifier)
    const normaName2 = normalizar(medical)

    let user = users.find(u => u.userId === identifier || normalizar(`${u.firstName} ${u.lastName}`) === normaName);

    if (!user) {
        return "Este usuario no existe"
    }


    for (let i = medicalHistory.length - 1; i >= 0; i--){

        const registro = medicalHistory[i];

        if (registro.userId  === user.userId ) {

            for (let j = 0; j < registro.medicationsUsed.length; j++) {
                const medicamento = normalizar(registro.medicationsUsed[j]); 

                if (medicamento === normaName2) {
                    return {
                        userId: user.userId,
                        fullName: `${user.firstName} ${user.lastName}`,
                        date: registro.date,
                        hospitalName: registro.hospitalName,
                        doctor: registro.doctor
                    };
                }
            }
        }
    }
    return "Este medicamento no ha sido administrado a este usuario";

}

console.log(medicationUsedTracker("usr_001", "Naproxeno"));