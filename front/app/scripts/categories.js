var Categories = (function(){

	var Categories = function(container,header,data){
		this.container = container;
		this.header = header;
		this.funciones = [];

		this.funciones.push(function() {
			return 	$('.modal-trigger').leanModal();
		});
		
		this.funciones.push(function(){
			return ($('.btn-e').click(function(){
				$('.updateEditar').attr('id', $(this).attr('id'))
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
			return ($('.updateEditar').click(function(){
				var data = {"id":$(this).attr('id'),"category": $('#new_name').val()};
				category = new Category(data);
				category.updateCategory();
				$(this).attr('id','');
				$('#new_name').val('');
			}))
		});

		if(data){
			this.init(data);
			this.drawCategories();
		}else{
			this.getData();
		};
	};

	Categories.prototype.init = function(data,container) {
		var category;
		this.categories = [];
		for (var i = 0;i < data.length; i++) {			
			category = new Category(data[i],container);
			this.categories.push(category);
		};
	};

	Categories.prototype.getData = function() {
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/categories_all_tasks',
			success: function(data){
				self.init(data);
				self.drawCollapse();
				self.drawCollapseTasks();
				self.drawCategories();
			},
			error: function(){
				console.log('Error solicitud');
			}
		})
	};

	Categories.prototype.drawCollapse = function(){
		this.header.html('');
		for (var i = 0; i < this.categories.length; i++) {
			this.header.append(this.categories[i].drawCategoryTasks());
		};
	};

	Categories.prototype.drawCollapseTasks = function(){
		for (var i = 0; i < this.categories.length; i++) {
			content = $('#category'+this.categories[i].id);
			for (var j = 0; j < this.categories[i].tasks.length ; j++) {
				task = this.categories[i].tasks[j];	
				content.append(
					$('<div/>',{class: 'row tareas'}).append(
						$('<div/>',{class:'col m1 center-align'}).append($('<i/>',{class: 'mdi-action-toc'})),
						$('<div/>',{class:'col m5'}).html('Titulo: '+task.title),
						$('<div/>',{class:'col m3'}).html('Fecha: '+task.date),
						$('<div/>',{class:'col m3'}).html('Estado: '+task.status) 
						)
					)
			};
		};
		$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
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
		for (var i = 0; i < this.funciones.length; i++) {
			this.funciones[i]();
		};

		return this.container;
	};

	return Categories;
})();
