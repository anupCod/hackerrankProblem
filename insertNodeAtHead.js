// inserting new node at head of linked list
class singlyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNewNodeAtHead(head, data) {
  const node = new singlyLinkedListNode(data);
  if (!head) {
    head = node;
  } else {
    node.next = head;
    head = node;
  }

  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtHead(llist.head, llistItem);
    llist.head = llist_head;
  }

  printSinglyLinkedList(llist.head, "\n", ws);
  ws.write("\n");

  ws.end();
}
