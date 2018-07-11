$(function(){
	$(".item ul li img").click(function(){
		var $swimg=$(this).attr('src');
//		console.log($('.item').css('background-image'));
		$('.item').css('background-image','url(./'+$swimg+')');
	})
	//切换旋转
	var i=0,j=0;
	$('.rot').click(function(){
		if(i==0){
			$('.item').css({'animation-name':'rox'});
			i=1;
		}else{
			$('.item').css({'animation-name':'roy'});
			i=0;
		}
	});
	//切换方向
	$('.etc').click(function(){
		if(j==0&&i==0){
			$('.item').css({'animation-name':'dry'});
			j=1;
		}else if(j==1&&i==0)
		{
			$('.item').css({'animation-name':'roy'});
			j=0;
		}else if(j==0&&i==1){
			$('.item').css({'animation-name':'drx'});
			j=1;
		}else{
			$('.item').css({'animation-name':'rox'});
			j=0
		}
	});
})
