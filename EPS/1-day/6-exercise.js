const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');

function userPreferredDoctor(identifier){

    const normalizar = text => text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();


    const normaName = normalizar(identifier)

    let user = users.find(u => normalizar(`${u.firstName} ${u.lastName}`) === normaName);

    if(!user){
        return "Este usuario no existe";
    }

    let contador = {}

    for(let i = 0; i < medicalHistory.length; i++){
        let prefer = medicalHistory[i];
        if(prefer.userId === user.userId){

            let doctor = prefer.doctor
        

        if(contador[doctor]){
            contador[doctor]++;
        }else{
            contador[doctor] = 1;
        }
    }
}

    let doctorPreferido = null
    let max = 0;

    for(let doctorZas in contador){
        if(contador[doctorZas] > max){
            max = contador[doctorZas];
            doctorPreferido = doctorZas
        }
    }

    return doctorPreferido;
}

console.log(userPreferredDoctor("Andrés Gómez"))