window.jQuery = $ = require('jquery');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');
var dotdotdot = require('dotdotdot');

var models = require('./models/models.js');
var views = require('./views/views.js');

var blogPosts = new models.BlogCollection();

blogPosts.fetch();

$(".panel-default").dotdotdot({
  watch: true,
  height: 50
});

var blogView = new views.BlogPostsView({collection: blogPosts});

$('.panel-default').append(blogView.render().el);
