const company = {
  name: "TechCorp",
  address: {
    city: "Berlin",
    country: "Germany",
    zip: "10115"
  }
};


function Globant(data){

    return {city: data.address.city, data: data.address.country}
    
}

console.log(Globant(company))