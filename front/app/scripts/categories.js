var Categories = (function(){

	var Categories = function(container,data){
		this.container = container;

		if(data){
			this.init(data);
			this.draw();
		}else{
			this.getData();
		}
	};

	Categories.prototype.init = function(data,container) {
		var category;
		this.categories = [];
		for (var i = 0;i < data.length; i++) {			
			category = new Category(data[i],container);
			this.categories.push(category);
		}
	};

	Categories.prototype.getData = function() {
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/categories',
			success: function(data){
				self.init(data);
				self.draw();
			},
			error: function(){
				console.log('Error solicitud')
			}
		})
	};

	Categories.prototype.draw = function() {
		this.container.html('');
		for(var i = 0; i < this.categories.length; i++) {			
			if (i == 0){
				this.container.append(this.categories[i].draw());				
			}else{
				this.container.append(this.categories[i].draw1());
			}
		}
		this.container.append(this.draw_nueva);
		act_modales();
		click_eliminar();
		click_editar();
		click_nueva();
		click_enviar();
		return this.container;
	};

	Categories.prototype.draw_nueva = function() {	
		return $('<div/>',{class:"col s12 m6"}).append(
			$('<div/>',{class:"card white"}).append(
				$('<div/>',{class:"card-content"}).append(
					$('<span/>',{class:'card-title black-text'}).html(
						'Nueva Categoria'
						)
					),
				$('<div/>').append(
					$('<a>', {class: 'waves-effect btn btn-n right'}).html('Crear').append(
						$('<i>', {class: 'mdi-editor-border-color left'})
						)
					)
				)
			)
	}

	return Categories;
})();

function act_modales() {
	return 	$('.modal-trigger').leanModal();
}

function click_editar(){
	return ($('.btn-e').click(function(){
		$('.enviar').attr('id', $(this).attr('id') )
	}));
}

function click_eliminar() {
	return ($(".btn-b").click(function(){
		var id = {"id":$(this).attr('id'),"category": ""};
		category = new Category(id);
		category.delete_category();
	}));
}

function click_nueva() {
	return ($('.btn-n').click(function(){
		console.log("nueva");
	}));
}

function click_enviar() {
	return ($('.enviar').click(function(){
		var data = {"id":$(this).attr('id'),"category": $('#new_name').val()}
		category = new Category(data)
		category.updateCategory()
	}));
}

