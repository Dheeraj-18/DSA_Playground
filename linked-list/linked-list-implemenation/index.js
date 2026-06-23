function Node(val) {
  this.val = val
  this.next = null
}

function myLinkedList() {
  this.head = null
  this.size = 0
}

myLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1
  let curr = this.head
  for (let i = 0; i < index; i++) {
    curr = curr.next
  }
  return curr.val
}
myLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val)
  newNode.next = this.head
  this.head = newNode
  this.size++
}
myLinkedList.prototype.addAtTail = function (val) {}
myLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val)
  if (index < 0 || index > this.size) return
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  if (index === this.size) {
    this.addAtTail(val)
    return
  }
  let curr = this.head
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next
  }
  newNode.next = curr.next
  curr.next = newNode
  this.size++
}
myLinkedList.prototype.deleteAtIndex = function () {}

const list = new myLinkedList()

list.get(2)
