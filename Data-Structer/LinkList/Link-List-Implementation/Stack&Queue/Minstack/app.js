const MinStack = require('./Minstack');
const minStack = new MinStack();       

minStack.push(15); 
minStack.push(7); 
minStack.push(12); 
minStack.push(3);  


console.log("Current stack:");
minStack.printstack(); 


let min = minStack.getMin(); 
console.log("Minimum:", min);


let popped = minStack.pop(); 
console.log("Popped:", popped); 


console.log("Stack after pop:");
minStack.printstack(); 


min = minStack.getMin();
console.log("New minimum:", min); 


let peeked = minStack.top();
console.log("Top element:", peeked);


minStack.push(2); 


console.log("Stack after pushing 2:");
minStack.printstack(); 


min = minStack.getMin();
console.log("New minimum after pushing 2:", min); 


let isEmpty = minStack.isEmpty();
console.log("Is stack empty?", isEmpty); 
