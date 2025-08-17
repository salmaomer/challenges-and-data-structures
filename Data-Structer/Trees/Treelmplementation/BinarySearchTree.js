const Node = require("./Node.js");
const BinaryTree = require("./BinaryTree.js");

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this._addRecursive(this.root, value);
    }
  }

  _addRecursive(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this._addRecursive(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this._addRecursive(node.right, value);
      }
    }
  }

  contains(value) {
    return this._containsRecursive(this.root, value);
  }

  _containsRecursive(node, value) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) return this._containsRecursive(node.left, value);
    return this._containsRecursive(node.right, value);
  }

  remove(value) {
    this.root = this._removeRecursive(this.root, value);
  }

  _removeRecursive(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeRecursive(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minNode = this._minValueNode(node.right);
      node.value = minNode.value;
      node.right = this._removeRecursive(node.right, minNode.value);
    }
    return node;
  }

  _minValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
}
module.exports = BinarySearchTree;
