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
		return $('<div/>', {class: 'col s4'}).append(
				$('<p>').html(this.title)
			)
	}

	Task.prototype.appendTo = function(){
		if (this.container) {
			this.container.html(this.draw())
		} else {
			console.log('no found container')
		}
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

