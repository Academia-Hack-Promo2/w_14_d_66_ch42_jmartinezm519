"use strict";

var Tasks = (function(){

	var Tasks = function(container){
		this.container = container;
		this.getData();
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
				self.buttonReady();
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