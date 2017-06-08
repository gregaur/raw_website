// 'use strict';

$(document).ready(function () {

		$(".scroll_down").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});


});