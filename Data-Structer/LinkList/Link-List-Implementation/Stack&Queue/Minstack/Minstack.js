const Stack = require('../Stack&Queue-Implementation/Stack');


class MinStack {
  constructor() {
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }

 
  push(value) {
    this.mainStack.push(value);
    if (this.minStack.isEmpty() || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }
  
  pop() {
    if (this.mainStack.isEmpty()) return null;

    const popped = this.mainStack.pop();
    if (popped === this.getMin()) {
      this.minStack.pop();
    }
    return popped;
  }

  top() {
    return this.mainStack.peek();
  }

  isEmpty() {
    return this.mainStack.isEmpty();
  }

  getMin() {
    return this.minStack.peek();
  }

  printstack() {
    this.mainStack.print();
  }
}

module.exports = MinStack;
