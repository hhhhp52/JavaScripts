function getId(idName){
	return document.getElementById(idName);
}

function proxy(idNamein , handler){
	return function(){
		handler.apply(idNamein , arguments);
	};
}

function doEvent(idNamein , eventName , handler){
	if(window.addEventListener){
		idNamein.addEventListener(eventName , handler , false);
	}
	else if(window.attachEvent){
		var hd = proxy(idNamein , handler);
		idNamein.attachEvent("on" + eventName ,function(){
			var windowEvent = window.event;
			var event = {
				currentTarget   : idNamein,
				target          : windowEvent.srcElement,
				stopPropagation : function(){
					windowEvent.cancelBubble = true;
				}
			};
			hd(event);
		});  
	}
}