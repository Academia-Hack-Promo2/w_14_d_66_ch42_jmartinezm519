var postData = (function(){

  (function () {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/categories',
      success: function (data) {
        for (var i = 0; i < data.length; i++ ) {
          $('#categories').append(
            '<option value="' + data[i].id + '">'
            + data[i].category + 
            '</option>');
        } 
      }, 
      error: function(data) {
        console.log(data);
      }
    }); 
  }()); 

  $('.btn-save').click(function(){
    var dataTask = {
      "title": $('.text_title').val(),
      "date": $('#date_task').val(),
      "category_id": $('#categories').val()
    };

    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/tasks',
      data: dataTask,
      success: function(data) {
        console.log(data);
        console.log("Tarea guardada exitosamente, falta arreglar la maqueta ")
      }, 
      error: function(data) {
        console.log(data);
      }
    });
  })

});

var postCategory = (function(){

  $('#postEnviar').click(function(){
    var dataCategory = {
      "title": $('#category_name').val(),
    };

    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/categories',
      data: dataCategory,
      success: function(data) {
        console.log(data)
        var header = $('#header');
        var container = $('#cat-cont');
        categories = new Categories(container,header);
        if (data.title.length < 5 ){
          Materialize.toast('Categoria No Creada', 3000)
        }
        else{
          Materialize.toast('Categoria Creada', 3000)
        }
        $('#category_name').val(' '),
        postCategory();
      }, 
      error: function(data) {
        console.log(data);
      }
    });
  })
})

postData();
postCategory();
