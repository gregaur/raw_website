// 'use strict';

$(document).ready(function () {

	setTimeout(function() {
        $("section.opening,.backing_strips,.main-title,.main-sub-title").addClass("loaded");


    },1000);




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



	//----------------------------------------DEBOUNCE FUNCTION

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
	}, 250);

	window.addEventListener('resize', myEfficientFn);


	//----------------------------------------RESIZE AND AT THE END FIRE AN ACTION

	var resizeTimer;

	$(window).on('resize', function(e) {


	  clearTimeout(resizeTimer);
	  resizeTimer = setTimeout(function() {

	    // Run code here, resizing has "stopped"
	            
	  }, 250);

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


		



