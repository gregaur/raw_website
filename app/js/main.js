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



$(window).bind("load", function() {


	$.preloadImages = function() {
		  for (var i = 0; i < arguments.length; i++) {
		    $("<img />").attr("src", arguments[i]);
		  }
		}

		$.preloadImages(
			"dist/images/intropaper_kaha.jpg",
			"dist/images/intropaper_br.jpg",
			"dist/images/intropaper_loaf.jpg",
			"dist/images/intropaper_yukfoo.jpg",
			"dist/images/project_kaha_1.jpg",
			"dist/images/project_kaha_2.jpg",
			"dist/images/project_kaha_3.png",
			"dist/images/project_kaha_4.png",
			"dist/images/project_kaha_5.png",
			"dist/images/project_kaha_6.png",
			"dist/images/project_kaha_7.jpg",
			"dist/images/project_loaf_1.jpg",
			"dist/images/project_loaf_2.jpg",
			"dist/images/project_loaf_3.jpg",
			"dist/images/project_loaf_4.jpg",
			"dist/images/project_yf_1.jpg",
			"dist/images/project_yf_2.jpg",
			"dist/images/project_yf_3.jpg",
			"dist/images/project_br_1.jpg",
			"dist/images/project_br_2.jpg");
});


		
	     
