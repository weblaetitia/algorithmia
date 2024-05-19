class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// créons une liste
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // PUSH ajouter un element en fin de liste
  push(value) {
    // 1 on créé un node
    const node = new Node(value);
    // Si la list est vide, le premier node est à la fois head et tail
    // cas limite : la liste est vide
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }
    // 2 on défini la next du dernier element à ce nouveau node
    this.tail.next = node;
    // on déplace le head sur le nouveau node
    this.tail = node;
    // incrémente la longueur
    this.length++;
    return this;
  }

  // SHIFT supprimer le premier élément d'une liste et retourner l'élément supprimé
  shift() {
    if (this.head == null) return undefined; // cas limite
    const firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return firstNode;
  }

  // ajouter un node en début de la liste
  unshift(value) {
    const node = new Node(value);

    // cas limite
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  // GET trouver un node selon son index
  get(index) {
    if (index > this.length - 1 || index < 0) return undefined; // cas limite
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      const shifted = this.shift();
      current = current.next;
      counter++;
    }
    return current;
  }

  // POP Enlève le dernier élément de la liste
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  // REVERSE Inverse les éléments d'une liste
  // Dificile et ne sert à rien
}

const list = new SingleLinkedList();
list.push("salade");
list.push("tomate");
list.push("oignon");
console.log("DEBUT ------");
console.log("base list", list);
console.log("------");
console.log("je supprime le premier : ", list.shift());
console.log("list", list);
console.log("------");
list.unshift("frites");
console.log("J'ajoute des frites", list);
console.log("------");
console.log("FOUND", list.get(2)); // oignon
console.log("------");
list.pop();
console.log("J'enleve le dernier élément", list);
