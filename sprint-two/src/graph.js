

var Graph = function(){
	this.nodes = [];
	//this.nodes = {}
};

Graph.prototype.addNode = function(node){
	var newNode = new Vertex(node);
	this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
	for(var i=0; i < this.nodes.length; i++){
		if(this.nodes[i].value === node){
			return true;
		}
	}
	return false;
};

/*_.each(this.nodes, function(currentNode, i){
	if(currentNode.value === node)
})*/

Graph.prototype.removeNode = function(node){
	for(var i = 0; i < this.nodes.length ; i++){
		if(this.nodes[i].value === node){
			this.nodes.splice(i, 1);
		}
		//for later -> delete all references to the deleted node
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i=0; i<this.nodes.length; i++){
		if(this.nodes[i].value === fromNode){
			return _.contains(this.nodes[i].neighbors, toNode);
		}
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var from, to;
	for(var i = 0; i<this.nodes.length; i++){
		if(this.nodes[i].value===fromNode){
			from = i;
		}
		if(this.nodes[i].value===toNode){
			to = i;
		}
	}
	this.nodes[from].neighbors.push(this.nodes[to].value);
	this.nodes[to].neighbors.push(this.nodes[from].value);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	//implement this method

};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(item){
		cb(item.value);
	});
};

var Vertex = function(value){
	this.neighbors = [];
	this.value = value;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */