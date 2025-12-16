const preferences = {
  language: "es"
}


function arrayModificate(data){
    
    return {
        theme: "light",
        language: data.language 
    }
}
console.log(arrayModificate(preferences))