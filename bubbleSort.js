const bubbleSort = (array) => {
  let swapped;
  let lastUnsorted = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    swapped = false;
    console.log("Tour de boucle", i);
    // console.log("lastUnsorted", lastUnsorted);
    for (let j = 0; j < lastUnsorted; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    lastUnsorted--;
    if (swapped === false) {
      console.log("break");
      break;
    }
  }
  return array;
};

const myArray = [1, 54, 36, 89];
const worstArray = [99, 88, 77, 66];

bubbleSort(myArray);
bubbleSort(worstArray);
