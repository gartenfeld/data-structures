var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var tail = new Node(value);
    if(this.head){
      if (this.head === this.tail) {
        this.head.next = this.tail;
      }
      this.tail.next = tail;
    } else {
      this.head = tail;

    }
    this.tail = tail;
  };

  list.removeHead = function(){
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  };

  list.removeNode = function(node){
    this.destroy(this.head, node, this.head);
  };

  list.destroy = function(start, target, last) {
    if (start === target) {
      // if the head is to be removed
      if (start === last) {
        // clear its value
        start.value = null;
      } else {
        // otherwise close the chain
        last.next = start.next;
      }
    } else if (start.next) {
      this.destroy(start.next, target, start);
    }
  };

  list.search = function(node, target){
    if (node.value === target) {
      return true;
    } else if (node.next) {
      return this.search(node.next, target);
    } else {
      return false;
    }
  };

  list.fetch = function(key){
    if (this.head) {
      return this.find(this.head, key);      
    }
    return null;
  };

  list.find = function(start, key){
    if (start.value !== null && start.value[0] === key) {
      return start;
    } else if (start.next) {
      return this.find(start.next, key);
    }
  };

  list.contains = function(target){
    return this.search(this.head, target);
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
