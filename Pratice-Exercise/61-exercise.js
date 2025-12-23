

function dropGifts(warehouse, drops){
const rows = warehouse.length;

  for (let col of drops) {
   
    for (let row = rows - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] = '#';
        break; 
      }
    }
  }

  return warehouse;
}

console.log(dropGifts(
  [
    "..#.",
    ".##.",
    "....",
    "...."
  ],
  [0, 1, 1, 3]
));