
function revealSantaRoute(routes) {

    if(routes.length === 0) return[];

    const arrayFInal = [routes[0][0], routes[0][1]];
    let destinoFianl = routes[0][1];

    while(true){
        let siguiente = false

        for(let i = 1; i < routes.length; i++){
            const origen = routes[i][0];
            const destino = routes[i][1];

            if(origen === destinoFianl){
                arrayFInal.push(destino);
                destinoFianl = destino;
                siguiente = true;
                break;
            }
        }

        if(!siguiente) break;
    }

    return arrayFInal;

}

console.log(revealSantaRoute([
    ['MEX', 'CAN'],
    ['UK', 'GER'],
    ['CAN', 'UK']
])) 