/*
$(".menubotton").on("click",function(e){
	$("#topbar").css({'height': 130 + "px"}) ;
	})
*/

$(".menubotton").on("click",function(e){
	$("#topbar").toggleClass("open");
	});