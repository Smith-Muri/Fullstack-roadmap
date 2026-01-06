const medicalHistory = require('../0-day/medical_history.json');


function serviceData(identifier) {

    let user;

    if(identifier.startsWith("srv_")){
        user = medicalHistory.find(u => u.serviceId === identifier)
    }else{
        return "El servicio no existe";
    }

    return user;
}

console.log(serviceData("srv_0002"))