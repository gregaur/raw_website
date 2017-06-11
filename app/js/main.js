// 'use strict';

$(document).ready(function () {

// 		$(".scroll_down").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#intro").offset().top
//     }, 1000);
// });

	$(".menu_icon").click(function(){
		$(".menu_overlay").toggleClass("hidden");
		if($(".menu_overlay").hasClass("hidden")){
			$(this).removeClass("close-icon");
		}else{
			$(this).addClass("close-icon");
		}
	});

	$(".menu_project_heading a,.menu_title").click(function(){
		$(".menu_overlay").addClass("hidden");
		$(".menu_icon").removeClass("close-icon");
	});



});