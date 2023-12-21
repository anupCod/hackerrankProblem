class singlyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    const node = new singlyLinkedListNode(data);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

function printLinkedList(head) {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

const linkedList = new singlyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);

printLinkedList(linkedList.head);
