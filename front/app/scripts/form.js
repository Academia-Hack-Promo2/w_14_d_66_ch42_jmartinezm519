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
        console.log("Tarea guardada exitosamente, falta arreglar la maqueta")
      }, 
      error: function(data) {
        console.log(data);
      }
     });
  })

});

postData();

