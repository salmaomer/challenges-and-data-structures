class rotatelinkedlist {
    constructor(linkedList) {
        this.linkedList = linkedList;
    }

    rotate(k) {
        let head = this.linkedList.head;
        if (!head || k === 0) return;

        // Step 1: Get length
        let length = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }

        // Step 2: Normalize k
        k = k % length;
        if (k < 0) {
            k = length + k; // Rotate right = rotate left by length + k
        }
        if (k === 0) return;

        // Step 3: Find new head
        let current = head;
        for (let i = 1; i < k; i++) {
            current = current.next;
        }

        const newHead = current.next;
        current.next = null;
        tail.next = head;
        this.linkedList.head = newHead;
    }


    printList() {
        this.linkedList.printList();
    }
}

module.exports = rotatelinkedlist;

module.exports = rotatelinkedlist;
