/* 
You receive an array of objects. Each object represents a student with the structure:
{ name: "string", score: number }
Create a function that returns the name of the student with the highest score.
Example input:
[
  { name: "Anna", score: 87 },
  { name: "John", score: 92 },
  { name: "Laura", score: 88 }
]
Output: "John"
*/


function finalArray(students){

    if(students.length === 0)
        return null;

    let bestScore = students[0];

        for(let i = 0; i < students.length; i++){
            if(students[i].score > bestScore.score){
                bestScore = students[i];
            }
        }
        return bestScore.name;
    
    

}

const data = [
  { name: "Anna", score: 87 },
  { name: "John", score: 92 },
  { name: "Laura", score: 88 }
];

console.log(finalArray(data));