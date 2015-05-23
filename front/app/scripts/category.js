var Category = (function(){

	(function() {
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/categories',
			success: function(data) {
				for (var i = 1; i < data.length; i++) {
					$('#categories').append('<option value="' + data[i].id + '">' + data[i].category + '</option>');
				}
			},
			error: function(data) {
				console.log(data);
			}
		});
	})();

	var Category =  function(data, container){
		this.container = container;

		if(data){
			this.init(data);
		}else{
			this.getData();
		}
	}

	Category.prototype.init = function(data){
	//console.log(this.container)
	this.name = data.category;
	this.id = data.id;
};	

	// Category.prototype.getData = function(){
	// 	$.ajax({
	// 		type: ,
	// 		url: ,
	// 		success: function(){

	// 		},
	// 		error: function(){

	// 		}
	// 	});
	// };

	Category.prototype.draw = function(){		
		return $('<div/>',{class:"col s12 m6 l3 category",id:this.id}).append(
			$('<div/>',{class:"row"}).append(
				$("<div/>",{class:"col m12"}).html(
					this.name
					)
				)
			)	
	};

	Category.prototype.appendToContainer = function () {
		$(this.container).append(this.draw());
	};

	Category.prototype.newCategory = function(){
		var self = this;
		var category = {
			"title": this.name
		};
		$.ajax({
			type: 'post',
			url: 'http://localhost:3000/categories',
			data: 'category',
			success: function(data){
				console.log("creada"+data.id);
				categories = new Category();
			},
			error: function(){
				console.log('error al crear')
			}
		});
	}

	Category.prototype.updateCategory = function(){
		var category = {
			"title": this.name
		}
		$.ajax({
			type: 'pacth',
			url: 'http://localhost:3000/categories'+this.id,
			data: 'category',
			success: function(data){
				console.log("actualizada"+data.id);
				categories = new Category();
			},
			error: function(){
				console.log('error al actualizar')
			}
		});
	}

	Category.prototype.deleteCategory = function(){
		$.ajax({
			type: 'delete',
			url: 'http://localhost:3000/categories'+this.id,
			success: function(data){
				console.log("elinimada"+data.id);
				categories = new Category();
			},
			error: function(){
				console.log('error al eliminar')
			}
		});
	}
	return Category;
})();