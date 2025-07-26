const Stack = require('../Stack&Queue-Implementation/Stack');

class DeleteMiddie extends Stack {
  deleteMiddle() {
    const n = this.size();
    if (n === 0) {
      console.log("Stack is empty. Nothing to delete.");
      return;
    }
    if (n === 1) {
      this.pop(); 
      return;
    }

    const middleIndex = Math.floor((n - 1) / 2); 
    const tempStack = new Stack();

    for (let i = 0; i < n; i++) {
      const item = this.pop();
      if (i !== middleIndex) {
        tempStack.push(item);
      }
    }

    while (!tempStack.isEmpty()) {
      this.push (tempStack.pop());
    }
  }

  getItems() {
    return [...this.items];
  }
}
/* */
module.exports = DeleteMiddie;
