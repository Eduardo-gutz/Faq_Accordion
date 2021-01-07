$(document).ready(function(){
	$('.faq-question').click(function(e){
		e.preventDefault();

		if($(this).hasClass('faq-question--active')){
			$(this).removeClass('faq-question--active');
			$(this).children('.faq-question__answer').slideUp();
		} else{
			$('.faq-question .faq-question__answer').slideUp();
			$('.faq-question').removeClass('faq-question--active');
			$(this).addClass('faq-question--active');
			$(this).children('p').slideDown();
		}
	});
})