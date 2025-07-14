const Stacke = require('./Stack');
const Queue = require('./Queue');

// ----- Stack Example -----
const stack = new Stacke();
stack.push(10);              
stack.push(20);             
stack.push(30);              

console.log(stack.pop());    
console.log(stack.peek());
console.log(stack.isEmpty()); 

stack.pop();                 
stack.pop();                 
console.log(stack.isEmpty());


// ----- Queue Example -----
const queue = new Queue();
queue.enqueue(10);           
queue.enqueue(20);           
queue.enqueue(30);           

console.log(queue.dequeue());
