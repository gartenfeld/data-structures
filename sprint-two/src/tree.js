var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	var foundTarget = false;
	var checkChildren = function(node){
		if (node.value === target) { 
			foundTarget = true; 
			return;
		} else {
			for (var i=0; i<node.children.length; i++) {
				checkChildren(node.children[i]);
			}
		}
	};
	checkChildren(this);
	return foundTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
