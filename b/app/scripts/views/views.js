var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var contactFormTemplate = require('../../templates/contactform.hbs');
var responseFormTemplate = require('../../templates/responseform.hbs');

var ContactFormView = Backbone.View.extend({
  attributes: {
    id: "contact-form",
    role: "form",
    action: "response"
  },
  tagName: "form",
  className: "form-horizontal",
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
    this.collection.create(contactData);
    Backbone.history.navigate("response", {trigger: true});
  }
});

var ResponseFormView = Backbone.View.extend({
  events: {
    'click .return-button': 'goBack'
  },
  initialize: function(){
    console.log('initialize');
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(contact){
    console.log(contact);
    this.$el.html(responseFormTemplate(contact.toJSON()));
    return this;
  },
  goBack: function(){
    event.preventDefault();
    console.log('return');
    Backbone.history.navigate("/", {trigger: true});
  }
});

module.exports = {
  ResponseFormView: ResponseFormView,
  ContactFormView: ContactFormView
};
