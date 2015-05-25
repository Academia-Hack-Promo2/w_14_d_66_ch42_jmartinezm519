var Task = (function(){

	var Task = function(container, data){
		this.container = container;
		this.init(data);
		//this.appendTo();
	}

	Task.prototype.init = function(data){
		this.id = data.id;
		this.title = data.title;
		this.status = data.status;
		this.date = data.date;
		this.category_id = data.category_id
	};

	Task.prototype.draw = function(){

		return 	$('<div>', {class: 'col s6'}).append(
					$('<ul>', {class: 'collapsible'}).attr('data-collapsible','accordion').append(
						$('<li>').append(
							$('<div>', {class: 'collapsible-header'}).html(this.title).append(
								$('<i>', {class: 'mdi-social-whatshot'})
							)
						).append(
						$('<div/>', {class: 'collapsible-body'}).append($('<p>').html('Fecha de culminacion:'+ ' ' + this.date
						 + '<br>' + 'Status:' + ' ' + this.status)).append(
							$('<a>', {class: 'waves-effect waves-light btn btn-edit'}).html('Editar').append(
								$('<i>', {class: 'mdi-editor-border-color left'})
							)
						).append(
							$('<a>', {class: 'waves-effect waves-light btn btn-delete'}).html('Borrar').append(
								$('<i>', {class: 'mdi-action-delete left'})
							)
						)
					)
				)
		)
	}

	Task.prototype.appendTo = function(){
		if (this.container) {
			this.container.html(this.draw())
		} else {
			console.log('no found container')
		}
	}


	Task.prototype.deleteTask = function(){
		$.ajax({
			type: 'delete',
			url: 'http://localhost:3000/task'+this.id,
			success: function(data){
				console.log("Tarea eliminada"+data.id);
				tasks = new Task();
			},
			error: function(){
				console.log('Ha ocurrido un error al eliminar la tarea.')
			}
		});
	}

	Task.prototype.updateTaskStatus = function(){
		$.ajax({
			type: 'patch',
			url: 'http://localhost:3000//tasks/'+this.id+'/status',
			success: function(data){
				console.log("Status actualizado"+data.id);
				tasks = new Task();
			},
			error: function(){
				console.log('Ha ocurrido un error al actualizar el status.')
			}
		});
	}

	Task.prototype.postData = function(){
		var data = {
			'title': $('#text_title').val(),
			'data': $('#date_task').val()
			'category_id': $('#categories').val()
		};

		$.ajax({
      	type: 'post',
      	url: 'http://localhost:3000/tasks',
      	data: new_task,
      	success: function(data) {
        console.log(data);
        console.log("Tarea Nueva")
      }, 
      error: function(data) {
        console.log(data);
      }
   	 });
};
	

	return Task;
})();


// // NO FUNCIONA
// var task = new Task(null);
// //	getData()
// //		init();
// task.appendTo(); // fallo
// $('.container').append(task.draw());



// var task = new Task(null, data);
// //	init();
// task.appendTo(); //fallo
// $('.container').append(task.draw());


// // NO FUNCIONA
// var task = new Task($('.container'));
// //	getData()
// //		init();

// task.appendTo();
// $('.container').append(task.draw());



// var task = new Task($('.container'), data);
// // init();

// task.appendTo();
// $('.container').append(task.draw());


// var task = new Task($('.parent'), {

// })

// task.save();
