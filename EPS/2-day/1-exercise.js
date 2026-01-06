const medicalHistory = require('../0-day/medical_history.json');



function busiestHospitals() {


    let contador = {};
    

    for (let i = 0; i < medicalHistory.length; i++) {
        let hospitalName  = medicalHistory[i].hospitalName

        if (contador[hospitalName ]) {
            contador[hospitalName ]++;
        } else {
            contador[hospitalName ] = 1;
        }
    }

    let hospitales = [];

    for(let hospital in contador){
        hospitales.push({
            hospitalName: hospital,
            userServed: contador[hospital]
        });
    }

    for(let i = 0; i < hospitales.length - 1; i++){
        for(let j = i; j < hospitales.length; j++){
            if(hospitales[j].userServed > hospitales[i].userServed){
                let tiempo = hospitales[i];
                hospitales[i] = hospitales[j];
                hospitales[j] = tiempo;
            }
        }
    }

    let to3 = [];

    for(let i = 0; i < 3 &&  i < hospitales.length; i++){
        to3.push(hospitales[i])
    }

    return to3

}

console.log(busiestHospitals());