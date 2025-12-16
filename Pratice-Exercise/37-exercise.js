const config = {
  host: "localhost",
  port: 8080,
  secure: true,
  timeout: 5000
};


function data(info){

    options = {}

    return {
        host: info.host,
        port: info.port,
        options:{secure: info.secure, timeout: info.timeout}
    }

}

console.log(data(config))