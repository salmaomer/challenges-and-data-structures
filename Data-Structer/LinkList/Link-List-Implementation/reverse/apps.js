const ReversesList = require('./Reverses');
const LinkedList = require('../linklist');

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Before Reverse:");
list.printList();

const listR = new ReversesList(list);
listR.reverse();

console.log("After Reverse:");
listR.printList();
