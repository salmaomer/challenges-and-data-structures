 const Node= require("../Node.js");
 const BinaryTree = require("../BinaryTree.js");

describe("BinaryTree Traversals", () => {
  let tree;

  beforeEach(() => {
  
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    tree = new BinaryTree(root);
  });

  test("Pre-order traversal", () => {
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test("In-order traversal", () => {
    expect(tree.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test("Post-order traversal", () => {
    expect(tree.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});
