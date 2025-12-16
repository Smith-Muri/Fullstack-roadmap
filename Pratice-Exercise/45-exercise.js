const apiResponse = {
  userId: 555,
  permissions: ["read", "write"],
  token: "abc123",
  expiresIn: 3600
};


function apiData(data){

    return data = {

        userId: data.userId,
        permissions: data.permissions,

        finalObject:{
            token: data.token,  
            expiresIn: data.expiresIn,
            processedAt: "some timestamp"
        }

    }
}

console.log(apiData(apiResponse))