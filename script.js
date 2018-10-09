var drag = false;

$(".inputRange").each(function(i,el){
var d = $(el).find(".text");
	var step = (100/d.length);
    $(d).css({"width":step+"%"});
  	$(this).find(".bar").before(a);
    for(var j = 0; j < d.length;j++){
    	if(j== d.length-1)j++;
     var a =  $("<div class='sep'></div>");
      $(a).css({"left":j*step+"%"});
      $(this).find(".bar").append(a);
    }
});

$(".inputRange").bind("click",function(e){changeCur(e,this)});
$(document).bind("mousemove",function(e){changeCur(e,drag);});
function changeCur(e,drag){
	if(!drag)
    return;
var val = (e.clientX - $(drag).offset().left)/$(drag).outerWidth() * 100;
var step = 100/$(drag).find(".text").length;
		if(val >= 100-step*2){
    	if(val <=100-step)
      	val = 100 -step*2;
        else
        val = 100;
    }
    else
		val = Math.round(val/step)*step;
    
    if(val < 0) val = 0;
    if(val == 100 - step || val > 100) val = 100;
   $(drag).find(".pointer").css({left:val+"%"});
   $(drag).find(".pointer").css({left:"-="+$(drag).find(".pointer").innerWidth()/2+"px"});
   
   $(drag).find(".bar .dis").css({left:val+"%"});
		
}
$(".pointer").bind("mousedown",function(){
	drag = $(this).parent();
});

$(document).bind("mouseup",function(){
	drag = false;
});

//Menu
var iconHambur = document.getElementById('hamburger');
var navHambur = document.getElementById('nav-hamb');

iconHambur.addEventListener('click', funcShow); 

function funcShow() {
	navHambur.classList.toggle('hamburger-open');
	iconHambur.classList.toggle('is-active');
}