const data =
[
    {name: "Mouse", price: 30, quantity: 2},
    {name: "Laptop", price: 1200, quantity: 1},
    {name: "Cable", price: 0, quantity: 3}
];


function artitulos(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].price <= 0) {
            return "Este articulo es igual o menor a 0: " + data[i].name;
        }
        let total = data[i].price * data[i].quantity;
        if (total > 500 && total < 1000) {
            total = total - (total * 0.10);
            console.log(total);
        }else if(total > 1000) {
            total = total - (total * 0.15);
            console.log(total);
        }
        
    }

}

    console.log(artitulos(data));