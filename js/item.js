$(function() {
	var product = $('#product');
	var hoverbox = $('.hoverbox');
	product.mouseover(function() {
		hoverbox.toggle();
	});
	product.mouseout(function() {
		hoverbox.toggle();
	});

	$(".icon-close").on('click',function() {
		$(this).parent().fadeOut(1000);
	});

	$("#cart-btn").mouseover(function() {
		$('.cart-list').fadeIn(500);
	});

	$('.cart-list').hover(function(){
  		$(this).show();
	},function(){
  		$(this).hide()
	});
});