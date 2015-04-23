//
// var products = {
//     template: function() {
//       return $("#products-template").html()
//     },
//     compile: function() {
//       Handlebars.compile(this.template());
//     },
//     request: function() {
//       var getProducts = $.getJSON("http://localhost:3001/api/products");
//       getProducts.done(this.buildTemplate);
//     },
//     buildTemplate: function(data) {
//       var html = compile(data);
//       $('body').append(html);
//     }
//   }
//


var products = {
  template: function() {
    return $("#rails_api").html();
  },
  compile: function() {

    return Handlebars.compile(this.template());
  },
  request: function() {
    var getProducts = $.ajax("http://localhost:3000/api/products");
    getProducts.done(this.buildTemplate);
  },
  buildTemplate: function(data) {
    var html = products.compile()(data);
    console.log('data');
    $('body').append(html);
  },
  init: function(){
    this.request();
  }
}

$(function(){
  products.init();
});

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
