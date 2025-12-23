function timeUntilTakeOff(fromTime, takeOffTime) {

  function parseElfTime(elfTime) {
   
    const clean = elfTime.replace(' NP', '');

   
    const [datePart, timePart] = clean.split('@');

   
    const [year, month, day] = datePart.split('*').map(Number);

   
    const [hour, minute, second] = timePart.split('|').map(Number);

   
    return Math.floor(
      Date.UTC(year, month - 1, day, hour, minute, second) / 1000
    );
  }

  const fromTimestamp = parseElfTime(fromTime);
  const takeOffTimestamp = parseElfTime(takeOffTime);

  return Math.floor(takeOffTimestamp - fromTimestamp);
}


const takeoff = '2025*12*25@00|00|00 NP';

console.log(
  timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
); 

console.log(
  timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
); 

console.log(
  timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
); 
