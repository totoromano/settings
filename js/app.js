$(document).foundation();
$(".side-bar ul li").click(function(event){
	$("li.current").removeClass("current");
	$(this).addClass("current");
});

$(".layout").click(function(event){
	$(".layout.current").removeClass("current");
	$(this).addClass("current");
});