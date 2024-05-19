const insertionSort0 = (array) => {
  for (let i = 1; i < array.length; i++) {
    // l'element 0 du tableau est déjà trié donc on peut commencer par l'élément 1
    // on stock cet élément dans une var
    let current = array[i];
    let leftNeighbor = i - 1;
    while (current < array[leftNeighbor]) {
      array[leftNeighbor + 1] = array[leftNeighbor];
      leftNeighbor--;
    }
    array[leftNeighbor + 1] = current;
  }
  return array;
};

const tokens = [12, 24, 1, 42];

console.log(insertionSort0(tokens));
