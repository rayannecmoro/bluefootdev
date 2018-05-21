var site = site || {};
var offset = $(document).scrollTop();

(function($){
    // USE STRICT
    "use strict";

    site = {

    	init:function(){
        site.menu();
	    },
      menu:function(){

        $('.btn-menu').click(function(event) {
          // $('#car').hide();
          $('#menu').toggle();
        });
        $('#car.sub-menu').css({
          display: 'none'
        });
        $('.btn-car').click(function(event) {
          $('#car.sub-menu').toggle();
        });
        $('#menu .sub .sub-menu').css({
          display: 'none'
        });
        $('#menu .sub span').click(function(event) {
          $('#menu .sub .sub-menu').toggle();
        });

      },

    };

    var $window = $(window),
        $body = $('body'),
        $header = $('header');

    $(document).ready( site.init() );

    $(window).scroll(function(){
  		var offset = $(document).scrollTop();
    	// site.padrao(offset);
    });
	
})(jQuery);



