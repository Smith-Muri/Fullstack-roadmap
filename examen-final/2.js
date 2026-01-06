const studentsList = require('./students_db.json');
const universiList = require('./universities_db.json');


let srt = "Matriculado"
function fraude(srt) {

    let student = studentsList.find(u => u.status === srt)
    let uni = universiList.find(k => k.universityName)



    for (let i = 0; i < studentsList.length; i++) {

        for (let j = 0; j < studentsList[i].status; j++) {
            let estu = studentsList[i]

            if (estu[i] === "Matriculado") {
            }
        }
    }

    return {
        fullname: student.firstName,
        userId: student.userId,
        universityName: uni.universityName
    }


}

console.log(fraude(srt))