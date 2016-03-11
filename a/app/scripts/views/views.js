var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var blogFormTemplate = require('../../templates/blogformtemplate.hbs');

var BlogFormView = Backbone.View.extend({
  tagName: "form",
  className: "form-horizontal blog-form",
  events: {
    'submit': "blogSubmit",

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

module.exports = {
  ButtonView: ButtonView,
  BlogFormView: BlogFormView
};
