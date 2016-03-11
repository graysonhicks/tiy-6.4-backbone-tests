var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var contactFormTemplate = require('../templates/contactform.hbs');
var responseFormTemplate = require('../templates/responseform.hbs');

var ContactModel = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: ContactModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhickscontacts/'
});

var ContactFormView = Backbone.View.extend({
  tagName: "form",
  className: "form-horizontal",
  id: "contact-form",
  role: "form",
  events: {
    "submit": "addContact"
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(contactFormTemplate({}));
    return this;
  },
  addContact: function(){
    event.preventDefault();
    var contactData = this.$el.serializeArray().reduce(function(acum, i) {
      acum[i.name] = i.value;
      return acum;
    }, {});
    console.log('added');
    this.collection.create(contactData);
  }
});

var ResponseFormView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'request', this.changeButton );
    console.log(this.collection);
  },
  render: function(){
    this.$el.html(responseFormTemplate({}));
    return this;
  },
  changeButton: function(){
    $('.add-button').addClass('btn-success');
  }
});


var contactBook = new ContactCollection();
var formView = new ContactFormView({collection: contactBook});
$('.contact-form-container').html(formView.render().el);
var responseView = new ResponseFormView({collection: contactBook});
$('.response-form-container').html(responseView.render().el);
