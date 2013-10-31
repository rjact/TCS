$(document).ready(function() {
	
	tlIntro = new TimelineLite({onComplete:initScroller});
	tlIntro.delay(.2).append([
		TweenLite.to($('#sec_home'), .2, {css: {backgroundColor: '#002B45'}}),
		TweenLite.to($('#sec_home h1'), .2, {css: {color: '#ffffff'}}),
		TweenLite.delayedCall(.2, function() {
			$('#intro-image').css('backgroundPosition', 'bottom center');	
		})]);
	
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
		controller.addTween($(window).height()+60, TweenMax.to($('nav'), .001, {css:{position:'fixed',top:'0%'}}),1);
		
		
	}
	
});

