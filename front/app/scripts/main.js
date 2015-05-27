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
		// var ul_select = $('.dropdown-content.select-dropdown')
		// var container_select = $('#categories')
		var container = $('#cat-cont')
		var header = $('#header')
		var categories = new Categories(container,header)
	})

	function newCategory(){
		data ={
			"title": $('#nueva').val()
		}
		$.ajax({
			type: 'post',
			data: data,
			url: 'http://localhost:3000/categories',
			success: function(){
				var categories = new Categories(ul_select, container_select, container)
			},
			error:function(response){
				console.log(response)
			}
		})
	};
	
});



