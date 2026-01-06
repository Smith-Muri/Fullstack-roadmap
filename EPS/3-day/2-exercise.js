const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function detectarImpostor() {
    let pacientes = [];
    let hospitales = [];
    let doctoresAlergologia = {};
    let doctoresOtrasEspecialidades = {};


    for (let i = 0; i < medicalHistory.length; i++) {
        const r = medicalHistory[i];

        if (!r.doctor || !r.speciality) continue;

        if (r.speciality === "Alergología") {
            doctoresAlergologia[r.doctor] = true;
        } else {
            doctoresOtrasEspecialidades[r.doctor] = true;
        }
    }


    for (let i = 0; i < medicalHistory.length; i++) {
        const r = medicalHistory[i];

        if (
            r.speciality === "Alergología" &&
            doctoresOtrasEspecialidades[r.doctor]
        ) {
      
            let user = null;
            for (let j = 0; j < users.length; j++) {
                if (users[j].userId === r.userId) {
                    user = users[j];
                    break;
                }
            }

            if (user) {
                pacientes.push({
                    userId: user.userId,
                    fullname: user.firstName + " " + user.lastName,
                    email: user.email,
                    doctor: r.doctor,
                    hospital: r.hospitalName,
                    fecha: r.date
                });
            }

            
            if (r.hospitalName && !hospitales.includes(r.hospitalName)) {
                hospitales.push(r.hospitalName);
            }
        }
    }

    return {
        totalPacientes: pacientes.length,
        pacientes,
        hospitales,
        mensaje: pacientes.length
            ? "Impostor detectado"
            : "No se encontraron impostores"
    };
}

const reporte = detectarImpostor();

console.log("Total pacientes afectados:", reporte.totalPacientes);
console.log("Hospitales involucrados:", reporte.hospitales);
console.log("Pacientes afectados:", reporte.pacientes);
