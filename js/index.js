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
	var sec1 = $('#sec_home');
	var sec2 = $('#sec_work');
	var sec3 = $('#sec_services');
	var sec4 = $('#sec_clients');
	var sec5 = $('#sec_team');
	var sec6 = $('#sec_careers');
	var sec7 = $('#sec_contact');
	var nav = $('nav');
	/*
	var tw2out = TweenLite.to(sec2, 1, {top:'-100%', ease:Linear.easeNone});
	var tw3in = TweenLite.to(sec3, 1, {top:'0%', ease:Linear.easeNone}, 0.9);
	
	var tw3out = TweenLite.to(sec3, 1, {top:'-100%', ease:Linear.easeNone});
	var tw4in = TweenLite.to(sec4, 1, {top:'0%', ease:Linear.easeNone}, 0.9);
	
	var tw4out = TweenLite.to(sec4, 1, {top:'-100%', ease:Linear.easeNone});
	var tw5in = TweenLite.to(sec5, 1, {top:'0%', ease:Linear.easeNone}, 0.9);
	*/
	
	//tl.insertMultiple([TweenLite.to(sec1, 1, {top:'-100%', ease:Linear.easeNone}), TweenLite.to(sec2, 1, {top:'0%', ease:Linear.easeNone})], 0, 'start', -.2);
	tl.addLabel('page1', 0);
	tl.append(new TweenLite(sec1, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec2, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.append(new TweenLite(nav, 1, {top:'0%', position:'fixed', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page2', 0.7);
	
	tl.append(new TweenLite(sec2, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec3, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page3', 2.1);
	
	tl.append(new TweenLite(sec3, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec4, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page4', 3.7);
	
	tl.append(new TweenLite(sec4, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec5, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page5', 5.3);
	
	tlpg2 = new TimelineLite();
	tlpg2.call(function() {
		$('.navitem').removeClass('active');
		$('#nav2').addClass('active');
	})
	
	tlpg2a = new TimelineLite();
	tlpg2a.call(function() {
		$('.navitem').removeClass('active');
		$('#nav2').addClass('active');
	})
	tl.insert(tlpg2, 'page2');
	tl.insert(tlpg2a, 'page3-=.005');
	
	tlpg3 = new TimelineLite();
	tlpg3.call(function() {
		$('.navitem').removeClass('active');
		$('#nav3').addClass('active');
	})
	tl.insert(tlpg3, 'page3');
	//tl.insert(tlpg3, 'page4-=.5');
	
	tlpg4 = new TimelineLite();
	tlpg4.call(function() {
		$('.navitem').removeClass('active');
		$('#nav4').addClass('active');
	})
	tl.insert(tlpg4, 'page4');
	//tl.insert(tlpg4, 'page5-=.5');
	
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

		$('#scrollPercentLabel').html(scrollPercentRounded + ' / ' + tl.totalDuration());
		
		tl.progress( scrollPercent ).pause();
	});

	function timelineIsUpdating() {
		//console.log('timelineIsUpdating()');
	}
	var i;
	for(i = 1; i <= 5; i++) {
		$('#nav'+i).bind('click', function() {
			var pos = tl.getLabelTime('page'+i)/tl.totalDuration();
			console.log('going to page ' + i + ' at ' + pos);
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