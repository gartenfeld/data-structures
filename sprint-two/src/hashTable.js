var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// a wrapper function for the hash function
HashTable.prototype.hash = function (k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.append = function (node, appendage) {
    // if the vertex is terminal
    if (node.next === null) {
      node.next = appendage;
      return node;
    } else {
      return this.append(node.next, appendage);
    }
};

HashTable.prototype.insert = function(k, v){

  var i = this.hash(k);
  var newNode = new Vertex(k, v);
  var head;

  if (this._storage.get(i)===undefined) {
    this._storage.set(i, newNode);
  } else {
    head = this._storage.get(i);
    head = this.append(head, newNode);
    this._storage.set(i, head);
  }

};

HashTable.prototype.destroy = function (node, key) {
  // receive an object
  var last = node;
  // locate the target
  if (node.key === key) {
    last.next = node.next;
  } else {
    node = destroy(node.next, key);
  }

  return ;
};

HashTable.prototype.retrieve = function(k){
  var i = this.hash(k);
  //var node = this._storage.get(i);
  var findValue = function(node){
    if(node.key === k){
      return node.value;
    }
    else if(node.next !== null){
      return findValue(node.next)
    }
    else{
      return null;
    }
  }
  return findValue(this._storage.get(i));
/*  while (node.key !== k && node.next !== null) {
    node = node.next;
  }
  return node.key === k ? node.value : null;*/
};

HashTable.prototype.remove = function(k) {
  var i = this.hash(k);
  var head = this._storage.get(i);


};

var Vertex = function(key, value){
  var node = {};
  node.key = key;
  node.value = value;
  node.next = null;
  return node;
};


// Complexity: What is the time complexity of the above functions?
