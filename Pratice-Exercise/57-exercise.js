

function findGiftPath(workshop, value) {

  if (typeof workshop !== "object" || workshop === null) {
    return [];
  }

  for (let i in workshop) {
    if (workshop[i] === value) {
      return [i];
    }


    if (typeof workshop[i] === "object" && workshop[i] !== null) {

      const final = findGiftPath(workshop[i], value);

      if (final.length > 0) {
        return [i, ...final];
      }
    }
  }
  return [];

}



const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(findGiftPath(workshop, 'car'));