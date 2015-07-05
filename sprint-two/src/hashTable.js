var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// a wrapper function for the hash function
HashTable.prototype.hash = function (k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.initialize = function (i) {
  this._storage.set(i, this._storage.get(i) || new LinkedList());
};

HashTable.prototype.insert = function(k, v){

  var i = this.hash(k);
  this.initialize(i);
  var found = false,
      tuple = [k, v],
      house = this._storage.get(i);

  // if key already exists in LinkedList

  found = house.fetch(k);
  if (found) {
    found.value = tuple; // update
  } else {
    house.addToTail(tuple); // add
  }

};

HashTable.prototype.retrieve = function(k){
  var i = this.hash(k);
  var found = false,
      house = this._storage.get(i);
  found = house.fetch(k);
  if (found) {
    return found.value[1];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k) {
  var i = this.hash(k);
  var house = this._storage.get(i);
  var removed = house.fetch(k);
  console.log(removed);
  house.removeNode(removed);
};



// Complexity: What is the time complexity of the above functions?
