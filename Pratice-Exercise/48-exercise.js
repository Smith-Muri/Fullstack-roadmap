const form = {
  name: "Laura",
  email: "laura@mail.com",
  age: 28,
};

function valueData(data){

    for(let i in data){

        if(data[i].length === 0){
            return false;
        }if(data[i] === " "){
            return false
        }
    }

    return true;
}

console.log(valueData(form))