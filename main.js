$(function(){
  var source = $("#rails_api").html();
  var template = Handlebars.compile(source);


  $.ajax({
    url: "http://localhost:3000/api/products"
  }).done(function(data) {

    var products = data;
    var html    = template(products);
    $('body').append(html);
  });


});
