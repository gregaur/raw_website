// 'use strict';

$(document).ready(function () {

// 		$(".scroll_down").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#intro").offset().top
//     }, 1000);
// });

	$(".menu_icon").click(function(){
		$(".menu_overlay").toggleClass("hidden");
	});

	$(".menu_project_heading,.menu_title").click(function(){
		$(".menu_overlay").addClass("hidden");
	});



});