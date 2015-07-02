var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.pointer = 0;
  this.idx = 0;
  this.storage = {};
};

Queue.prototype.size = function () {
	return this.length;
};

Queue.prototype.enqueue = function (value) {
	this.storage[this.idx] = value;
	this.length++;
	this.idx++;
};

Queue.prototype.dequeue = function () {
	if(this.length > 0){
		this.length--;
		this.pointer++;
		return this.storage[this.pointer - 1];
	}
}


