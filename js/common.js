$(function() {

	$(".toggle_mnu").click(function() {
		if ($(".sandwich").hasClass("active")) {
			$(".main-mnu ul").stop().fadeOut(600);
			$(".sandwich").toggleClass("active");
		} else {
			$(".main-mnu ul").stop().fadeIn(600);
			$(".sandwich").toggleClass("active");
		};
	});

});
