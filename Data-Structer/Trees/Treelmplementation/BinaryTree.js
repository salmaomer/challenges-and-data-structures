const Node = require("./Node.js");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  printTree(node = this.root, level = 0, prefix = "Root: ") {
    if (node) {
      console.log(" ".repeat(level * 4) + prefix + node.value);
      if (node.left) {
        this.printTree(node.left, level + 1, "L--- ");
      }
      if (node.right) {
        this.printTree(node.right, level + 1, "R--- ");
      }
    }
  }
}

module.exports = BinaryTree;