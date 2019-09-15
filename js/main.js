 $(document).ready(function() { 
		$('.incfont').click(function(){	   
        curSize= parseInt($('.nav-link, p').css('font-size')) + 2;
		if(curSize<=20)
        $('.nav-link, p').css('font-size', curSize);
        });  
		$('.decfont').click(function(){	   
        curSize= parseInt($('.nav-link, p').css('font-size')) - 2;
		if(curSize>=12)
        $('.nav-link, p').css('font-size', curSize);
        }); 
    });
    
    $('#r-side-slider1, #r-side-slider2, #l-side-slider ').carousel({
        interval: false
      });