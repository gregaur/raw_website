// 'use strict';

$(document).ready(function () {

	var $poly2 = new ProgressBar.Path('#poly-outer',),
	$poly1 = new ProgressBar.Path('#poly-inner',),
	$r1 = new ProgressBar.Path('#r-one',),
	$r2 = new ProgressBar.Path('#r-two',);



	$r1.animate(1,{duration:2000});  //outer r is drawn 0s - 2s
	$r2.animate(1,{duration:2000});  //inner r is drawn 0s - 2s
	$poly1.animate(1,{duration:3000});  //inner polygon is drawn 0s - 3s
	
	$blurinimage();  
	
	setTimeout(function(){
		$(".homeoverlay-container").addClass("blurry");  //blurred background image begins to fade in 3 - 5s
	},2000);


function $blurinimage(){
	$poly2.animate(1,{duration:3000},function(){  //outer polygon is drawn 0s - 3s
		$explode();  
	});
}

function $explode(){

	$(".polycontainer").addClass("explode"); // polygons expand and fade out whilst "R" fades out 3s - 4s
	$(".title-container").addClass("start-animate"); //Red "R" fades in and letters fall into place 3s - 7.5s
	$(".diagoverlay-container").addClass("start-animate");
}




// $thickpoly();








});