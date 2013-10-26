$(window).load(function() {
	var tl = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});	

	//tl.to($('#sec2'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec3'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec4'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//.to($('#sec5'), 1, {css:{top:"0%"}, ease:Linear.easeNone})
	//tl.staggerTo($('.sec'), 1, {css:{top:"0%"}, ease:Linear.easeNone}, 0.9),
	var sec1 = $('#sec1');
	var sec2 = $('#sec2');
	var sec3 = $('#sec3');
	var sec4 = $('#sec4');
	var sec5 = $('#sec5');
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
	tl.append(new TweenLite(sec1, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec2, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.append(new TweenLite(nav, 1, {top:'0%', position:'fixed', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page2', 1);
	
	tl.append(new TweenLite(sec2, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec3, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page3', 1);
	
	tl.append(new TweenLite(sec3, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec4, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page4', 1);
	
	tl.append(new TweenLite(sec4, 1.55, {top:'-100%', ease:Linear.easeNone}));
	tl.append(new TweenLite(sec5, 1, {top:'0%', ease:Linear.easeNone}), -1.75);
	tl.addLabel('page5', 1);
	
	

	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100)/100;

		$('#scrollPercentLabel').html(scrollPercentRounded);
		
		tl.progress( scrollPercent ).pause();
	});

	function timelineIsUpdating() {
		//console.log('timelineIsUpdating()');
	}

});