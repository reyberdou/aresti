$(window).load(function() {
	//orbit
	$('#slider').orbit({
		bullets: true
	});
});

$(document).ready(function(){
	//reveal
	$('#install_button').click(function(e) {
		e.preventDefault();
		$('#install_read_more').reveal({
			animation: 'fadeAndPop',
			animationspeed: 300,
			closeonbackgroundclick: true,
			dismissmodalclass: 'close-reveal-modal'
		});
	});
	//hover on product
	$(".product").mouseenter(
		function(e){
			e.preventDefault();
			$(this).find(".description").addClass("active-description");
	});
	$(".product").mouseleave(
		function(e){
			e.preventDefault();
			$(this).find(".description").removeClass("active-description");
	});
	
});
	