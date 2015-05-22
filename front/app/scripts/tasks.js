var Tasks = (function(){

	var Tasks = function(container){
		this.container = container
		this.getData();
	}

	Tasks.prototype.init = function(data){
		var task;
		this.tasks = []

		for (var i = 0; i < data.length; i++) {
			task = new Task(null, data[i])
			this.tasks.push(task)
		};
	}

	Tasks.prototype.getData = function(){
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/tasks',
			success: function(data){
				self.init(data);
				self.draw();
			},

			error: function(data){
				console.log(data);
			}

		})
	}

	Tasks.prototype.draw = function(){
		for (var i = 0; i < this.tasks.length; i++) {
			this.container.append(this.tasks[i].draw())
		};
	}

	return Tasks;
})();