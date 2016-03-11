var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var BlogModel = Backbone.Model.extend({
  initialize: function(){
    console.log('new BlogModel');
  }
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhicksblog/'
});



var ButtonModel = Backbone.Model.extend({
});

module.exports = {
  BlogModel: BlogModel,
  BlogCollection: BlogCollection,
  ButtonModel: ButtonModel
};
