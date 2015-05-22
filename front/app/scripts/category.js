var Category = (function(){

	var Category =  function(data, container){
	// this.id = container.data('Categories');

		if(data){
			this.init(data);
			this.draw();
		}else{
			this.getData();
		}
	}

	Category.prototype.init = function(data){
		this.name = data.category;
		this.id = data.id;
	};	

	// Category.prototype.getData = function(){
	// 	$.ajax({
	// 		type: ,
	// 		url: ,
	// 		success: function(){

	// 		},
	// 		error: function(){

	// 		}
	// 	});
	// };

	Category.prototype.draw = function(){
		console.log(this.name)
		// return this.container.html(
		// 	$("<div/>",{class:""}).append(
		// 		$("<div/>",{class:""}).append(
		// 			)
		// 		)
		// 	)
	};

	return Category;
})();