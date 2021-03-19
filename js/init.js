/*
 * Copyright (c) 2019 marketify
 * Author: marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	beny_tm_anchor();
	beny_tm_down();
	beny_tm_imgtosvg();
	beny_tm_data_images();
	beny_tm_animate_text();
	beny_tm_jarallax();
	beny_popup();
	beny_tm_projects();
	beny_tm_isotope();
	beny_tm_partners();
	beny_tm_contact_form();
	beny_tm_location();
	beny_tm_totop();
	beny_tm_nav_bg();
	beny_hero_effect();
	beny_tm_kenburn_slider();
	beny_tm_ripple();
	beny_tm_videoplayer();
	morocco_music();
	beny_tm_about_animation();
	
	
	jQuery(window).on('resize',function(){
		beny_tm_isotope();
	});
	
	jQuery(window).on('scroll',function(){
		
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.precargador-contenedor').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();
// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function beny_tm_anchor(){
	
	"use strict";
	
	jQuery('.beny_tm_first_menu .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-213
			}, 1000);
		}
		return false;
	});
	
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function beny_tm_down(){
	
	"use strict";
	
	jQuery('.portada-deslizar a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-225
			}, 1000);
		}
		return false;
	});
	jQuery('.portada-deslizar_second a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-220
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function beny_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function beny_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function beny_tm_animate_text(){
	
	"use strict";
	
	var animateSpan1			= jQuery('.texto-animacion');
	
		animateSpan1.typed({
			strings: ["Freelancer", "Web Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.texto-animacion'); //ACA TEXTO DE ANIMACIONES BORRAR "ES"
	
		animateSpan2.typed({
			strings: ["Desarrollo Web", "Diseño Web", "Front-End"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function beny_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function beny_popup(){
		"use strict";
	
		jQuery('.libro-certificado').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
	}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function beny_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});  //ESTO TAMBIEN BORRAR, PRIMERO FIJARSE SI FUNCIONA O ROMPE LA PAGINA
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function beny_tm_partners(){
	
	"use strict";
	
		var carousel1			= jQuery('.beny_tm_partners .owl-carousel');
		carousel1.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
		var carousel2			= jQuery('.beny_tm_portfolio_testimonial .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				items: 3,
				margin: 50,
				lazyLoad: true,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
						0:{items:1},
						480:{items:1},
						768:{items:2},
						1040:{items:3},
						1200:{items:3},
						1600:{items:3},
						1920:{items:3}
					}
		});
	
		var carousel4			= jQuery('.beny_tm_service_second .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 50,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:3},
					1600:{items:3},
					1920:{items:3}
				}
		});
		beny_tm_imgtosvg();
	}


// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    HERO EFFECT    --------------
// -----------------------------------------------------

function beny_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var WinScroll			= jQuery(window).scrollTop();
		var text				= jQuery(".beny_tm_third_hero .portada-texto");
		var currentScroll		= window.pageYOffset;
		text.css({'opacity' : (1 - (currentScroll/20) / 15)});
		
		if(WinScroll >= 400){
			text.addClass('changed');
		}else{
			text.removeClass('changed');
		}
	});
	
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function beny_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.portada-contenedor .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:2,

			slides: [
				{ src: 'img/slider/1.jpg'},
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/5.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function beny_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function beny_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}