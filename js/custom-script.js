// Hide Header on on scroll down
if($('.main-header').length){
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.main-header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.main-header').removeClass('header-down').addClass('header-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.main-header').removeClass('header-up').addClass('header-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}
}
	

(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(500).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	
	//Update Scroll to Top (Navbar is static at top)
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				scrollLink.fadeIn(300);
			} else {
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	// Initialize Floating WhatsApp Concierge Button if not present
	if (!$('.floating-whatsapp').length) {
		var waHtml = '<a href="https://wa.me/919810123456?text=Greetings%20Zaffran%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation." class="floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat with Zaffran Concierge on WhatsApp" title="Chat with Zaffran Concierge on WhatsApp">' +
			'<i class="fa-brands fa-whatsapp"></i>' +
			'<span class="whatsapp-tooltip">Chat with Concierge</span>' +
		'</a>';
		$('body').append(waHtml);
	}


	//Search Toggle
	if ($('.search-box').length) {
		$('.search-toggle').on('click', function () {
			$('body').toggleClass('visible-search');
		});
		$('.s-close-btn,.search-backdrop').on('click', function () {
			$('body').removeClass('visible-search');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('body').removeClass('visible-search');
	        }
	    });
	}

	//Info Sidebar Toggle
	if($('.main-header .info-toggler .info-btn').length){
		//Show Form
		$('.main-header .info-toggler .info-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('side-content-visible');
		});
		//Hide Form
		$('.info-bar .inner-box .cross-icon,.info-back-drop,.close-menu').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('side-content-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('body').removeClass('side-content-visible');
	        }
	    });
	}
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('li.dropdown > a').append(function () {
			return '<button type="button" class="btn-expander"><i class="far fa-angle-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();

		$(".hidden-bar .side-menu ul li.dropdown .btn-expander").on('click', function(e) {
			e.preventDefault();
			$(this).parent('a').parent('li').children('ul').slideToggle();
			// toggling arrow of expander
			$(this).find('i').toggleClass('fa-angle-right fa-angle-down');
			return false;
		});
	}

	hiddenBarMenuConfig();


	//Custom Scroll for Hidden Sidebar
	if ($('.hidden-bar').length) {
		
		$('.hidden-bar-closer,.menu-backdrop').on('click', function () {
			$('.hidden-bar,body').removeClass('visible-sidebar');
			$('.side-menu ul li.dropdown ul').slideUp();
			$('.side-menu ul li.dropdown > a i').removeClass('fa-angle-right').addClass('fa-angle-down');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('.hidden-bar,body').removeClass('visible-sidebar');
	            $('.side-menu ul li.dropdown ul').slideUp();
					$('.side-menu ul li.dropdown > a i').removeClass('fa-angle-right').addClass('fa-angle-down');
	        }
	    });
		$('.hidden-bar-opener').on('click', function () {
			$('.hidden-bar,body').addClass('visible-sidebar');
		});
	}

	//Banner Carousel
	if ($('.banner-slider').length) {
		var swiper = new Swiper('.banner-slider', {
			autoplay: true,
			autoplaySpeed: 7000,
			effect: "fade",
			speed: 1000,		
			margin: 0,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
	        delay: 7000
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      }
		});
	}
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	


	//Dish Gallery Carousel
	if ($('.dish-gallery-slider').length) {
		$('.dish-gallery-slider').owlCarousel({
			loop:true,
			margin:45,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout:7000,
			center: true,
			dots: true,  // Enable dots
    		nav: false, 
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1,
					margin:30
				},
				992:{
					items:1,
					margin:30
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	//Testimonials Carousel
	if ($('.testimonial-slider').length) {
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout:7000,
			navText: [ '<span class="icon fa-light fa-angle-left"></span>', '<span class="icon fa-light fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2,
					margin:30
				},
				992:{
					items:2,
					margin:30
				},
				1200:{
					items:3
				}
			}
		});    		
	}

	//Gallery Carousel
	if ($('.image-gallery-slider').length) {
		$('.image-gallery-slider').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="icon fa-light fa-angle-left"></span>', '<span class="icon fa-light fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:1
				},
				992:{
					items:1
				}
			}
		});    		
	}

	// Testimonials Carousel
	if ($('.testimonials-section .testi-top').length && $('.testimonials-section .testi-thumbs').length) {

		var $sync1 = $(".testimonials-section .testi-top"),
			$sync2 = $(".testimonials-section .testi-thumbs"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 30,
					nav: true,
					navText: [ '<span class="prev-btn far fa-angle-left"></span>', '<span class="next-btn far fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:true,
					margin: 0,
					items: 1,
					nav: false,
					navText: [ '<span class="icon far fa-angle-left"></span>', '<span class="icon far fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					centered: true,
					autoplayTimeout: 5000
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	}

	//Date Picker
	if($('.datepicker').length){
		$( ".datepicker" ).datepicker({
			dateFormat: 'dd-mm-yy',
			minDate: 0
		});
	}

	// Luxury Table Reservation Modal Handler
	function showReservationModal(data) {
		var existingModal = $('#zaffran-reservation-modal');
		if(!existingModal.length) {
			var modalHtml = '<div class="zaffran-modal-backdrop" id="zaffran-reservation-modal" role="dialog" aria-modal="true" aria-labelledby="zaffran-modal-title">' +
				'<div class="zaffran-modal-card">' +
					'<button type="button" class="zaffran-modal-close" aria-label="Close dialog">&times;</button>' +
					'<div class="zaffran-modal-icon"><i class="far fa-utensils"></i></div>' +
					'<h3 class="zaffran-modal-title" id="zaffran-modal-title">Table Reservation Received</h3>' +
					'<div class="zaffran-modal-subtitle">Zaffran Fine Dining & Lounge</div>' +
					'<div class="zaffran-modal-summary">' +
						'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Guest Name:</span><span class="zaffran-summary-val" id="z-modal-name">-</span></div>' +
						'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Party Size:</span><span class="zaffran-summary-val" id="z-modal-party">-</span></div>' +
						'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Date & Time:</span><span class="zaffran-summary-val" id="z-modal-datetime">-</span></div>' +
						'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Contact Phone:</span><span class="zaffran-summary-val" id="z-modal-phone">-</span></div>' +
					'</div>' +
					'<p class="zaffran-modal-text">Thank you! Your table request has been registered with our Maitre d\'. Our reservations team will contact you via Call or SMS shortly to confirm table placement.</p>' +
					'<div class="zaffran-modal-actions">' +
						'<a href="#" target="_blank" rel="noopener noreferrer" class="zaffran-btn-wa" id="z-modal-wa-btn"><i class="fab fa-whatsapp"></i> Instant WhatsApp Concierge</a>' +
						'<button type="button" class="theme-btn btn-style-one zaffran-modal-btn-close"><span class="btn-wrap"><span class="text-one">Close</span><span class="text-two">Close</span></span></button>' +
					'</div>' +
					'<div class="zaffran-demo-disclaimer">Portfolio Demonstration: This frontend interaction simulates table booking. In production, this integrates with Zaffran\'s live reservation management system.</div>' +
				'</div>' +
			'</div>';
			$('body').append(modalHtml);
			existingModal = $('#zaffran-reservation-modal');

			existingModal.on('click', '.zaffran-modal-close, .zaffran-modal-btn-close', function() {
				existingModal.removeClass('is-active');
			});
			existingModal.on('click', function(e) {
				if($(e.target).is('.zaffran-modal-backdrop')) {
					existingModal.removeClass('is-active');
				}
			});
			$(document).on('keydown', function(e) {
				if(e.keyCode === 27 && existingModal.hasClass('is-active')) {
					existingModal.removeClass('is-active');
				}
			});
		}

		$('#z-modal-name').text(data.name);
		$('#z-modal-party').text(data.party);
		$('#z-modal-datetime').text(data.date + ' at ' + data.time);
		$('#z-modal-phone').text(data.phone);

		var waMsg = encodeURIComponent('Hello Zaffran, I have submitted a table reservation for ' + data.name + ' (' + data.party + ') on ' + data.date + ' at ' + data.time + '. Please confirm.');
		$('#z-modal-wa-btn').attr('href', 'https://wa.me/919810123456?text=' + waMsg);

		existingModal.addClass('is-active');
	}

	$(document).on('submit', '.reservation-form form', function(e) {
		e.preventDefault();
		var $form = $(this);
		// Check if this is the contact form on contact-us page
		if ($form.closest('.loc-block').length) {
			// Handled by contact-us page inline handler
			return;
		}
		var name = $form.find('input[name="fullName"]').val() || $form.find('input[name="fieldname"]').first().val() || 'Guest';
		var phone = $form.find('input[name="phoneNumber"], input[type="tel"]').val() || $form.find('input[name="fieldname"]').eq(1).val() || '';
		var party = $form.find('select[name="guestCount"]').val() || $form.find('select').first().val() || '2 Person';
		var date = $form.find('input.datepicker').val() || 'Selected Date';
		var time = $form.find('select[name="bookingTime"]').val() || $form.find('select').eq(1).val() || '07 : 00 pm';

		showReservationModal({
			name: name,
			phone: phone,
			party: party,
			date: date,
			time: time
		});

		$form[0].reset();
	});

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).next('.acc-content').is(':visible')){
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			}else{
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				$(this).next('.acc-content').slideDown(300);
				$(this).parent('.accordion').addClass('active-block');
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			thumbs : {
				autoStart : true
			},
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {
				  youtube : {
				    params : {
				      autoplay : 1
				    }
				  }
				}
			}
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// Zaffran Datepicker Initialization
	if($('.datepicker').length && $.fn.datepicker){
		$('.datepicker').datepicker({
			dateFormat: 'dd-mm-yy',
			minDate: 0,
			showAnim: 'fadeIn'
		});
	}

	// Modal Builder Helper
	function showZaffranModal(options) {
		var $modal = $('#zaffranGlobalModal');
		if (!$modal.length) {
			var modalHtml = '<div class="zaffran-modal-backdrop" id="zaffranGlobalModal" role="dialog" aria-modal="true" aria-labelledby="zaffranModalTitle">' +
				'<div class="zaffran-modal-card">' +
					'<button type="button" class="zaffran-modal-close" aria-label="Close dialog">&times;</button>' +
					'<div class="zaffran-modal-icon"><i class="far fa-utensils-alt"></i></div>' +
					'<h3 class="zaffran-modal-title" id="zaffranModalTitle"></h3>' +
					'<div class="zaffran-modal-subtitle" id="zaffranModalSubtitle"></div>' +
					'<div class="zaffran-modal-summary" id="zaffranModalSummary"></div>' +
					'<p class="zaffran-modal-text" id="zaffranModalText"></p>' +
					'<div class="zaffran-modal-actions">' +
						'<a href="#" class="zaffran-btn-wa" id="zaffranModalWaBtn" target="_blank" rel="noopener noreferrer">' +
							'<i class="fab fa-whatsapp"></i> Confirm with Concierge on WhatsApp' +
						'</a>' +
						'<button type="button" class="theme-btn btn-style-one zaffran-btn-dismiss">' +
							'<span class="btn-wrap"><span class="text-one">Close</span><span class="text-two">Close</span></span>' +
						'</button>' +
					'</div>' +
					'<div class="zaffran-demo-disclaimer">' +
						'<strong>Portfolio Demonstration Notice:</strong> This is a client-ready frontend interactive prototype for Zaffran Luxury Fine Dining. In full production, this connects to your live table management or reservation backend (e.g. OpenTable, SevenRooms, Resy, or custom REST API).' +
					'</div>' +
				'</div>' +
			'</div>';
			$('body').append(modalHtml);
			$modal = $('#zaffranGlobalModal');

			$modal.on('click', '.zaffran-modal-close, .zaffran-btn-dismiss', function() {
				$modal.removeClass('is-active');
			});

			$modal.on('click', function(e) {
				if ($(e.target).is($modal)) {
					$modal.removeClass('is-active');
				}
			});

			$(document).on('keydown', function(e) {
				if (e.key === 'Escape' && $modal.hasClass('is-active')) {
					$modal.removeClass('is-active');
				}
			});
		}

		$('#zaffranModalTitle').text(options.title || 'Reservation Request Received');
		$('#zaffranModalSubtitle').text(options.subtitle || 'Zaffran Luxury Dining • Connaught Place, New Delhi');
		$('#zaffranModalSummary').html(options.summaryHtml || '');
		$('#zaffranModalText').text(options.text || '');

		if (options.waUrl) {
			$('#zaffranModalWaBtn').attr('href', options.waUrl).show();
		} else {
			$('#zaffranModalWaBtn').hide();
		}

		$modal.addClass('is-active');
	}

	// Reservation Form Handler
	$(document).on('submit', 'form.zaffran-reservation-form', function(e) {
		e.preventDefault();
		var $form = $(this);
		var fullName = $form.find('input[name="fullName"]').val().trim();
		var phone = $form.find('input[name="phoneNumber"]').val().trim();
		var guestCount = $form.find('select[name="guestCount"]').val() || '2 Person';
		var bookingDate = $form.find('input[name="bookingDate"]').val().trim();
		var bookingTime = $form.find('select[name="bookingTime"]').val() || '07 : 00 pm';
		var specialRequest = $form.find('textarea[name="specialRequest"]').val().trim();

		if (!fullName || !phone) {
			alert('Please provide your name and phone number so our concierge can reach you.');
			return;
		}

		if (!bookingDate) {
			alert('Please select a preferred date for your reservation.');
			$form.find('input[name="bookingDate"]').focus();
			return;
		}

		var summaryHtml = 
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Guest Name:</span><span class="zaffran-summary-val">' + $('<div>').text(fullName).html() + '</span></div>' +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Contact Number:</span><span class="zaffran-summary-val">' + $('<div>').text(phone).html() + '</span></div>' +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Party Size:</span><span class="zaffran-summary-val">' + $('<div>').text(guestCount).html() + '</span></div>' +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Date & Time:</span><span class="zaffran-summary-val">' + $('<div>').text(bookingDate + ' at ' + bookingTime).html() + '</span></div>' +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Special Notes:</span><span class="zaffran-summary-val">' + $('<div>').text(specialRequest || 'Standard Table Seating').html() + '</span></div>';

		var waMessage = encodeURIComponent(
			'Greetings Zaffran Concierge! I have submitted a table reservation request:\n\n' +
			'• Guest: ' + fullName + '\n' +
			'• Phone: ' + phone + '\n' +
			'• Party: ' + guestCount + '\n' +
			'• Date: ' + bookingDate + '\n' +
			'• Time: ' + bookingTime + '\n' +
			(specialRequest ? ('• Requests: ' + specialRequest + '\n') : '') +
			'\nPlease confirm availability.'
		);
		var waUrl = 'https://wa.me/919810123456?text=' + waMessage;

		showZaffranModal({
			title: 'Table Reservation Request Received',
			subtitle: 'The Heritage Grand, Connaught Place, New Delhi',
			summaryHtml: summaryHtml,
			text: 'Thank you for choosing Zaffran. Our maître d’hôtel has received your request and will reach out via call/SMS shortly. You may also connect instantly with our concierge on WhatsApp below.',
			waUrl: waUrl
		});

		$form[0].reset();
	});

	// Contact Form Handler
	$(document).on('submit', 'form.zaffran-contact-form', function(e) {
		e.preventDefault();
		var $form = $(this);
		var fullName = $form.find('input[name="fullName"]').val().trim();
		var email = $form.find('input[name="emailAddress"]').val().trim();
		var phone = $form.find('input[name="phoneNumber"]').val().trim();
		var message = $form.find('textarea[name="specialRequest"]').val().trim();

		var summaryHtml = 
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">From:</span><span class="zaffran-summary-val">' + $('<div>').text(fullName).html() + '</span></div>' +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Email:</span><span class="zaffran-summary-val">' + $('<div>').text(email).html() + '</span></div>' +
			(phone ? ('<div class="zaffran-summary-row"><span class="zaffran-summary-label">Phone:</span><span class="zaffran-summary-val">' + $('<div>').text(phone).html() + '</span></div>') : '') +
			'<div class="zaffran-summary-row"><span class="zaffran-summary-label">Inquiry:</span><span class="zaffran-summary-val">' + $('<div>').text(message.substring(0, 100) + (message.length > 100 ? '...' : '')).html() + '</span></div>';

		var waMessage = encodeURIComponent(
			'Greetings Zaffran Concierge! I have sent an inquiry from zaffran.in:\n\n' +
			'• Name: ' + fullName + '\n' +
			'• Email: ' + email + '\n' +
			(phone ? ('• Phone: ' + phone + '\n') : '') +
			'• Message: ' + message
		);
		var waUrl = 'https://wa.me/919810123456?text=' + waMessage;

		showZaffranModal({
			title: 'Inquiry Successfully Received',
			subtitle: 'Zaffran Guest Relations Desk',
			summaryHtml: summaryHtml,
			text: 'Thank you for reaching out to Zaffran. Our guest relations team aims to reply within 24 hours. For immediate assistance or VIP banqueting requests, tap below to chat directly with our manager on WhatsApp.',
			waUrl: waUrl
		});

		$form[0].reset();
	});

	// Blog Live Search Filter
	if($('.blog_search_block').length) {
		var $searchInput = $('.blog_search_block input');
		var $blogPanels = $('.blog_left_side .blog_panel');

		$searchInput.on('input', function() {
			var query = $(this).val().toLowerCase().trim();
			var matchCount = 0;

			$blogPanels.each(function() {
				var text = $(this).text().toLowerCase();
				if (!query || text.indexOf(query) !== -1) {
					$(this).show();
					matchCount++;
				} else {
					$(this).hide();
				}
			});

			var $noMatch = $('#blogNoMatchNotice');
			if (matchCount === 0 && query) {
				if (!$noMatch.length) {
					$('.blog_left_side').append('<div id="blogNoMatchNotice" class="alert alert-warning text-center my-4" style="background: rgba(230,177,95,0.1); border: 1px solid #e6b15f; color: #fff; padding: 15px; border-radius: 6px;">No culinary articles matched your search query. <a href="#" id="resetBlogSearch" style="color: #e6b15f; text-decoration: underline; font-weight: bold; margin-left: 8px;">Clear filter</a></div>');
					$('#resetBlogSearch').on('click', function(ev) {
						ev.preventDefault();
						$searchInput.val('').trigger('input');
					});
				} else {
					$noMatch.show();
				}
			} else if ($noMatch.length) {
				$noMatch.hide();
			}
		});

		$('.blog_search_block form').on('submit', function(e) {
			e.preventDefault();
		});
	}

	// Blog Comment Form Handler
	$(document).on('submit', 'form.zaffran-comment-form', function(e) {
		e.preventDefault();
		var $form = $(this);
		var name = $form.find('input[name="authorName"]').val().trim();
		var comment = $form.find('textarea[name="commentText"]').val().trim();

		if (!name || !comment) {
			alert('Please enter your name and comment.');
			return;
		}

		var newCommentHtml = 
			'<li class="fadeIn animated" style="animation-duration: 0.8s;">' +
				'<div class="authore_info">' +
					'<div class="avtar">' +
						'<img src="images/resource/comment1.png" alt="image">' +
					'</div>' +
					'<div class="text">' +
						'<span>Just now</span> <br>' +
						$('<div>').text(name).html() +
					'</div>' +
				'</div>' +
				'<div class="comment">' +
					'<p>' + $('<div>').text(comment).html() + '</p>' +
				'</div>' +
			'</li>';

		if ($('.comment_list').length) {
			$('.comment_list').prepend(newCommentHtml);
		}

		showZaffranModal({
			title: 'Comment Published',
			subtitle: 'Culinary Chronicles • Reader Discussion',
			text: 'Thank you ' + name + '! Your culinary reflection has been successfully added to this discussion.'
		});

		$form[0].reset();
	});

	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		if($('body.page-loaded').length){
			$('body').addClass('page-done');
		}
	});

/* ==========================================================================
   When document is Resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});
	
	

})(window.jQuery);