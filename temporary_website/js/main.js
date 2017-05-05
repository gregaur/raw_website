$(document).ready(function() {
    
	$(".about").click(function(){
		removeClasses();
		$("#content").addClass("menu-active");
		$("#menu").addClass("about-active");
	});   
	
	
	$(".process").click(function(){
		removeClasses();
		$("#content").addClass("menu-active");
		$("#menu").addClass("process-active");
	});    
	
	
	$(".work").click(function(){
		removeClasses();
		$("#content").addClass("menu-active");
		$("#menu").addClass("work-active");
	});    
	
	
	$(".contact").click(function(){
		removeClasses();
		$("#content").addClass("menu-active");
		$("#menu").addClass("contact-active");
	});    
	
	$(".menu-initialise").click(function(){
		removeClasses();
		$("#content").removeClass("menu-active");
		
	});   
	
	$(".logo").click(function(){
// 		removeClasses();

		setTimeout(function(){ 
			$("#content").removeClass("menu-active");
			}, 1000);
		
		
	});   

    



function removeClasses(){
	$("#menu").removeClass("contact-active work-active process-active about-active")	
}



	





$(".logo").click(function(){
	$(".intro-section").fadeIn("2000", function(){
		$(this).css({display:"block"});
		removeClasses();
	})
});





var myEfficientFn = debounce(function() {
	
	
	$("#content").scrollTop($(".menu-wrapper").height());
	
	
	
}, 250);

window.addEventListener('resize', myEfficientFn);



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
    
    
});







