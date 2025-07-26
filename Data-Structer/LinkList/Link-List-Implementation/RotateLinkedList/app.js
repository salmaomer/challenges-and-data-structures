const rotatelinkedlist = require('./rotatelinkedlist');
const LinkedList = require('../linklist');

const list = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(val => list.add(val));

const rotator = new rotatelinkedlist(list);


rotator.printList();      
rotator.rotate(2);        
rotator.printList();      












