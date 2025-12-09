function pinPon(jugador1, jugador2, puntos1, puntos2) {

  if (puntos1 >= 11 || puntos2 >= 11) {
    const ganador = puntos1 >= 11 ? jugador1 : jugador2;
    console.log(`Se acabo el juego, gano: ${ganador} (${puntos1} - ${puntos2})`);
  } 
  else {
    const total = puntos1 + puntos2;
    const quienSaca = Math.floor(total / 2) % 2 === 0 ? jugador1 : jugador2;

    console.log(`Puntajes: ${jugador1} ${puntos1} - ${puntos2} ${jugador2}. Saca: ${quienSaca}`);
  }
}


console.log("Posiciones");

let puntaje1 = 0
let puntaje2 = 0;
let jugadores = ["María", "Pedro"];

while (puntaje1 < 11 && puntaje2 < 11) {
  pinPon(jugadores[0], jugadores[1], puntaje1, puntaje2);

 
  if (Math.random() > 0.5) {
    puntaje1++;
  } else {
    puntaje2++;
  }
}

pinPon(jugadores[0], jugadores[1], puntaje1, puntaje2);