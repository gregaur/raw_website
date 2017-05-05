$(document).ready(function() {
	
var $screenslider = $('#screen-slider');
	
$slidestructure();
$slidetileimages();
$searchbutton();
setTimeout(nowshowing, 1000);
$tabfunction();
 	



function nowshowing(){
  $(".now-showing").removeClass("hidden");
}



 function $slidestructure(){
	 



	$(".go-to-1").click(function(){
		$screenheightone = $("#screen-1").height();
		$scrolltotop();
		$(".yellow-button").removeClass("deactivate");
		$screenslider.height($screenheightone + "px");
 		$screenslider.removeClass().addClass("one");
 		$(".top-homecontainer,.logo").css("display","block");
 		$(".back-to-category").css("display","none");
 		$(".search-button").removeClass("active");
 		$("#screen-1 section").removeClass("active");
 		
	});
    
	$(".go-to-2").click(function(){
		$goto2();
	});
	
	$(".star-container,.image-container .title").click(function(e){
		$goto2();
 		return false;
	});
	

	
	$(".go-to-3").click(function(){
		$scrolltotop();
		$(".yellow-button").addClass("deactivate");
		$screenslider.height($("#screen-3").height() + "px");
 		$screenslider.removeClass().addClass("three");
 		$(".top-homecontainer,.logo").css("display","block");
 		$(".back-to-category").css("display","none");
 		$(".search-button").removeClass("active");
 		
	});
	
	
		function $goto2(){
			$scrolltotop();
			$(".yellow-button").removeClass("deactivate");
			$screenslider.height($("#screen-2").height() + "px");
	 		$screenslider.removeClass().addClass("two");
	 		$(".top-homecontainer,.logo").css("display","none");
	 		$(".back-to-category").css("display","inline-block");
	 		$(".search-button").removeClass("active");
	 		
		}
	
	
	function $scrolltotop(){
		$('.screen-container').scrollTop(0);
	}
	
 }
 	
 	
 function $slidetileimages(){
	 $("#screen-1 .image-container").click(function(e){		
		 
		 if($(this).parent().hasClass("active")){
			 $("#screen-1 section").removeClass();	
			 $(".now-showing").removeClass("hidden");
		 }else{
			$("#screen-1 section").removeClass();	
			 $(this).parent().addClass("active");	
			 $(".now-showing").addClass("hidden");
		 }
		 return false;
	 });	 
	 
 }
 
 function $searchbutton(){
	 $(".search-button").click(function(e){
		 if($(this).hasClass("active")){
			 $(this).removeClass("active"); 
		 }else{
			$(this).addClass("active"); 
		 }
		 return false;
	 });
 }
 
 
 function $tabfunction(){
		 $("#screen-2 .tab-link").click(function(e){
		 
		 var $thistab = $(this);
		 
		 
		 if($("#screen-2 .tab-link").hasClass("active")){		 
			 if($thistab.hasClass("active")){
				 $thistab.removeClass("active");
				 $("#screen-2 .tab-title").removeClass("push-right");			 
				 $("#screen-2 .tab-content").removeClass("active");			 
			 }else{
				 $("#screen-2 .tab-link").removeClass("active");
				$thistab.addClass("active"); 			
				$("#screen-2 .tab-content").removeClass("active");			
				$pickingcontent();
				$screenslider.height($("#screen-2").height() + "px");
			 }		
		 }else{
			 $("#screen-2 .tab-link").removeClass("active");
			 $thistab.addClass("active");		 
			 $("#screen-2 .tab-title").addClass("push-right");		 
			 $pickingcontent();
		 }	 
		 return false;
		 
		 
		 function $pickingcontent(){
			if($thistab.is("#review-link")){			
				 $("#review-content").addClass("active");			 
			 }else if($thistab.is("#contact-link")){			 
	 			 $("#contact-content").addClass("active");	 
			 }else if($thistab.is("#upload-link")){
	 			 $("#upload-content").addClass("active"); 			 
			 }else if($thistab.is("#send-link")){			 
	 			 $("#send-content").addClass("active");			 
			 }else if($thistab.is("#bookmark-link")){			 
	 			 $("#bookmark-content").addClass("active");
			 } 
		}
	 });

 }
 
  

  
});

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);




/*
$('#sgninBtn').on('vmousedown touchstart', function (e) {
  if (e.type == 'touchstart') {
    $(this).addClass('loginbuttonpressed');
  } else {
    $(this).addClass('loginbuttonclick');
  }
  return false;
});
*/





