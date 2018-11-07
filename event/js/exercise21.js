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

function style(obj , prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,null)[prop];
	}else if(obj.currentStyle){
		return obj.currentStyle[prop];
	}else{
		return null;
	}
}

function show(element){
	if(style(element,"display") === "none"){
		var elem = document.createElement(element.nodeName);
		document.body.appendChild(elem);
		var display = style(elem,"display");
		document.body.removeChild(elem);
		element.style.display = display;
	}
}

function hide(element){
	element.style.display ="none";
}

/*
unction show(element){
    if(style(element,'display') === 'none'){
         element.style.display = element.previousDisplay;
     }
 }

 function hide(element){
    element.previousDisplay = style(element,'display')
    element.style.dispaly = 'none'
 } 
 */
