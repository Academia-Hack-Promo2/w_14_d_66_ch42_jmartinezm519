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

		if (this.status == 'Done') {
			var change_class = "done"
		}else{
			change_class = "undone"
		}

		return 	$('<div>', {class: 'col m6 s12'}).append(
					$('<ul>', {class: 'collapsible'}).attr('data-collapsible','accordion').append(
						$('<li>').append(
							$('<div>', {class: 'collapsible-header'}).html(this.title).append(
								$('<i>', {class: 'mdi-action-toc'})
							)
						).append(
						$('<div/>', {class: 'collapsible-body'}).append($('<p>').html('Fecha de culminacion:'+ ' ' + this.date
						 + '<br>' + 'Status:' + ' ' + this.status)).append(
							$('<a>', {id:this.id, class: 'waves-effect waves-light btn btn-edit right '+ change_class +''}).attr('data-status', this.status).html('Editar status').append(
								$('<i>', {class: 'mdi-editor-border-color left'})
							)
						).append(
							$('<a>', { id:this.id, class: 'waves-effect waves-light btn btn-delete right'}).html('Borrar').append(
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
		type: 'post',
		data: {_method: 'delete'},
        url: 'http://localhost:3000/tasks/'+this.id,
        success: function(data){
        $('.tasks').html('');
        var container = $('.tasks')
          tasks = new Tasks(container)
        Materialize.toast('Tarea borrada', 3000)
        },
        error: function(){
          console.log('Ha ocurrido un error al eliminar la tarea.')
        }
      });
	}

	Task.prototype.updateTaskStatus = function(){
		var status = {"status": this.status};
		$.ajax({
        	type: 'patch',
        	url: 'http://localhost:3000/tasks/'+this.id+'/status',
        	data: status,
        success: function(data){
      		$('.tasks').html('');
        	var container = $('.tasks')
          	tasks = new Tasks(container)
        	Materialize.toast('Status editado', 3000)
        },
        error: function(){
          console.log('Ha ocurrido un error al actualizar el status.');
        }
      });
	}

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
