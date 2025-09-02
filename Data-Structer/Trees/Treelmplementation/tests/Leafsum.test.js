const Node = require('../Node');
const leafsum = require('../Leafsum/leafsum');

describe("BinaryTree Leafsum", () => {

    test("Sum of leaf nodes in example tree", () => {
        const Btree = new leafsum();
        Btree.root = new Node(9);
        Btree.root.left = new Node(8);
        Btree.root.right = new Node(12);
        Btree.root.left.left = new Node(3);
        Btree.root.left.right = new Node(7);
        Btree.root.right.left = new Node(17);
        Btree.root.right.right = new Node(23);
        Btree.root.left.left.right = new Node(4);

        // Leaf nodes: 4, 7, 17, 23 → Sum = 51
        expect(Btree.Leafsum()).toBe(51);
    });

    test("Sum of leaf nodes with negative values", () => {
        const Btree = new leafsum();
        Btree.root = new Node(10);
        Btree.root.left = new Node(-5);
        Btree.root.right = new Node(3);
        Btree.root.left.left = new Node(-2);
        Btree.root.left.right = new Node(-8);
        Btree.root.right.left = new Node(1);
        Btree.root.right.right = new Node(-4);

        // Leaf nodes: -2, -8, 1, -4 → Sum = -13
        expect(Btree.Leafsum()).toBe(-13);
    });

});
