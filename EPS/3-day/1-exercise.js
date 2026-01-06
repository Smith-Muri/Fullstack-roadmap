const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function pregabalinaUser() {
    let resultado = [];

    for (let i = 0; i < medicalHistory.length; i++) {
        let registro = medicalHistory[i];

    
        if (!registro.date) continue;

        let fecha = new Date(registro.date);
        if (fecha.getFullYear() !== 2024) continue;

      
        if (!registro.medicationsUsed) continue;

        let tienePregabalina = false;

        if (Array.isArray(registro.medicationsUsed)) {
            for (let j = 0; j < registro.medicationsUsed.length; j++) {
                let med = registro.medicationsUsed[j];

                if (
                    med &&
                    med.toLowerCase &&
                    med.toLowerCase().includes("pregabalin")
                ) {
                    tienePregabalina = true;
                    break;
                }
            }
        } else {
            if (
                registro.medicationsUsed.toLowerCase &&
                registro.medicationsUsed.toLowerCase().includes("pregabalin")
            ) {
                tienePregabalina = true;
            }
        }

        if (!tienePregabalina) continue;

        let user = null;
        for (let k = 0; k < users.length; k++) {
            if (users[k].userId === registro.userId) {
                user = users[k];
                break;
            }
        }

        if (!user) continue;

        resultado.push({
            userId: user.userId,
            fullname: user.firstName + " " + user.lastName,
            email: user.email,
            fecha: registro.date
        });
    }

    return resultado.length ? resultado : "Pacientes no encontrados";
}

console.log(pregabalinaUser());
