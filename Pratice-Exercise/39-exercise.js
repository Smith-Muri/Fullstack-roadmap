const defaults = {
    theme: "light",
    language: "en",
    notifications: true
};

const customSettings = {
    theme: "dark",
    notifications: false
};


function dobleObject(data,date) {

    settings = {}

    return data = {

        settings: {
            theme: date.customSettings = { theme: date.theme },
            lenguage: data.defaults = { language: data.language },
            notifications: date.customSettings = { notifications: date.notifications }
        }
    }
}

console.log(dobleObject(defaults, customSettings))