setInterval(function(){
    $('.moon').animate({
        top: 200,
	left: 400,
        width: 200,
        height: 200,
        zIndex: 5
    }, 1000, "linear").animate({
		top: 400,
		left: 70,
		width: 120,
		height: 120,
		zIndex: 5
    }, 1000, "linear").animate({
		top: 400,
		left: 70,
		width: 120,
		height: 120,
		zIndex: 1
    }, 0, "linear").animate({
		top: 200,
		left: 400,
		width: 120,
		height: 120,
		zIndex: 1
    }, 1000, "linear").animate({
   		top: 100,
   		left: 660,
		width: 120,
		height: 120,
		zIndex: 5
    }, 1000, "linear")
}, 0)
