const rotatelinkedlist = require('./rotatelinkedlist');
const LinkedList = require('../linklist');

const list = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(val => list.add(val));

const rotator = new rotatelinkedlist(list);

rotator.printList();      // Head -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
rotator.rotate(2);        // Rotate left by 7 (same as 1)
rotator.printList();      // Head -> 2 -> 3 -> 4 -> 5 -> 6 -> 1 -> null