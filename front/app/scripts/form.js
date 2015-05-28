$(document).ready(function(){

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
          var container = $('.tasks')
          tasks = new Tasks(container)
          $('.text_title').val(''),
          $('#date_task').val(''),
          $('#categories').val('')
          Materialize.toast('Tarea Creada', 3000)
        }, 
        error: function(data) {
          console.log(data);
        }
      });
    })

  });



var getData = (function(){
  (function () {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/categories',
      success: function (data) {
        $('#categories').html('');
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
});

var postCategory = (function(){

  $('#postEnviar').click(function(){
    var dataCategory = {"title": $('#category_name').val(),};
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/categories',
      data: dataCategory,
      success: function(data) {
        postCategory();
        $('#category_name').val('')
        if (data.title.length < 5 ){
          Materialize.toast('Categoria No Creada', 3000)
        }
        else{
          getData();
          var header = $('#header');
          var container = $('#cat-cont');
          categories = new Categories(container,header);
          Materialize.toast('Categoria Creada', 3000)
        };
      }, 
      error: function(data) {
      }
    });
  })
})


postData();
postCategory();

});