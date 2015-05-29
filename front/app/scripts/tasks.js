"use strict";

var Tasks = (function(){

	var Tasks = function(container, data){
		this.container = container;
		if(data){
			this.init(data);
			this.draw();
		}else{
			this.getData();
		};
	}

	Tasks.prototype.init = function(data){
		var task;
		this.tasks = [];

		for (var i = 0; i < data.length; i++) {
			task = new Task(null, data[i]);
			this.tasks.push(task);
		}
	}

	Tasks.prototype.getData = function(){
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/tasks',
			success: function(data){
				self.init(data);
				self.draw();
				self.dataReady();
				self.dataDelete();
				self.dataPut();
			},

			error: function(data){
				console.log(data);
			}

		})
	};

		Tasks.prototype.dataReady = function(){
		$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	}

	Tasks.prototype.dataDelete = function(){
		return  $('.btn-delete').click(function(){    
			var dataId = {"id": this.id};
			task = new Task(null, dataId)
			task.deleteTask()
		})
	};

	Tasks.prototype.dataPut = function(){
		$('.btn-edit').click(function(){  
		var task_status = $(this).attr("data-status");
		
                if ($(this).hasClass('undone')) {
                    $(this).removeClass('undone').addClass('done')
                    $(this).attr("data-status", "Done");

                } else if ($(this).hasClass('done')) {
                    $(this).removeClass('done').addClass('undone')
                    $(this).attr("data-status", "Undone");
                };


            var data = {"id": this.id ,"status": $(this).attr("data-status")};
            task = new Task(null, data)
			task.updateTaskStatus()

			console.log(task_status)

		})
	};


	Tasks.prototype.draw = function(){
		for (var i = 0; i < this.tasks.length; i++) {

		if (i % 2 == 0) {"use strict";
			var row = $('<div>', {class: 'row'});
		};

			row.append(this.tasks[i].draw());
			this.container.append(row);
		};
	}

	return Tasks;
})();