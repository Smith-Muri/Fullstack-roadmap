const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');



function userServicesResume(identifier) {


    const normalizar = text => text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();


    const normaName = normalizar(identifier);

    let user = users.find(u => u.userId === identifier || normalizar(`${u.firstName} ${u.lastName}`) === normaName);

    if (!user) {
        return "Este usuario no existe";
    }

    let contador = 0;
    for (let i = 0; i < medicalHistory.length; i++) {
        let citas = medicalHistory[i];
        if (citas.userId === user.userId) {
            contador++
        }
    }


    return {
        userId: user.userId,
        fullname: `${user.firstName} ${user.lastName}`,
        totalMedicalAppointments: contador
    };

}



console.log(userServicesResume("Andres Gomez"))