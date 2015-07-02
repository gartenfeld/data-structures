var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.storage = {};
  newQueue.pointer = 0;
  newQueue.idx = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
	return this.length;
};
queueMethods.enqueue = function (value) {
	this.storage[this.idx] = value;
	this.length++;
	this.idx++;
};
queueMethods.dequeue = function () {
	if(this.length > 0){
		this.length--;
		this.pointer++;
		return this.storage[this.pointer -1];
	}
};


