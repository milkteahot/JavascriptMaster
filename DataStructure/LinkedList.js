class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value){
      const newNode = new LinkedListNode(value);

      if(!this.head){
          this.head = newNode;
          this.tail = newNode;

          return this;
      }

      this.tail.next = newNode;
      this.tail = newNode;

      return this;
  }
}

var result = new LinkedList();
result.prepend(3);
result.append(5);
result.append(7);


console.log(result.head.value, result.head.next.value);
console.log(result.tail.value, result.tail.next);
