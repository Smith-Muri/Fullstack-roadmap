const medicalHistory = require('../0-day/medical_history.json');
const users = require('../0-day/user-database.json');


function userPreferredHospital(identifier){


    const normalizar = text => text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();


    const normaName = normalizar(identifier);

    let user = users.find(u => normalizar(`${u.firstName} ${u.lastName}`) === normaName);

    if(!user){
        return "Este usuario no existe";
    }

    let contador = {}

    for(let i = 0; i < medicalHistory.length; i++){
        let hospital = medicalHistory[i];

        if(hospital.userId === user.userId){
            let hospitalName = hospital.hospitalName


            if(contador[hospitalName]){
                contador[hospitalName]++;
            }else{
                contador[hospitalName] = 1;
            }
        }
    }

    let hospitalPreferido = null;
    let maximoVisitas = 0;

    for(let clinica in contador){
        if(contador[clinica] > maximoVisitas){
            maximoVisitas = contador[clinica];
            hospitalPreferido = clinica;
        }
    }

    return hospitalPreferido;

}

console.log(userPreferredHospital("andres gomez"))