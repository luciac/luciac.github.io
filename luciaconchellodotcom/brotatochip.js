
$(".scrolling").scrollFlight();
$("#bodycontainer").scrollFlight();
$("#burger").scrollFlight();
$('#burger').scrollFlight();





$("#burger").click(
	function() {
		$("#sidenav").toggleClass("slidein");
		$("#burger").toggleClass("red");
		$("#greymodal").toggleClass("on");
		$("#bodycontainer").toggleClass("back");
		$("#sidenav").toggleClass("forward");
		$(".bar").toggleClass("close");
	});



window.onload = function() {
	$(".logoback").addClass("load");
	$(".logofront").addClass("load");
	$("#home").addClass("load");
}



