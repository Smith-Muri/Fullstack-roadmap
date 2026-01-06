const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function detectarRiesgoFarmacologico() {

    const AINES = [
        "ibuprofeno",
        "naproxeno",
        "diclofenaco",
        "meloxicam",
        "ketorolaco",
        "indometacina",
        "celecoxib"
    ];

    let doctores = [];
    let hospitales = [];
    let pacientes = [];

    for (let i = 0; i < medicalHistory.length; i++) {
        const r = medicalHistory[i];

        if (!r.medicationsUsed || !Array.isArray(r.medicationsUsed)) continue;

        let tieneWarfarina = false;
        let tieneAINE = false;

        for (let j = 0; j < r.medicationsUsed.length; j++) {

            const rawMed = r.medicationsUsed[j];
            if (!rawMed || typeof rawMed !== "string") continue;

            const med = rawMed.toLowerCase();

            if (med.includes("warfarina")) {
                tieneWarfarina = true;
            }

            for (let k = 0; k < AINES.length; k++) {
                if (med.includes(AINES[k])) {
                    tieneAINE = true;
                    break;
                }
            }
        }

        if (!tieneWarfarina || !tieneAINE) continue;

        if (r.doctor && !doctores.includes(r.doctor)) {
            doctores.push(r.doctor);
        }

        if (r.hospitalName && !hospitales.includes(r.hospitalName)) {
            hospitales.push(r.hospitalName);
        }

        let user = null;
        for (let u = 0; u < users.length; u++) {
            if (users[u].userId === r.userId) {
                user = users[u];
                break;
            }
        }

        if (user) {
            pacientes.push({
                userId: user.userId,
                fullname: user.firstName + " " + user.lastName,
                email: user.email,
                hospital: r.hospitalName,
                doctor: r.doctor,
                fecha: r.date
            });
        }
    }

    return {
        doctores,
        hospitales,
        totalPacientes: pacientes.length,
        pacientes,
        mensaje: pacientes.length
            ? "Riesgo farmacológico detectado"
            : "No se encontraron combinaciones peligrosas"
    };
}

const reporte = detectarRiesgoFarmacologico();

console.log("=== REPORTE LEGAL FARMACOLÓGICO ===");
console.log("Doctores involucrados:", reporte.doctores);
console.log("Hospitales responsables:", reporte.hospitales);
console.log("Pacientes afectados:", reporte.pacientes);
