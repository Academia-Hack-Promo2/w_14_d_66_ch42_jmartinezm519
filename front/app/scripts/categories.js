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
			url: 'http://localhost:3000/categories_all_tasks',
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
		Events = new Events();
		for(var i = 0; i < this.categories.length; i++) {			
			if (i == 0){
				this.container.append(this.categories[i].draw());				
			}else{
				this.container.append(this.categories[i].draw1());
			}
		}
		this.container.append(this.draw_nueva);
		
		Events = new Events();
		Events.act_modales();
		Events.click_editar();
		Events.click_nueva();
		Events.click_enviar();
		Events.click_eliminar();

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
