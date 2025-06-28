const LinkedList = require('../linklist');


class mergeSorted {
    constructor(list1, list2) {
        this.list1 = list1;
        this.list2 = list2;
        this.mergedList = new LinkedList();  
    }

    merge() {
        try {
            let current1 = this.list1.head;
            let current2 = this.list2.head;
            let tail = null;

            const appendNode = (node) => {
                if (!this.mergedList.head) {
                    this.mergedList.head = node;
                } else {
                    tail.next = node;
                }
                tail = node;
            };

            while (current1 && current2) {
                if (current1.data <= current2.data) {
                    const next = current1.next;
                    current1.next = null;
                    appendNode(current1);
                    current1 = next;
                } else {
                    const next = current2.next;
                    current2.next = null;
                    appendNode(current2);
                    current2 = next;
                }
            }

            let remaining = current1 || current2;
            while (remaining) {
                const next = remaining.next;
                remaining.next = null;
                appendNode(remaining);
                remaining = next;
            }
        } catch (error) {
            console.error("An error occurred while merging:", error);
        }

        return this.mergedList;
    }

    printMergedList() {
        this.mergedList.printList(); 
    }
}

module.exports = mergeSorted;
