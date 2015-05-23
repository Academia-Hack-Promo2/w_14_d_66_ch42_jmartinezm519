$(document).ready(function() {
	$('select').material_select();

	$('.slider').slider({full_width: true});

	$(function(){
		var task = $('.tasks');
		var tasks = new Tasks(task);
	});

	$(function(){
		var container = $('#cat-cont')
		var categories = new Categories(container)
	})
})	;



