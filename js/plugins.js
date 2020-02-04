 $(document).ready(function(){
   	
	$('p.triggers-text').animate({
		marginTop:'-10px'
    });
    
    $('i.tooop.fa.fa-arrow-down').animate({
		left:'30px'
    });
    
	$('p.triggers-text').animate({
		marginTop:'10',
	},function(){$("i.tooop.fa.fa-arrow-down").fadeIn(100);});
   	
	$('i.tooop.fa.fa-arrow-down').animate({
		marginTop:'10'
	},function(){$(".block1").fadeIn(800);});

    $('.block1').animate({
		marginTop:'10'
	},function(){$("i.icon1.fa.fa-arrow-right").fadeIn(3000);});
    
	$('.block1').animate({
		Left:'50px'
	},function(){$(".square").fadeIn(2000);});    
    
    $('.square').animate({
		Left:'50px'
	},20,function(){$("i.icon2.fa.fa-arrow-right").fadeIn(1000);});
    
    $('.square').animate({
		Left:'50px'
	},800,function(){$("i.donn.fa.fa-arrow-down").fadeIn(6000);});
    
    $('i.donn.fa.fa-arrow-down').animate({
		Left:'50px'
	},1000,function(){$(".down").fadeIn(7000);});
    
    $('i.icon2.fa.fa-arrow-right').animate({
		Left:'50px'
	},5000,function(){$(".block-two").fadeIn(1000);});

    $('.block-two').animate({
		Left:'50px'
	},6000,function(){$("i.icon3.fa.fa-arrow-right").fadeIn(1000);});
    
    $('i.icon3.fa.fa-arrow-right').animate({
		Left:'50px'
	},7000,function(){$("p.outpt").fadeIn(1000);});

    $('p.outpt').animate({
		bottom:'50px'
	},8000,function(){$("i.click.fa.fa-arrow-circle-up").fadeIn(4000);});
    $('i.click.fa.fa-arrow-circle-up').animate({
		marginTop:'-10px'
    },function(){$(".square").fadeOut(3000);});
    
    $('i.click.fa.fa-arrow-circle-up').animate({
		bottom:'50px'
	},8000,function(){$(".popup").fadeIn(4000);});
    
    $('.popup').animate({
		bottom:'50px'
	},8500,function(){$(".popo-head").fadeIn(10);});
    
    $('p.outpt').animate({
		bottom:'50px'
	},500,function(){$(".box").fadeTo(1000,0);});
    $('.box').animate({
	},500,function(){$(".popup").fadeTo(4000,1);});
    
    $('.box').animate({
		bottom:'50px'
	},8500,function(){$(".popo-head").fadeIn(6000);});
    
    $('.box').animate({
      height: 'toggle'
    });
    $('.popup').animate({
      height: 'toggle'
    });
    $('.popo-head').animate({
		bottom:'50px'
	},100,function(){$(".box2").fadeIn(1000);});
      $('.popo-head').animate({
		bottom:'50px'
	},8000,function(){$("i.click2.fa.fa-arrow-circle-up").fadeIn(9000);});
    
});