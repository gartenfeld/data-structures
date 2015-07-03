var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.idx = 0;
  list.storage = {};

  list.addToTail = function(value){
    // what should this method do?
      // make the previous tail point to the new tail
      // set the tail to the new tail
    var newNode = new Node(value);
    newNode['idx'] = this.idx;
    if(this.head === null){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.storage[this.idx] = newNode;
    this.idx++; 
  };

  list.removeHead = function(){
    // the next node should be become the new head
    // should remove the current head
    var previous = this.head;
    delete this.storage[this.head['idx']];
    this.head = this.head.next;
    return previous.value;
    //delete this.storage[]
  };

  list.contains = function(target){
    for (var key in this.storage) {
      //if idx: {value:value, next: next}
      if (this.storage[key]['value']===target) {
        return true;
      }     
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// Complexity: What is the time complexity of the above functions?
