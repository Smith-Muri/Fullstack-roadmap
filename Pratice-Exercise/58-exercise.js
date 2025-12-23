packGifts([2, 3, 4, 1], 5);


function packGifts(array, number) {

  if(array.length === 0){
    return 0;
  }

  let trineo  = 1;
  let contador = 0;


  for(let i = 0; i < array.length; i++){
    if(array[i] > number){
        return null;
    }


    if(contador + array[i] > number){
        trineo++;
        contador = array[i];
    }else{
        contador += array[i];
    }
  }

  return trineo;

}

console.log(packGifts([2, 1, 1, 1], 2))

