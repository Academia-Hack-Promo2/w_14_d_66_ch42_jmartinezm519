var Categories = (function(){

	var Categories = function(container,data){
		this.container = container
		this.funciones = [];

		this.funciones.push(function() {
			return 	$('.modal-trigger').leanModal();
		});
		
		this.funciones.push(function(){
			return ($('.btn-e').click(function(){
				$('.enviar').attr('id', $(this).attr('id'))
			}))
		});

		this.funciones.push(function(){
			return ($(".btn-b").click(function(){
				var id = {"id":$(this).attr('id'),"category": ""};
				category = new Category(id);
				category.delete_category();
			}))
		});	

		this.funciones.push(function(){
			return ($('.enviar').click(function(){
				var data = {"id":$(this).attr('id'),"category": $('#new_name').val()}
				category = new Category(data);
				console.log('update')
				category.updateCategory();
			}))
		});

		if(data){
			this.init(data);
			this.drawCategories();
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
				self.drawCategories();
			},
			error: function(){
				console.log('Error solicitud')
			}
		})
	};

	Categories.prototype.drawCategories = function() {
		this.container.html('');
		for(var i = 0; i < this.categories.length; i++) {			
			if (i == 0){
				this.container.append(this.categories[i].draw());
			}else{		
				this.container.append(this.categories[i].appendToContainer());
			}
		}
		this.container.append(this.draw_nueva);

		this.funciones[1]();
		this.funciones[2]();
		this.funciones[3]();
		this.funciones[0]();

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
					$('<a>', {class: 'waves-effect btn btn-n right modal-trigger',href:'#nueva'}).html('Crear').append(
						$('<i>', {class: 'mdi-editor-border-color left'})
						)
					)
				)
			)
	}

	return Categories;
})();
