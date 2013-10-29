var tl;
$(window).load(function() {
	tlIntro = new TimelineLite();
	tlIntro.delay(1).append([
		TweenLite.to($('#sec_home'), 4, {css: {backgroundColor: '#002B45'}}),
		TweenLite.to($('#sec_home'), 1.5, {css: {color:'#ffffff'}}),
		//TweenLite.to($('#header_logo'), 2, {opacity:0}, 4),
		TweenLite.to($('#header_logo_white'), 1.5, {opacity: 1}, 4)]);
		
	tl = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});	

	//tl.to($('#sec2'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec3'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec4'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec5'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//tl.staggerTo($('.sec'), 1, {css:{top:"0%"}, ease:Linear.easeNone}, 0.9),
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

	tl.append(new TweenLite(sections[0], 1, {top:'-100%', ease:Linear.easeNone}), -1);
	tl.insert(TweenLite.to(sections[1], 1, {top:'0%', ease:Linear.easeNone}), -1, -1, 'page1+=.001');
	tl.insert(TweenLite.to(nav, 1, {top:'0%', position:'fixed', ease:Linear.easeNone}), -1, 'page1+=.001');
	tl.delay(.55);
	for(i = 1; i < sections.length-1; i++) {
		tl.append(new TweenLite(sections[i], 1.55, {top:'-100%', ease:Linear.easeNone}));
		tl.append(new TweenLite(sections[i+1], 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	}
	tl.addLabel('page1', 0);
	tl.addLabel('page2', 0.77);
	tl.addLabel('page3', 1.55);
	tl.addLabel('page4', 3.11);
	tl.addLabel('page5', 4.68);
	
	tlpg2 = new TimelineLite();
	tlpg2.call(function() {
		$('.navitem').removeClass('active');
		$('#nav2').addClass('active');
	})
	
	tl.insert(tlpg2, 'page2');
	tl.insert(tlpg2, 'page3-=.005');
	
	tlpg3 = new TimelineLite();
	tlpg3.call(function() {
		$('.navitem').removeClass('active');
		$('#nav3').addClass('active');
	})
	tl.insert(tlpg3, 'page3');
	tl.insert(tlpg3, 'page4-=.005');
	
	tlpg4 = new TimelineLite();
	tlpg4.call(function() {
		$('.navitem').removeClass('active');
		$('#nav4').addClass('active');
	})
	tl.insert(tlpg4, 'page4');
	tl.insert(tlpg4, 'page5-=.005');
	
	tlpg5 = new TimelineLite();
	tlpg5.call(function() {
		$('.navitem').removeClass('active');
		$('#nav5').addClass('active');
	})
	tl.insert(tlpg5, 'page5');
	

	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100)/100;

		$('#scrollPercentLabel').html(Math.round((tl.rawTime()*100), 2) / 100  + ' / ' + Math.round((tl.totalDuration()*100), 2) / 100 + ' (' + Math.round((scrollPercentRounded*100), 2)  + '%)');
		
		tl.progress( scrollPercent ).pause();
	});

	function timelineIsUpdating() {
		//console.log('timelineIsUpdating()');
	}
	var i;
	for(i = 1; i <= 5; i++) {
		$('#nav'+i).bind('click', function() {
			var pos = tl.getLabelTime('page'+i)/tl.totalDuration();
			//console.log('going to page ' + i + ' at ' + pos);
			tl.gotoAndStop(pos).pause();
		});
	}

/*
	//for(var i = 1; i <= 5; i++) {
		$('#nav1').bind('click', function() {
			var pos = tl.getLabelTime('page1')/tl.totalDuration();
			console.log('going to ' + pos);
			tl.gotoAndStop(pos).pause();
		});
		$('#nav2').bind('click', function() {
			var pos = tl.getLabelTime('page2')/tl.totalDuration();
			console.log('going to ' + pos);
			tl.gotoAndStop(pos).pause();
		});
		$('#nav3').bind('click', function() {
			var pos = tl.getLabelTime('page3')/tl.totalDuration();
			console.log('going to ' + pos);
			tl.gotoAndStop(pos).pause();
		});
		$('#nav4').bind('click', function() {
			var pos = tl.getLabelTime('page4')/tl.totalDuration();
			console.log('going to ' + pos);
			tl.gotoAndStop(pos).pause();
		});
		$('#nav5').bind('click', function() {
			var pos = tl.getLabelTime('page5')/tl.totalDuration();
			console.log('going to ' + pos);
			tl.gotoAndStop(pos).pause();
		});
	//}
*/

});