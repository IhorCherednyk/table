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
	var flag = true;

	$(".toggle_mnu").click(function() {
		if(flag){
			$(".left-mnu").css("width", "200px");
			$(".users").toggle()
			$(".showlist").toggle()
			flag = false;
		}else{
			$(".left-mnu").css("width", "");
			$(".users").toggle()
			$(".showlist").toggle()
			flag = true;
		}
	});
	$(".btn-search").click(function(){
		console.log($(this).find("input"))
		$(this).siblings("input").toggle()
	})


});
