var $=require("jquery");
function colorify(selector,ys){
	$(selector).css("background-color",ys);
}

exports.init=function(){
	colorify("#cls","blue");
}