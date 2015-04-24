// ---------------ORIGINAL---------------
// $(function(){
//   var source = $("#rails_api").html();
//   var template = Handlebars.compile(source);
//
//
//   $.ajax({
//     url: "http://localhost:3000/api/products"
//   }).done(function(data) {
//
//     var products = data;
//     var html    = template(products);
//     $('body').append(html);
//   });
//
//
// });

// ------------MODULE PATTERN------------
$( document ).ready(function() {
  var feature = (function() {
    var result = {
      ajaxin:ajaxin
    };

    var source = $("#rails_api").html();
    var template = Handlebars.compile(source);

    function ajaxin() {
      $.ajax({
        url: "http://localhost:3000/api/products"
      }).done(function(data) {
        var products = data;
        var html    = template(products);
        $('body').append(html);
      })
    };
    return result;
  })();
  feature.ajaxin();
});




// ------------OBJECT PATTERN------------
// var products = {
//   template: function() {
//     return $("#rails_api").html();
//   },
//   compile: function() {
//
//     return Handlebars.compile(this.template());
//   },
//   request: function() {
//     var getProducts = $.ajax("http://localhost:3000/api/products");
//     getProducts.done(this.buildTemplate);
//   },
//   buildTemplate: function(data) {
//     var html = products.compile()(data);
//     console.log('data');
//     $('body').append(html);
//   },
//   init: function(){
//     this.request();
//   }
// }
//
// $(function(){
//   products.init();
// });
