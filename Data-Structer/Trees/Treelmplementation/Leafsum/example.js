const Node = require('../Node');
const leafsum = require('./leafsum');

// Create the binary tree as per your example
const Btree = new leafsum();
Btree.root = new Node(9);
Btree.root.left = new Node(8);
Btree.root.right = new Node(12);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(17);
Btree.root.right.right = new Node(23);
Btree.root.left.left.right = new Node(4);

// Function to get all leaf nodes for display
function getLeafNodes(node) {
    if (!node) return [];
    if (!node.left && !node.right) return [node.value];
    return [...getLeafNodes(node.left), ...getLeafNodes(node.right)];
}

const leafNodes = getLeafNodes(Btree.root);
const leafSum = Btree.Leafsum();

console.log("Leaf nodes are:", leafNodes.join(", "));
console.log("Sum of leaf nodes:", leafSum);
