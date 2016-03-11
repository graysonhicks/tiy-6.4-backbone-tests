var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var router = require('./router.js');

$(function(){
  Backbone.history.start();
});
