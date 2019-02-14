$(document).ready(function(){
/*  Header Slider  */
  $('.active_slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		dots:true,
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
	}
  });

    $('.active_test').owlCarousel({
		loop:true,
		margin:0,
		/* autoplay:true,
		autoplayTimeout:5000, */
		dots:true,
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
	}
  });
  
  $('.main_menu').slicknav({
		
});
   new WOW().init();
});

  
