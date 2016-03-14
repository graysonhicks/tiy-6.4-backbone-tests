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
  url: 'http://api.nytimes.com/svc/topstories/v1/technology.json?api-key=3c94b85faa9ae579169677c72bf78111:15:74695232',
  parse: function(data){
    console.log(data.results);
    return data.results;
  }
});

module.exports = {
  BlogModel: BlogModel,
  BlogCollection: BlogCollection,
};
