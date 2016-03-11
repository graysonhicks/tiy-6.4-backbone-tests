var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');


var models = require('./models/models.js');
var views = require('./views/views.js');



var blogPosts = new models.BlogCollection();
var buttonModel = new models.ButtonModel();
var blogFormView = new views.BlogFormView( {collection: blogPosts} );
$('.blog-form-container').html(blogFormView.render().el);
var buttonView = new views.ButtonView( {
  el: $('#submit-button')[0],
  model: buttonModel,
  collection: blogPosts
} );
