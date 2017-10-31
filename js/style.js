$(function(){
	var flag=1;
	$('.menu_l').click(function(){
		if(flag==1){
			$('.menu_cont_1').slideDown(300);
			flag=2
		}else if(flag==2){
			$('.menu_cont').slideUp(300);
			$('.menu_cont_1').animate({'right':'0'});
			$('.menu_cont_2').animate({'left':'100%'}).slideDown();
			flag=1;
		}
	});
	$('.menu_cont_1 li.on').click(function(){
		$('.menu_cont_1').animate({'right':'100%'});
		$('.menu_cont_2').animate({'left':'0'});
	});
	$('.menu_cont_2 li.prev_level').click(function(){
		$('.menu_cont_1').animate({'right':'0'});
		$('.menu_cont_2').animate({'left':'100%'});
	});
	$('.menu_E').click(function(){
		$(this).find('div').fadeToggle(100);
	});
	$('.search1').mouseover(function(){
		$(this).stop().animate({'right':'-100%'});
		$('.search2').stop().animate({'left':'0'});
		focusInput();
	});
	function focusInput(){
		setTimeout(function(){
			$('.search_input').focus();
		},1000);
	}
	$('.search_input').blur(function(){
		$('.search1').stop().animate({'right':'0'});
		$('.search2').stop().animate({'left':'100%'});
	})
	
})
