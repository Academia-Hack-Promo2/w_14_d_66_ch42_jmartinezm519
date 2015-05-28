var Category = (function(){

	var Category =  function(data, container){
		this.container = container;
		this.init(data);
	}

	Category.prototype.init = function(data){
		this.tasks = data.tasks;
		this.name = data.category;
		this.id = data.id;
	};	

	Category.prototype.draw = function(){		
		cuadro =( $('<div/>',{class:"col s12 m6"}).append(
			$('<div/>',{class:"card white"}).append(
				$('<div/>',{class:"card-content"}).append(
					$('<span/>',{class:'card-title black-text'}).html(
						'Sin Categoria'
						)
					),
				$('<div/>').append(
					$('<a>', {class: 'waves-effect btn disabled btn-d right',id: this.id}).html('Editar').append(
						$('<i>', {class: 'mdi-editor-border-color left'})
						),
					$('<a>',{class: 'waves-effect btn disabled btn-d right',id: this.id}).html('Borrar').append(
						$('<i>',{class: 'mdi-action-delete left'})
						)
					)
				)
			)	
		)
		return cuadro;
	};


	Category.prototype.draw1 = function(){		
		cuadro = ( $('<div/>',{class:"col s12 m6"}).append(
			$('<div/>',{class:"card white"}).append(
				$('<div/>',{class:"card-content"}).append(
					$('<span/>',{class:'card-title black-text'}).html(
						this.name
						)
					),
				$('<div/>').append(
					$('<a>', {class: 'waves-effect btn modal-trigger btn-e right',id: this.id,href: '#editar'}).html('Editar').append(
						$('<i>', {class: 'mdi-editor-border-color left'})
						),
					$('<a>',{class: 'waves-effect btn btn-b right',id: this.id,onclick:'Materialize.toast("Categoria eliminada", 3000)'}).html('Borrar').append(
						$('<i>',{class: 'mdi-action-delete left'})
						)
					)
				)
			)	
		)
		return cuadro;
	};	

	Category.prototype.drawTasks = function(container){
		return $('<div>').html(
			this.title
			)
	};

	Category.prototype.drawCategoryTasks = function(){
		return ( $('<li/>').append(
			$('<div/>',{class:'collapsible-header'}).append(
				$('<div/>',{class:'row'}).append(
					$('<div/>',{class:'col m1'}).append(
						$('<i/>',{class:'mdi-content-archive left'})
						),
					$('<div/>',{class:'col m4'}).html(' ' + this.name),
					$('<div/>',{class:' right-align'}).html('Nº de tareas ' + this.tasks.length)
					) 
				),
			$('<div/>',{class:'collapsible-body',id:'category'+this.id})
			)
		)
	};


	Category.prototype.appendToContainer = function () {
		return this.draw1()
	};

	Category.prototype.updateCategory = function(){
		var title = {"title": this.name};
		$.ajax({
			type: 'patch',
			data: title,
			url: 'http://localhost:3000/categories/'+this.id,
			success: function(data){
				var header = $('#header');
				var container = $('#cat-cont');
				$('#new_name').val('');
				categories = new Categories(container,header);
				console.log("aqui");
			},
			error: function(){
				console.log('error al actualizar');
			}
		});
	};

	Category.prototype.delete_category = function(){
		$.ajax({
			type: 'post',
			data: {_method: 'delete'},
			url: 'http://localhost:3000/categories/'+this.id,
			success: function(data){
				var header = $('#header');
				var container = $('#cat-cont');
				categories = new Categories(container,header);
			},
			error: function(){
				console.log('error al eliminar')
			}
		});
	};

	return Category;
})();