"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  setNext(node) {
    this.next = node;
  }
  getNext() {
    return this.next;
  }
  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Adds a node to the beginning of the list.
  prepend(value) {
    const node = new Node(value);
    if (this.head !== null) {
      node.setNext(this.head);
    } else {
      this.tail = node;
    }
    this.head = node;
    ++this.size;
  }

  // Adds a node to the end of the list.
  append(value) {
    const node = new Node(value);
    if (this.head !== null) {
      let current = this.head;
      while (current.getNext() !== null) {
        current = current.getNext();
      }
      current.setNext(node);
    } else {
      this.head = node;
    }
    this.tail = node;
    ++this.size;
  }

  at(index) {
    if (index >= this.size) {
      console.log("Index out of bounds.");
      return;
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.getNext();
      ++i;
    }
    return current.getValue();
  }

  insertAt(value, index) {
    if (index > this.size) {
      console.log("Index out of bounds.");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let current = this.head;
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.getNext();
        ++i;
      }
      node.setNext(current);
      prev.setNext(node);
    }
  }

  contains(value) {
    let current = this.head;
    let i = 0;
    while (i < this.size) {
      if (current.getValue() === value) return true;
      current = current.getNext();
      ++i;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    while (i < this.size) {
      if (current.getValue() === value) return i;
      current = current.getNext();
      ++i;
    }
    return null;
  }

  pop() {
    if (this.head === null) {
      console.log("List is empty.");
      return;
    }
    if (this.size === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      --this.size;
      return node;
    }
    let current = this.head;
    let prev = current;
    while (current.getNext() !== null) {
      prev = current;
      current = current.getNext();
    }
    prev.next = null;
    this.tail = prev;
    --this.size;
    return current.getValue();
  }

  removeAt(index) {
    if (index >= this.size) {
      console.log("Index out of bounds.");
      return;
    }
    if (index === 0) {
      this.head = this.head.getNext();
      --this.size;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.getNext();
      ++i;
    }
    prev.setNext(current.getNext());
    --this.size;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current !== null) {
      string += `(${current.value}) -> `;
      current = current.next;
    }
    return string + "null";
  }
}
