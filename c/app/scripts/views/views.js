var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var blogPostsTemplate = require('../../templates/blogformtemplate.hbs');

var BlogPostsView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, "add", this.renderChild);
  },
  renderChild: function(post){
    var view = new BlogItemView({model: post});
    this.$el.append(view.render().el);
  },
  render: function(){
    return this;
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: "li",
  template: blogPostsTemplate,
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  BlogPostsView: BlogPostsView,
  BlogItemView: BlogItemView
};
