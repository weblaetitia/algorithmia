// Il y a 4 niveaux d'enfert : Niveau 3 est en surface. Niveau 0 est le plus profond.
// Eurydis descend aux enferts chercher Opheus qui est au niveau 0
// une fois que Orphéus est retrouvé, tous les deux remontent les niveaux jusqu'à 3

const findOrpheus = (level) => {
  if (level === 0) {
    console.log("Euridis found Orpheus!");
  } else {
    console.log(`Orpheus is not on level ${level}`);
    findOrpheus(level - 1);
  }
};

findOrpheus(3);

// Avec des returns
const findOrpheus2 = (level) => {
  if (level === 0) {
    return `Euridis found Orpheus on level ${level}!`;
  } else {
    const message = findOrpheus2(level - 1);
    return `Orpheus is not on level ${level}. ${message}`;
  }
};
const message = findOrpheus2(3);
console.log(message);

// correction
function walkOrpheusDown(level) {
  if (level === 0) {
    console.log(`Orphée a trouvé Eurydice au niveau ${level} des Enfers !`);
    return "Eurydice";
  } else {
    console.log(`Au niveau ${level}, Orphée n'a pas trouvé ce qu'il cherchait.`);
    const someone = walkOrpheusDown(level - 1);
    console.log(`Au niveau ${level}, Orphée a porté ${someone} dans ses bras.`);
    return someone;
  }
}

console.log("Orphée est de retour avec :", walkOrpheusDown(3));
