const user = {
    username: "jose23",
    role: "user"
};


function newData(data) {

    return data = {
        newUser: {
            username: data.username,
            role: "admin",
            lastLogin: "2025-01-01"
        }
    }
}

console.log(newData(user))