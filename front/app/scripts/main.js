$(document).ready(function() {
	$('select').material_select();

	$(function(){
		var task = $('.tasks');
		var tasks = new Tasks(task);
	});

	$('.categories').click(function(event){
		container = $(this)
		categories = new Categories(container)
	})
});



