
const medicalHistory = require('./medical_history.json');
const users = require('./user-database.json');


function normalizar(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


function userLastAppointment(identifier) {

  const normalizedIdentifier = normalizar(identifier);


  const user = users.find(u =>
    u.userId === identifier ||
    normalizar(`${u.firstName} ${u.lastName}`) === normalizedIdentifier
  );

  if (!user) {
    return "usuario no existe";
  }

 
  let lastAppointment = null;

  for (let i = 0; i < medicalHistory.length; i++) {
    const record = medicalHistory[i];

    if (record.userId === user.userId) {
      if (
        !lastAppointment ||
        record.date > lastAppointment.date
      ) {
        lastAppointment = record;
      }
    }
  }

  if (!lastAppointment) {
    return "el usuario no tiene citas registradas";
  }


  return {
    userId: user.userId,
    fullName: `${user.firstName} ${user.lastName}`,
    serviceId: lastAppointment.serviceId,
    speciality: lastAppointment.speciality,
    hospitalName: lastAppointment.hospitalName,
    medicalNotes: lastAppointment.medicalNotes,
    medicationsUsed: lastAppointment.medicationsUsed,
    date: lastAppointment.date
  };
}


console.log(userLastAppointment("Andrés Gómez"));

