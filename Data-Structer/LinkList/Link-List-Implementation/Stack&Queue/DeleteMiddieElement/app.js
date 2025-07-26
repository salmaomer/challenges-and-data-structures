
const DeleteMiddie = require('./DeleteMiddie');

const stack = new DeleteMiddie();

stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

stack.print();  // Output: [7, 14, 3, 8, 5] -> Top is last

stack.deleteMiddle();
stack.print();  // After deleting middle (3): [7, 14, 8, 5]

stack.push(2);
stack.push(9);
stack.push(11);
stack.print();  // Output: [7, 14, 8, 5, 2, 9, 11]

stack.deleteMiddle();
stack.print();  // Should delete 5: [7, 14, 8, 2, 9, 11]
