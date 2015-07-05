var BinarySearchTree = function(value){
    var tree = {};
    tree.value = value;
    tree.left = null;
    tree.right = null;
    _.extend(tree, binaryMethods);
    return tree;
};

var binaryMethods = {};

binaryMethods.insert = function (value) {
  //for each node ...
    //check value
      //if less than...
        // go left
      //else go right
  //until there is no left/decision


  var subTree = new BinarySearchTree(value);

    var check = function (node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = subTree;
        } else {
          check(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = subTree;
        } else {
          check(node.right);
        }
      }
    };

    check(this);

};

binaryMethods.contains = function (value) {
  var found = false;
  var check = function (node) {
    if (node.value === value) {
      found = true;
    } else if (value < node.value) {

      if (node.left) {
        check(node.left);
      }
    } else {
      if (node.right) {
        check(node.right);
      }
    }
  };
  check(this);
  return found;
};

binaryMethods.depthFirstLog = function (cb) {

  var process = function (node) {
  
    cb(node.value);

    if (node.left) {
      process(node.left);
    } else if (node.right) {
      process(node.right);
    } 

  };

  process(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */