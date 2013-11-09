
var PIN_DURATION = 2000
$(document).ready(function () {
	$(document).scrollTop(0);
	tlIntro = new TimelineLite({ onComplete: initScroller });
	tlIntro.delay(1).append([
		TweenLite.to($('#sec_home'), 1.5, { css: { backgroundColor: '#002B45'} }),
		TweenLite.to($('#sec_home h1'), 1.75, { css: { color: '#ffffff'} }),
		TweenLite.delayedCall(1.5, function () {
			$('#intro-image').css('backgroundPosition', 'bottom center');
		})

		]);

	$('section.sec').each(function () {
		$(this).css('height', $(this.outerHeight) + PIN_DURATION);
	});

	function initScroller() {
		var controller = $.superscrollorama();

		//controller.addTween('#sec_home', TweenLite.to($('#sec_home'), .5, {css:{opacity:.3}}));
		var HOME = 0,
			WORK = 1,
			SERVICES = 2,
			CLIENTS = 3,
			TEAM = 4,
			CAREERS = 5,
			CONTACT = 6
		var sections = new Array();
		sections[HOME] = $('#sec_home');
		sections[WORK] = $('#sec_work');
		sections[SERVICES] = $('#sec_services');
		sections[CLIENTS] = $('#sec_clients');
		sections[TEAM] = $('#sec_team');
		sections[CAREERS] = $('#sec_careers');
		sections[CONTACT] = $('#sec_contact');
		var nav = $('nav');


		//stick nav bar to top
		controller.addTween($(window).height() + 60, TweenMax.to($('nav'), .001, { css: { position: 'fixed', top: '0%'} }), 1);


		//work section
		controller.pin(sections[WORK], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_work').addClass('active'); })
					.append(TweenLite.from(sections[WORK].find('.sec_header'), 1, { marginTop: '-420px' }, -500))
					.append(TweenMax.staggerFrom(sections[WORK].find('.work_example'), 1, { y: '-100', opacity: 0, ease: Expo.easeOut }, .5))
		, offset: -100
		});

		//services page
		controller.pin(sections[SERVICES], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_services').addClass('active'); })
					.append(TweenMax.staggerFrom(sections[SERVICES].find('.services_example'), 1, { y: '-100', scaleY: -1, alpha: 0, ease: Expo.easeOut }, .5))
		, offset: -100
		});

		//clients page
		controller.pin(sections[CLIENTS], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_clients').addClass('active'); })
					.append(TweenMax.staggerFrom(sections[CLIENTS].find('.client_example'), 1, { x: '+1000', ease: Expo.easeOut }, .5))
		, offset: -100
		});

		//team page
		controller.pin(sections[TEAM], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_team').addClass('active'); })
					.append(TweenMax.staggerFrom(sections[TEAM].find('.team_example'), 1, { y: '+900', ease: Expo.easeOut }, .5))
		, offset: -100
		});

		//career page
		controller.pin(sections[CAREERS], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_careers').addClass('active'); })
					.append(TweenMax.from(sections[CAREERS].find('.sec_content'), 1, { alpha: 0, ease: Expo.easeOut }, .5))
		, offset: -100
		});

		//contact page
		controller.pin(sections[CONTACT], PIN_DURATION, {
			anim: (new TimelineLite())
					.call(function () { $('.navitem').removeClass('active'); })
					.call(function () { $('#nav_contact').addClass('active'); })
					.append((new TimelineLite()).append([
						TweenMax.staggerFrom(sections[CONTACT].find('.sec_col'), 1, { y: '+600', ease: Expo.easeOut }, .4),
						TweenLite.to($('.sec_footer'), 1, {css: {top: $(window).height()-$('.sec_footer').height()-100}}, 100)
					]))
					.call(function() {
						//controller.removePin(sections[CONTACT], false);
						//sections[CONTACT].prev().css('height', 'auto');
						sections[CONTACT].css({minHeight:'inherit', height: $(window).height() - 200});
						//$('#sec_extra').css('height', '50px');
					})
					//.call(function() { controller.removePin(sections[CONTACT]);})
		, offset: -100
		});

		//controller.addTween($(window).height(), TweenMax.to($('#sec_contact'), .001, { css: { position: 'fixed'} }), 1);
		TweenLite.to(window, 5, { scrollTo: { y: $('#sec_work').position().top} })
		TweenLite.to(window, 2.5, { scrollTo: { y: $('#sec_work').position().top + 1500} })
	}

	$('.work_example').on('mouseenter', function() {
		$(this).find('.overlay').fadeIn();
	}).on('mouseleave', function() {
		$(this).find('.overlay').fadeOut();
	});
	
	var flipDepth = -500,
			flipDur = .8
	$('.services_example').on('mouseenter', function() {
		var $this = $(this);
		var tl = new TimelineLite();
 		tl.to($this.find('.front'), flipDur / 2, {
			css: { rotationY: 90, z: flipDepth, rotationX: 0 },
			ease: Expo.easeIn
		});

		tl.append(function () {
			$this.find('.front').hide();
			$this.find('.back').show();
		})

		tl.fromTo($this.find('.back'), flipDur / 2,
			{ css: { rotationY: -90, z: flipDepth, rotationX: 0 } },
			{ css: { rotationY: 0, z: 0, rotationX: 0, alpha: 1 }, ease: Expo.easeOut }
		);	
	}).on('mouseleave', function() {
		var $this = $(this);
		var tl = new TimelineLite();
 		tl.to($this.find('.back'), flipDur / 2, {
			css: { rotationY: 90, z: flipDepth, rotationX: 0 },
			ease: Expo.easeIn
		});

		tl.append(function () {
			$this.find('.back').hide();
			$this.find('.front').show();
		})

		tl.fromTo($this.find('.front'), flipDur / 2,
			{ css: { rotationY: -90, z: flipDepth, rotationX: 0 } },
			{ css: { rotationY: 0, z: 0, rotationX: 0, alpha: 1 }, ease: Expo.easeOut }
		);	
		
		tl.call(function() {
			$this.find('.front').css('-webkit-transform', '');
			$this.find('.back').css('-webkit-transform', '');
		})
	});
	
	$('#nav_work').on('click', function () {
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_work').position().top - 100} });
		if ($(document).scrollTop() < $('#sec_work').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_work').position().top + (PIN_DURATION * .75)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_work').addClass('active');
		});
	});
	$('#nav_services').on('click', function () {
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_services').position().top - 100} });
		if ($(document).scrollTop() < $('#sec_services').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_services').position().top + (PIN_DURATION * .75)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_services').addClass('active');
		});
	});
	$('#nav_clients').on('click', function () {
		var scrollExtra = -100;
		if ($(document).scrollTop() < $('#sec_services').position().top) {
			scrollExtra += PIN_DURATION;
		}
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_clients').position().top + scrollExtra} });
		if ($(document).scrollTop() < $('#sec_clients').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_clients').position().top + scrollExtra + (PIN_DURATION * .75)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_clients').addClass('active');
		});
	});
	$('#nav_team').on('click', function () {
		var scrollExtra = -100;
		if($(document).scrollTop() < $('#sec_services').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_clients').position().top) {
			scrollExtra += PIN_DURATION;
		}
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_team').position().top + scrollExtra} });
		if ($(document).scrollTop() < $('#sec_team').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_team').position().top + scrollExtra + (PIN_DURATION * .75)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_team').addClass('active');
		});
	});
	$('#nav_careers').on('click', function () {
		var scrollExtra = -100;
		if ($(document).scrollTop() < $('#sec_team').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if($(document).scrollTop() < $('#sec_services').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_clients').position().top) {
			scrollExtra += PIN_DURATION;
		}
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_careers').position().top + scrollExtra} });
		if ($(document).scrollTop() < $('#sec_careers').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_careers').position().top + scrollExtra + (PIN_DURATION * .75)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_careers').addClass('active');
		});
	});
	$('#nav_contact').on('click', function () {
		var scrollExtra = -80;
		if ($(document).scrollTop() < $('#sec_services').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_clients').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_team').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_careers').position().top) {
			scrollExtra += PIN_DURATION;
		}
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_contact').position().top + scrollExtra} });
		if ($(document).scrollTop() < $('#sec_contact').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_contact').position().top + scrollExtra + (PIN_DURATION * .85)} });
		}
		tl.call(function() {
			$('.navitem').removeClass('active');
			$('#nav_contact').addClass('active');
		});
	});


	$('.example').on('click', function() {
		$('#overlay').show().on('click', function() { hideLightbox(); });
		$('body').css({'overflow': 'hidden'});
		///$('nav').css('margin-left', '-8px'); //because,wtf
		var contents = '<img src="images/work/' + $(this).data('large') + '.png"/>';
		$('<div id="lightbox"><div class="close_lbx"></div></div>').append(contents).appendTo('body').center();
		if($(this).data('text') != '') {
			var contents = $(this).data('text');
			$('#lightbox').append($('<p></p>').html(contents));
		}
		//TweenLite.from($('#lightbox'), .6, {css: {scaleY: 0}});
		$('#lightbox').delegate('.close_lbx', 'click', function() {
			hideLightbox();
		});
	});
	
	$('.fancybox').fancybox();
	
});

function hideLightbox() {
		$('#overlay').hide();
	$('#lightbox').fadeOut(function() {
		$(this).remove();
	});
	$('body').css('overflow', 'visible');
	
}
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

$(function(){

    //ini plugin

    jQuery.event.freezeEvents = function(elem) {

    	if (typeof(jQuery._funcFreeze)=="undefined")
    		jQuery._funcFreeze = [];

    	if (typeof(jQuery._funcNull)=="undefined")
    		jQuery._funcNull = function(){ };

    	// don't do events on text and comment nodes
    	if ( elem.nodeType == 3 || elem.nodeType == 8 )
    		return;

    	var events = jQuery.data(elem, "events"), ret, index;

    	if ( events ) {

    		for ( var type in events )
    		{
    			if ( events[type] ) {

    				var namespaces = type.split(".");
    				type = namespaces.shift();
    				var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

    				for ( var handle in events[type] )
    					if ( namespace.test(events[type][handle].type) ){
    						if (events[type][handle] != jQuery._funcNull){
    							jQuery._funcFreeze["events_freeze_" + handle] = events[type][handle];
    							events[type][handle] = jQuery._funcNull;
    						}
    					}
    			}

    		}
    	}
    }

    jQuery.event.unFreezeEvents = function(elem) {

    	// don't do events on text and comment nodes
    	if ( elem.nodeType == 3 || elem.nodeType == 8 )
    		return;

    	var events = jQuery.data(elem, "events"), ret, index;

    	if ( events ) {

    		for ( var type in events )
    		{
    			if ( events[type] ) {

    				var namespaces = type.split(".");
    				type = namespaces.shift();

    				for ( var handle in events[type] )
    					if (events[type][handle]==jQuery._funcNull)
    						events[type][handle] = jQuery._funcFreeze["events_freeze_" + handle];

    			}
    		}
    	}
    }

    jQuery.fn.freezeEvents = function() {

    	return this.each(function(){
    		jQuery.event.freezeEvents(this);
    	});

    };

    jQuery.fn.unFreezeEvents = function() {

    	return this.each(function(){
    		jQuery.event.unFreezeEvents(this);
    	});

    };
});