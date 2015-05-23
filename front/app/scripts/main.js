$(document).ready(function() {
	$('select').material_select();

  $('.slider').slider({full_width: true});

	$(function(){
		var task = $('.tasks');
		var tasks = new Tasks(task);
	});

	$('.categories').click(function(event){
		container = $(this)
		categories = new Categories(container)
	})
});
