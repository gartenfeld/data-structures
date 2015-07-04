var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// a wrapper function for the hash function
HashTable.prototype.hash = function (k) {
  return getIndexBelowMaxForKey(k, this._limit);
};
  // since there are only a few slots/houses
  // we need to pack multiple items in each slot

HashTable.prototype.insert = function(k, v){
  var i = this.hash(k);

  //run retrieve
  //if we don't have the index...we do this...
  if (this._storage.get(i) === undefined) {
    house = [];
  } else {
    house = 
    //we add an array of values to that index
    //this.retrieve(k);
    [[key, value], [key, value]]
    var newValue = [this.retrieve(k), v]
    this.insert(k, newValue);
  }
    //if null add value
    //else rehash insert again
  //this._storage.set(i, v);
};

// a linear search function
HashTable.prototype.search = function (key, node) {
  // go through the linked list that lives at each slot
};

HashTable.prototype.retrieve = function(k){
  var i = this.hash(k);
  //for a given key k..
    //retrieve the value, which is an array...
      //
  var out = this._storage.get(i);
  return out === undefined ? null : out;
};

HashTable.prototype.remove = function(k){ // "Steven"
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function (value, key, collection) {
    if (i === key) {
      collection.splice(key, 1);
      console.log(value, key, collection);
      return;
    }
  });
};


  // limitedArray.each = function(callback){
  //   for(var i = 0; i < storage.length; i++){
  //     callback(storage[i], i, storage);
  //   }
  // };



/*
 * Complexity: What is the time complexity of the above functions?
 */
