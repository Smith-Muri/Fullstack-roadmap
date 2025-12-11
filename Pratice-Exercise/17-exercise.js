/*
3. You receive an array of student objects in this format:
{
  name: "Laura",
  grades: [80, 70, 90, 100]
}
Write a function that must:
1. Calculate the average grade for each student.
2. Determine whether the student passes or fails based on this rule:
Average ≥ 75 → "Pass"
Average < 75 → "Fail"
3. Return a new array of objects with this structure:
{
  name: "Laura",
  average: 85,
  status: "Pass"
}
Example input:
[
  { name: "Laura", grades: [80, 70, 90] },
  { name: "Mark", grades: [50, 60, 55] }
]
Expected output:
[
  { name: "Laura", average: 80, status: "Pass" },
  { name: "Mark", average: 55, status: "Fail" }
]
Hint:Recorrer objetos
*/

function evaluateStudents(students) {
  return students.map(student => {

    const sum = student.grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
 
    const average = sum / student.grades.length;


    const status = average >= 75 ? 'Pass' : 'Fail';


    return {
      name: student.name,
      average: average,
      status: status
    };
  });
}


const input = [
  { name: "Laura", grades: [90, 70, 90] },
  { name: "Mark", grades: [50, 60, 55] }
];

const result = evaluateStudents(input);
console.log(result);

