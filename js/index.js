var PIN_DURATION = 2000
$(document).ready(function () {

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
		, offset: -60
		});

		TweenLite.to(window, 5, { scrollTo: { y: $('#sec_work').position().top} })
		TweenLite.to(window, 2.5, { scrollTo: { y: $('#sec_work').position().top + 1500} })
	}

	$('#nav_work').on('click', function () {
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_work').position().top - 100} });
		if ($(document).scrollTop() < $('#sec_work').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_work').position().top + (PIN_DURATION * .75)} });
		}
		$('.navitem').removeClass('active');
		$(this).addClass('active');
	});
	$('#nav_services').on('click', function () {
		var tl = new TimelineLite();
		tl.to(window, 1, { scrollTo: { y: $('#sec_services').position().top - 100} });
		if ($(document).scrollTop() < $('#sec_services').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_services').position().top + (PIN_DURATION * .75)} });
		}
		$('.navitem').removeClass('active');
		$(this).addClass('active');
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
		$('.navitem').removeClass('active');
		$(this).addClass('active');
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
		$('.navitem').removeClass('active');
		$(this).addClass('active');
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
		$('.navitem').removeClass('active');
		$(this).addClass('active');
	});
	$('#nav_contact').on('click', function () {
		var scrollExtra = -100;
		if ($(document).scrollTop() < $('#sec_services').position().top) {
			scrollExtra += PIN_DURATION;
		}
		var tl = new TimelineLite();
		if ($(document).scrollTop() < $('#sec_clients').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_team').position().top) {
			scrollExtra += PIN_DURATION;
		}
		if ($(document).scrollTop() < $('#sec_careers').position().top) {
			scrollExtra += PIN_DURATION;
		}
		tl.to(window, 1, { scrollTo: { y: $('#sec_contact').position().top + scrollExtra} });
		if ($(document).scrollTop() < $('#sec_contact').position().top) {
			tl.to(window, 1, { scrollTo: { y: $('#sec_contact').position().top + scrollExtra + (PIN_DURATION * .75)} });
		}
		$('.navitem').removeClass('active');
		$(this).addClass('active');
	});


});

