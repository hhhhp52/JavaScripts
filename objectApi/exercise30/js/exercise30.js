function ImmutableList(){
	arguments.forEach = Array.prototype.forEach;
    
	var lt = this;

	arguments.forEach(function(elem,idx){
		Object.defineProperty(lt,idx,{
			value : elem
		});
	});
    
	Object.defineProperty(lt,"length",{
		value : arguments.length
	});

	Object.preventExtensions(this);
	
}

var lt = new ImmutableList(1,2,3);

for(var i = 0 ; i < lt.length ; i++){
	console.log(lt[i]);
}