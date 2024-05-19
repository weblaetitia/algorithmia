const arrayOne = [10, 20, 30];
const arrayTwo = [8, 18, 31, 40];

let result = [];

const mergeStep = (array1, array2) => {
  // On commence avec deux tableaux triés, array1 et array2, ainsi qu'un tableau vide result qui servira à stocker la fusion triée des deux tableaux.

  let i = 0;
  let j = 0;
  const result = [];

  while (i < array1.length && j < array2.length) {
    // À chaque étape, on sélectionne l'élément le plus petit parmi les éléments actuellement pointés par les indices i et j.
    if (array1[i] < array2[j]) {
      // On ajoute cet élément sélectionné à result, et on avance l'indice correspondant.
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  //Après avoir épuisé l'un des deux tableaux, il peut rester des éléments dans l'autre tableau => on ajoute tous les éléments restants de ce tableau à la fin de result.
  if (i == array1.length) {
    while (j < array2.length) {
      result.push(array2[j]);
      j++;
    }
  }
  if (j == array2.length) {
    while (i < array1.length) {
      result.push(array1[i]);
      i++;
    }
  }
  // On retourne result
  return result;
};

result = mergeStep(arrayOne, arrayTwo);
console.log(result);
