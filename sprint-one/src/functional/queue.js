var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var pointer = 0;
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    length++;
    index++
 /*   if(pointer > 0){
      pointer--;
    }*/
  };

  someInstance.dequeue = function(){
    if(length > 0){
      length--;
      pointer++;
      return storage[pointer - 1];
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
