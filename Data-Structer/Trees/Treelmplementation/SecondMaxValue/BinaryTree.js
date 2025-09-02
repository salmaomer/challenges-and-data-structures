// BinaryTree.js
const Node = require("../Node.js");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Recursive function to find second maximum
  findSecondMax() {
    if (!this.root) {
      console.log("⚠️ Tree is empty");
      return null; // Empty tree
    }

    let max = -Infinity;
    let secondMax = -Infinity;
    let uniqueValues = new Set();

    function traverse(node) {
      if (!node) return;

      uniqueValues.add(node.value);

      if (node.value > max) {
        secondMax = max;
        max = node.value;
      } else if (node.value < max && node.value > secondMax) {
        secondMax = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    // Check for single node or duplicates
    if (uniqueValues.size < 2) {
      console.log("⚠️ Tree does not have enough unique values");
      return null;
    }

    return secondMax === -Infinity ? null : secondMax;
  }
}

module.exports = BinaryTree;
