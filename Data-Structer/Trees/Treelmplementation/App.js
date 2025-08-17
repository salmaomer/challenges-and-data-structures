const BinarySearchTree = require("./BinarySearchTree.js");

const bst = new BinarySearchTree();
[50, 30, 70, 20, 40, 60, 80].forEach(v => bst.add(v));

console.log("Tree Structure:");
bst.printTree();

console.log("\nPre-Order:", bst.preOrder());
console.log("In-Order:", bst.inOrder());
console.log("Post-Order:", bst.postOrder());

console.log("\nContains 40?", bst.contains(40));
console.log("Contains 100?", bst.contains(100));

bst.remove(30);
console.log("\nTree After Removing 30:");
bst.printTree();
