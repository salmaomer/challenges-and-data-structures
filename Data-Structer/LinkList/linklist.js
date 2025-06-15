const Node = require('./Nodes');

class LinkedList {
  constructor() {
    this.head = null;
  }

  /* Add a node to the end */
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  /* Remove the first node that contains the specified data */
  remove(data) {
    if (!this.head){
        return;
    } 

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  /* Print the list */
  printList() {
    let current = this.head;
    let listStr = "";

    while (current) {
      listStr += current.data + " -> ";
      current = current.next;
    }

    console.log(listStr + "null");
  }

  /* Check if list includes a this node */
  includes(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }

    return false;
  }

  /* Insert at a specific index */
  insertAt(data, index) {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === index) {
      newNode.next = current;
      previous.next = newNode;
    } else {
      console.log("Index out of bounds");
    }
  }
}

module.exports = LinkedList;
