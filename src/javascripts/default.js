$(function(){   
	var nav = $('header');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 150) { 
			nav.addClass("menu-fixo"); 
		} else { 
			nav.removeClass("menu-fixo"); 
		} 
	});  
});
$('#MBmenu').click(function() {
	$('#menu').toggleClass('tb-hide');
	$('#MBmenu .fa-times').toggleClass('hide');
	$('.fa-bars').toggleClass('hide');
	$(this).toggleClass('Bg-change');
	$('#search').addClass('tb-hide');
	$('#MBsearch .fa-times').addClass('hide');
	$('#MBsearch .fa-search').removeClass('hide');
	$('#MBsearch').removeClass('Bg-change');
	$('.menu-item-box').toggleClass('back-dark');
	$('.search-box').removeClass('back-dark');
});
$('#MBsearch').click(function() {
	$('#menu').addClass('tb-hide');
	$('#MBmenu .fa-times').addClass('hide');
	$('.fa-bars').removeClass('hide');
	$('#MBmenu').removeClass('Bg-change');
	$('#search').toggleClass('tb-hide');
	$('#MBsearch .fa-times').toggleClass('hide');
	$('#MBsearch .fa-search').toggleClass('hide');
	$(this).toggleClass('Bg-change');
	$('.menu-item-box').removeClass('back-dark');
	$('.search-box').toggleClass('back-dark');
});