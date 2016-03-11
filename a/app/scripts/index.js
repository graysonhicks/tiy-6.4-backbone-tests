var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var blogFormTemplate = require('../templates/blogformtemplate.hbs');

var BlogModel = Backbone.Model.extend({
  initialize: function(){
    console.log('new BlogModel');
  }
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhicks/blog/'
});

var BlogFormView = Backbone.View.extend({
  tagName: "form",
  className: "form-horizontal blog-form",
  events: {
    'submit': "blogSubmit"
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(blogFormTemplate({}));
    return this;
  },
  blogSubmit: function(event){
    event.preventDefault();
    var blogPostData = this.$el.serializeArray().reduce(function(acum, i) {
      acum[i.name] = i.value;
      return acum;
    }, {});
    this.collection.create(blogPostData);
    }
  }
);

var ButtonModel = Backbone.Model.extend({
});

var ButtonView = Backbone.View.extend({
  events: {
  },
  initialize: function() {
    this.listenTo(this.collection, 'request', this.waitingButton );
    this.listenTo(this.collection, 'sync', this.successButton );
    this.listenTo(this.collection, 'error', this.errorButton );
  },
  waitingButton: function(){
    this.$el.removeClass('btn-default');
    this.$el.addClass('btn-muted');
    this.$el.text('Waiting!');
  },
  successButton: function(){
    this.$el.removeClass('btn-default');
    this.$el.addClass('btn-success');
    this.$el.text('Submitted!');
    this.$el.attr('disabled', true);
  },
  errorButton: function(){
    this.$el.removeClass('btn-default');
    this.$el.addClass('btn-danger');
    this.$el.text('Error!');
  }
});

var blogPosts = new BlogCollection();
var buttonModel = new ButtonModel();
var blogFormView = new BlogFormView( {collection: blogPosts} );
$('.blog-form-container').html(blogFormView.render().el);
var buttonView = new ButtonView( {
  el: $('#submit-button')[0],
  model: buttonModel,
  collection: blogPosts
} );
