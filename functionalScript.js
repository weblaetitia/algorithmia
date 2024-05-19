function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function createSinglyLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
  };
}

function push(list, value) {
  const node = createNode(value);
  if (list.head === null) {
    list.head = node;
    list.tail = node;
  } else {
    list.tail.next = node;
    list.tail = node;
  }
  list.length++;
  return list;
}

function unshift(list, value) {
  const node = createNode(value);
  if (list.head === null) {
    list.head = node;
    list.tail = node;
  } else {
    node.next = list.head;
    list.head = node;
  }
  list.length++;
  return list;
}

function shift(list) {
  if (list.head === null) {
    return undefined;
  }
  list.head = list.head.next;
  list.length--;
  if (list.length === 0) {
    list.tail = null;
  }
  return list;
}

const list = createSinglyLinkedList();

console.log("Avant push et unshift:", list);

push(list, 10);
push(list, 20);
push(list, 30);

console.log("Après push:", list);

unshift(list, 5);

console.log("Après unshift:", list);

// shift(list);

// console.log("Après shift:", list);
