
var PIN_DURATION = 2000
$(document).ready(function () {
	$(document).scrollTop(0);
	tlIntro = new TimelineLite();
	tlIntro.delay(1).append([
		TweenLite.to($('#home'), 1.5, { css: { backgroundColor: '#002B45'} }),
		TweenLite.to($('#home h1'), 1.75, { css: { color: '#ffffff'} }),
		TweenLite.delayedCall(1.5, function () {
			$('#intro-image').css('backgroundPosition', 'bottom center');
		}),
		TweenLite.delayedCall(1, function() {
			if(window.location.hash == '') {
				s.animateTo($('#work').position().top, {
					duration:2500
				});
			} else {
				var hash = window.location.hash.substring(1);
				if($('#nav_' + hash).length > 0) {
					$('#nav_'+hash).click();
				}
			}
			setScrollWatcher();
		})
		]);
	skrollr.menu.init(s, {
		//skrollr will smoothly animate to the new position using `animateTo`.
		animate: true,
		offset: 0,
		duration:2500
	});

	$('.work_example').on('mouseenter', function() {
		$(this).find('.overlay').fadeIn();
	}).on('mouseleave', function() {
		$(this).find('.overlay').fadeOut();
	});
	
	$('.team_example').on('mouseenter', function() {
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
	
	$('.services_example').each(function() {
		$(this).find('.front').prepend(shapeWrapper("15","7.5,91,111|22.5,62,75|37.5,33,44|52.5,25,37|67.5,21,31|82.5,17,25|97.5,12,18|112.5,8,12|127.5,13,19|142.5,19,25|157.5,25,32|172.5,31,38|187.5,50,51|202.5,76,83|217.5,0,0|232.5,0,0|247.5,0,0|"));
		$(this).find('.back').prepend(shapeWrapper("15","7.5,91,111|22.5,62,75|37.5,33,44|52.5,25,37|67.5,21,31|82.5,17,25|97.5,12,18|112.5,8,12|127.5,13,19|142.5,19,25|157.5,25,32|172.5,31,38|187.5,50,51|202.5,76,83|217.5,0,0|232.5,0,0|247.5,0,0|"));
		
	});
	$('#nav_work').on('click', function(e) {
		s.animateTo(1800);
		navHighlight('work');
		e.stopPropagation();
	});
	$('#nav_services').on('click', function(e) {
		s.animateTo(3150);
		navHighlight('services');
		e.stopPropagation();
	});
	$('#nav_clients').on('click', function(e) {
		s.animateTo(4600);
		navHighlight('clients');
		e.stopPropagation();
	});
	$('#nav_team').on('click', function(e) {
		s.animateTo(5600);
		navHighlight('team');
		e.stopPropagation();
	});
	$('#nav_careers').on('click', function(e) {
		s.animateTo(6800);
		navHighlight('careers');
		e.stopPropagation();
	});
	$('#nav_contact').on('click', function(e) {
		s.animateTo(7100);
		navHighlight('contact');
		e.stopPropagation();
	});


	$('.work_example').on('click', function() {
		showLightbox($(this).data('large'), $(this).data('text'), 800);
	});
	$('.services_example').on('click', function() {
		showLightbox($(this).data('large'), $(this).data('text'), 800);
	});
	$('.team_example').on('click', function() {
		showLightbox($(this).data('large'), $(this).data('text'), 600);
	});
	
	
});

function navHighlight(tab) {
	$('.navitem').removeClass('active');
	$('#nav_'+tab).addClass('active');
}
function showLightbox(image, text, size) {
		$('#overlay').show().on('click', function() { hideLightbox(); });
		$('body').css({'overflow': 'hidden'});
		var contents = '<img src="images/lightbox/' + image + '.png"/>';
		$('<div id="lightbox"><div class="close_lbx"></div></div>').css({width: size, height: size}).append(contents).appendTo('body').center();
		if(text != '') {
			$('#lightbox').append($('<p></p>').html(text));
		}
		$('#lightbox').delegate('.close_lbx', 'click', function() {
			hideLightbox();
		});
	
}
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

function setScrollWatcher() {
	   $(window).scroll(function() {
		var top = s.getScrollTop();
		if (top > 1000 && top < 2500 ) {
				navHighlight('work');
				history.pushState(null, null, '#work')
		} else if (top > 2500 && top < 3850) {
				navHighlight('services');
				history.pushState(null, null, '#services')
		} else if (top > 3850 && top < 4900) {
				navHighlight('clients');
				history.pushState(null, null, '#clients')
		} else if (top > 4900 && top < 6200) {
				navHighlight('team');
				history.pushState(null, null, '#team')
		} else if (top > 6200 && top < 7000) {
				navHighlight('careers');
				history.pushState(null, null, '#careers')
		} else {
				navHighlight('contact');
				history.pushState(null, null, '#contact')
		}
	});
}