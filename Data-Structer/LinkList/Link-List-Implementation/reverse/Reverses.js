class Reverses {
    constructor(linkedList) {
        this.linkedList = linkedList;
    }

    reverse() {
        const head = this.linkedList.head;

        
        if (!head) {
            console.log("List is empty. Nothing to reverse.");
            return;
        }

        
        if (!head.next) {
            console.log("Only one node in the list. No need to reverse.");
            return;
        }

        
        let prev = null;
        let current = head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.linkedList.head = prev;
    }

    printList() {
        this.linkedList.printList();
    }
}

module.exports = Reverses;
