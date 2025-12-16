const user = {
  id: 101,
  username: "jose_dev",
  email: "jose@mail.com",
  password: "secret123",
  role: "admin"
};

function dataUser(data){

    console.log(`Id: ${data.id}`);
    console.log(`Username: ${data.username}`);
    console.log(`Email: ${data.email}`);

}

console.log(dataUser(user))