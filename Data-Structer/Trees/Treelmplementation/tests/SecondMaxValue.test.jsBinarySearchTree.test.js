const Node = require("../Node.js");
const BinaryTree = require("../SecondMaxValue/BinaryTree.js");

describe("BinaryTree.findSecondMax", () => {
  test("Finds the 2nd maximum value in a normal tree", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);

    expect(tree.findSecondMax()).toBe(20);
  });

  test("Returns null for a tree with only one node", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree.findSecondMax()).toBeNull();
  });

  test("Finds the 2nd maximum value with negative values", () => {
    const tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-20);
    tree.root.right = new Node(-5);
    tree.root.left.left = new Node(-30);
    tree.root.right.right = new Node(-1);

    expect(tree.findSecondMax()).toBe(-5);
  });
});
