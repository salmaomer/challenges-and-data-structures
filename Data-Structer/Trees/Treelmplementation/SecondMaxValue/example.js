// example.js
const Node = require("../Node.js");
const BinaryTree = require("./BinaryTree.js");

// 1. Empty Tree
const emptyTree = new BinaryTree();
console.log("Empty Tree ->", emptyTree.findSecondMax()); // null

// 2. Single Node Tree
const singleNodeTree = new BinaryTree();
singleNodeTree.root = new Node(10);
console.log("Single Node Tree ->", singleNodeTree.findSecondMax()); // null

// 3. Duplicate Values
const duplicateTree = new BinaryTree();
duplicateTree.root = new Node(5);
duplicateTree.root.left = new Node(5);
duplicateTree.root.right = new Node(5);
console.log("Duplicate Values Tree ->", duplicateTree.findSecondMax()); // null

// 4. Normal Tree
const normalTree = new BinaryTree();
normalTree.root = new Node(10);
normalTree.root.left = new Node(5);
normalTree.root.right = new Node(20);
normalTree.root.right.right = new Node(25);
normalTree.root.right.left = new Node(15);
console.log("Normal Tree ->", normalTree.findSecondMax()); // 20
