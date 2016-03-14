window.jQuery = $ = require('jquery');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');
var dotdotdot = require('dotdotdot');

var models = require('./models/models.js');
var views = require('./views/views.js');

var blogPosts = new models.BlogCollection();



// $(".panel-default").dotdotdot({ // this plugin messed up the rendering
//   watch: true,
//   height: 50
// });

var blogView = new views.BlogPostsView({collection: blogPosts});
console.log(blogView.render().el);
$('.panel-default').append(blogView.render().el);

blogPosts.fetch();
