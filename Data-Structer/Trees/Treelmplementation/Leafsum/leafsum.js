const Node = require('../Node');

class leafsumclass {
    constructor() {
        this.root = null;
    }

    // Method to calculate sum of leaf nodes
    Leafsum() {
        try {
            const sumLeaves = (node) => {
                if (!node) return 0; // empty node
                if (!node.left && !node.right) return node.value; // leaf node
                return sumLeaves(node.left) + sumLeaves(node.right);
            };
            return sumLeaves(this.root);
        } catch (error) {
            console.error("Error calculating leaf sum:", error);
            return 0;
        }
    }
}

module.exports = leafsumclass;
