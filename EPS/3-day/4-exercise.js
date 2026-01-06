const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function detectarMalaPracticaWarfarina() {

    let reporte = {};

    for (let i = 0; i < medicalHistory.length; i++) {
        const r = medicalHistory[i];

        if (!r.medicationsUsed || !Array.isArray(r.medicationsUsed)) continue;
        if (!r.doctor || !r.userId || !r.date) continue;

        
        let contadorWarfarina = 0;

        for (let j = 0; j < r.medicationsUsed.length; j++) {
            const rawMed = r.medicationsUsed[j];
            if (!rawMed || typeof rawMed !== "string") continue;

            if (rawMed.toLowerCase().includes("warfarina")) {
                contadorWarfarina++;
            }
        }

       
        if (contadorWarfarina <= 1) continue;

       
        let pacienteNombre = null;
        for (let u = 0; u < users.length; u++) {
            if (users[u].userId === r.userId) {
                pacienteNombre = users[u].firstName + " " + users[u].lastName;
                break;
            }
        }

        if (!pacienteNombre) continue;

        
        if (!reporte[r.doctor]) {
            reporte[r.doctor] = {
                doctor: r.doctor,
                fechas: [],
                pacientes: []
            };
        }

       
        if (!reporte[r.doctor].fechas.includes(r.date)) {
            reporte[r.doctor].fechas.push(r.date);
        }

        if (!reporte[r.doctor].pacientes.includes(pacienteNombre)) {
            reporte[r.doctor].pacientes.push(pacienteNombre);
        }
    }

    
    return Object.values(reporte);
}

const informe = detectarMalaPracticaWarfarina();

console.log("=== INFORME DE MALA PRÁCTICA (WARFARINA) ===");
console.log(JSON.stringify(informe, null, 2));
