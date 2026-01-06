const studentsList = require('./students_db.json');
const  universiList = require('./universities_db.json');


let str = "Universidad Nacional"
let str2 = "903022448B"
function estudiantesNacional(str){
    
    
    let student = studentsList.find(u => u.universityCode === str2);
    let uni = universiList.find(k => k.universityName === str )

    if((student.universityCode === str2) && (uni.universityName === str)){   
    }

    return {
        nombre: student.firstName
    }

}

console.log(estudiantesNacional(str))