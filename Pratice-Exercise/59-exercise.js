

function hasFourLights(board) {


    const filas = board.length;
    const columnas = board[0].length;

    const direcciones = [
        [0, 1],
        [1, 0]
    ];

    for(let r = 0; r < filas; r++){
        for(let c = 0; c < columnas; c++){
            const color = board[r][c];


            if(color === '.')continue;


            for(let [dr, dc] of direcciones){
                let contador = 1;

                for(let k = 1; k < 4; k++){
                    const nfila = r + dr * k;
                    const ncolu = c + dc * k;

                    if(nfila < 0 || nfila >= filas || ncolu < 0 || ncolu >= columnas){
                        break;
                    }

                    if(board[nfila][ncolu] === color){
                        contador++;
                    }else{
                        break;
                    }
                }

                if(contador === 4){
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]));