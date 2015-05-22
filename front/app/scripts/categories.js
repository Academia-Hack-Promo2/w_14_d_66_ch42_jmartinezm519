var Categories = (function(){

	var Categories = function(data,container){
		this.container = container;

		if(data){
			this.init(data);
			this.draw();
		}else{
			this.getData();
		}
	};

	Categories.prototype.init = function(data) {
		var category;
		this.categories = [];
		for (var i = 0;i < data.length; i++) {
			category = new Category(data[i]);
			this.categories.push(category);
		}
	};

	Categories.prototype.getData = function() {
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://localhost:3000/categories',
			success: function(data){
				self.init(data);
				self.draw;
			},
			error: function(){
				console.log('Error solicitud')
			}
		})
	};

	Categories.prototype.draw = function() {
		this.container.html('');
		for(var i = 0; i < this.categories.lengt; i++) {
			this.container.append(categories[i].draw());
			console.log(Categories[i])
		}
		return this.container;
	};

	return Categories;
})();
