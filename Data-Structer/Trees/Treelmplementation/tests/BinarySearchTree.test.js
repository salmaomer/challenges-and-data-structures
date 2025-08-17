const BinarySearchTree = require("../BinarySearchTree.js");

describe("BinarySearchTree Operations", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    [50, 30, 70, 20, 40, 60, 80].forEach(v => bst.add(v));
  });

  test("Adding a node", () => {
    bst.add(25);
    expect(bst.contains(25)).toBe(true);
  });

  test("Checking if a node exists", () => {
    expect(bst.contains(40)).toBe(true);
    expect(bst.contains(100)).toBe(false);
  });

  test("Removing a node (leaf)", () => {
    bst.remove(20);
    expect(bst.contains(20)).toBe(false);
  });

  test("Removing a node (with one child)", () => {
    bst.remove(30);
    expect(bst.contains(30)).toBe(false);
    expect(bst.contains(40)).toBe(true); 
  });

  test("Removing a node (with two children)", () => {
    bst.remove(50);
    expect(bst.contains(50)).toBe(false);
  });
});
