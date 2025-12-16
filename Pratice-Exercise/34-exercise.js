const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 28,
  country: "Canada"
};



function infoName(other){

    

    return {
        name: other.name,
        email: other.email,
        otherInfo: { age: other.age, country: other.country }
    }
}

console.log(infoName(user))
