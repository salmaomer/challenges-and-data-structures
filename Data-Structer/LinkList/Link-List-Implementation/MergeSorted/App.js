const MergeSorte = require('./mergeSorted');
const LinkedList = require('../linklist');

//List 1:
const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

//List 2:
const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

console.log("Merged List:");
const merged =  new MergeSorte (list1, list2);
merged.merge();
merged.printMergedList();  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null