require(["dom" , "event" , "style" , "ajax"],function(dom , event , style , ajax) {
	function removeSuggestion(){
		var divs = dom.name("div");
		for(var i = 0 ; i < divs.length ; i++){
			document.body.removeChild(divs[i]);
		}
	}

	function suggestionHTML(keywords) {
		var innerHTML = "";
		for(var i = 0 ; i < keywords.length ; i++){
			innerHTML += (keywords[i] + "<br>");
		}
		return innerHTML;
	}
	function stickToInput(div) {
		var xy = style.offset(search);
		div.style.left = xy.x + "px";
		div.style.top = xy.y + search.offsetHeight + "px";
		div.style.width = search.offsetWidth + "px";
	}
	event.bind(window , "load" , function() {
		var search = dom.id("search");
		event.bind(search , "key" , function() {
			removeSuggestion();
			if(search.value === ""){
				return;
			}
			ajax.get("JSON-1.jsp?" + ajax.param({
				keyword : search.value
			}) , function(request){
				var keywords = JSON.parse(request.responseText);
				if(keywords.length !== 0){
					var div = document.createElement("div");
					div.innerHTML = suggestionHTML(keywords);
					stickToInput(div);
					document.body.appendChild(div);
				}
			});
		});
	});
});