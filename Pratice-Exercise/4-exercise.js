
let name = "admin";
let password = "123456";


function credential(name, password) {

    if ((name.trim() === "") && (password.trim() === "")) {
        console.log("Los campos están vacíos");
    } else {
        if (name.length < 4) {
            console.log("El nombre de usuario es demasiado corto");
        } else {
            if (password.length < 6) {
                console.log("La contraseña es demasiado corta");
            }
        }
        if ((name.length >= 4) && (password.length >= 6)) {
            console.log("Bienvenido");
        }
    }if ((name === "admin") && (password === "123456")) {
        console.log("El usuario es dmin");
    } else if ((name === "admin") && (password === "123456")){
        console.log("Credenciales incorrectas");
    }
}
