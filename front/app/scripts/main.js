$(document).ready(function() {
	$('.slider').slider({full_width: true});
	$('.modal-trigger').leanModal();
	$('select').material_select();
	$(".button-collapse").sideNav();

	$(function(){
		var task = $('.tasks');
		var tasks = new Tasks(task);
	});

	$(function(){
		var container = $('#cat-cont')
		var categories = new Categories(container)
	})

});



