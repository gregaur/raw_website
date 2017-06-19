// 'use strict';

$(document).ready(function () {

	//homepage animation

	setTimeout(function() {
        $(".opening-image,.backing_strips,.main-title,.main-sub-title").addClass("loaded");
    },1000);




	//menu toggling

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




	//screen transitions

	var $kahalink = $(".kaha .project,.kaha .prev_textblock, .menu_projects a.kaha");
	var $yukfoolink = $(".yukfoo .project,.yukfoo .prev_textblock, .menu_projects a.yukfoo");
	var $brlink = $(".br .project,.br .prev_textblock, .menu_projects a.br");
	var $loaflink = $(".loaf .project,.loaf .prev_textblock, .menu_projects a.loaf");
	var $homelink = $(".home_logo");


	$kahalink.click(function(){
		event.preventDefault();
		var delay = 1000; 
		var href = $(this).attr('href');
		setTimeout(function(){ window.location = href}, delay);
		$(".blue-slide").addClass("inview");
	});

	$yukfoolink.click(function(){
		event.preventDefault();
		var delay = 1000; 
		var href = $(this).attr('href');
		setTimeout(function(){ window.location = href}, delay);
		$(".red-slide").addClass("inview");
	});

	$brlink.click(function(){
		event.preventDefault();
		var delay = 1000; 
		var href = $(this).attr('href');
		setTimeout(function(){ window.location = href}, delay);
		$(".purple-slide").addClass("inview");
	});

	$loaflink.click(function(){
		event.preventDefault();
		var delay = 1000; 
		var href = $(this).attr('href');
		setTimeout(function(){ window.location = href}, delay);
		$(".black-slide").addClass("inview");
	});


	$homelink.click(function(){
		event.preventDefault();
		var delay = 1000; 
		var href = $(this).attr('href');
		setTimeout(function(){ window.location = href}, delay);
		$(".plainblack-slide").addClass("inview");
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


//project screen transitioning

$(".projectpage_title,.left_panel,.right_panel").addClass("loaded");

setTimeout(function() {
        $(".background-blur_container").addClass("loaded");
    },1500);



//pre-loading images





		



