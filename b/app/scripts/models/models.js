var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var ContactModel = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: ContactModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhickscontacts/'
});

module.exports = {
  ContactModel: ContactModel,
  ContactCollection: ContactCollection
};
