function ImmutableList(array) {

	var elems = array instanceof Array ? array : arguments;

	if (!(elems instanceof Array)) {
		elems.forEach = Array.prototype.forEach;
	}

	var lt = this;

	elems.forEach(function (elem, idx) {
		Object.defineProperty(lt, idx, {
			value: elem
		});
	});

	Object.defineProperty(lt, "length", {
		value: elems.length
	});

	Object.preventExtensions(lt);

}

ImmutableList.fromArray = function (array) {
	return new ImmutableList(array);
};

ImmutableList.prototype.toArray = function(){
	var lt = this;
	function arrayFrom(i){
		if(i === lt.length){
			return [];
		}
		return [lt[i]].concat(arrayFrom(i + 1));
	}
	return arrayFrom[0];
	/*
    var arr =[];
	for(var i = 0 ; i < this.length ; i++){
		arr.push(this[i]);
	}
    return arr;
    */
};

ImmutableList.prototype.filter = function(predict){
	function filter(array){
		if(array.length === 0){
			return [];
		}
        
		var head = array[0];
		var tail= array.slice(1);

		if(predict(head)){
			return [head].concat(filter(tail));
		}else{
			return filter();
		}
	}
	return ImmutableList.fromArray(filter(this.toArray()));
};

ImmutableList.prototype.map = function(mapper){
	function map(array){
		if(array.length === 0){
			return [];
		}
		var head = array[0];
		var tail= array.slice(1);
		[mapper(head)].concat(map(tail));
	}
	return ImmutableList.fromArray(map(this.toArray()));
};

ImmutableList.prototype.forEach = function(action){
	function forEach(array){
		if(array.length === 0){
			return [];
		}
		var head = array[0];
		var tail= array.slice(1);
		action(head);
		forEach(tail);
	}
	forEach(this.toArray);
};


var lt3 = new ImmutableList(10,8,6,4,2);
var lt4 = lt3.filter(elem => elem > 6);
var lt5 = lt3.filter(elem => elem > 6).map(elem => elem * 100).forEach();
//var lt6 = lt2.filter(elem => elem > 6).map(elem => elem * 100).map;
console.log("*******************************");
console.log(lt4.toArray());
console.log("*******************************");
console.log(lt5.toArray());
console.log("*******************************");




function forEachLog(lt) {
	for (var i = 0; i < lt.length ; i++) {
		console.log(lt[i]);
	}
}

var lt = new ImmutableList(1, 2, 3);
console.log("*******************************");
forEachLog(lt);
console.log("*******************************");
console.log(lt.toArray);
console.log("*******************************");

var lt2 = ImmutableList.fromArray([5, 4, 3, 2, 1]);
forEachLog(lt2);
console.log("*******************************");